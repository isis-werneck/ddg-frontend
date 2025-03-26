import type {
  Course_jsonld_course_read_timestamps,
  PdfStudent_pdf_write,
} from "../../../services/openapi";
import { Loading, useDataProvider } from "react-admin";
import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { PdfFileType } from "../../../hooks/usePdfFormData.ts";
import { ResourceMultiSelect } from "../../custom/resource_multi_select/ResourceMultiSelect.tsx";
import { useMultiSelection } from "../../../hooks/useMultiSelection.ts";
import { usePdfWizardContext } from "../context/PdfWizardContext.tsx";
import { useUserCourses } from "../../../hooks/useUserCourses.ts";

export const CourseSelector = () => {
  const [selectedItems, setSelectedItems] = useState<
    Course_jsonld_course_read_timestamps[]
  >([]);

  const [filterToquery, setFilterToquery] = useState<
    Record<string, string | Array<string | number>>
  >({});

  const [filterReady, setFilterReady] = useState<boolean>(false);

  const dataProvider = useDataProvider();

  const typesUserTutor: (PdfFileType | null)[] = [
    PdfFileType.FFE_ANEXO3_PLAN,
    PdfFileType.FFE_EVALUACION_PRL_ANEXO1,
    PdfFileType.FFE_EVALUACION_PRL_ANEXO2,
  ];

  const {
    markStepCompleted,
    formData,
    setPartial,
    setCourse,
    setStudentList,
    studentList,
  } = usePdfWizardContext();
  const [, { select }] = useMultiSelection({ resource: "courses" });

  const { ready, userCourses } = useUserCourses();

  const [selectedStudents, { select: selectStudents }] = useMultiSelection({
    resource: "students",
  });

  useEffect(() => {
    if (ready && userCourses?.length) {
      const courseIds = userCourses.map((c) => c["@id"] || 0);
      if (
        filterToquery.id &&
        courseIds.length === filterToquery.id.length &&
        courseIds.every((id) => filterToquery.id.includes(id || ""))
      ) {
        setFilterReady(true);
        return;
      }

      setFilterToquery({
        ...filterToquery,
        id: courseIds,
      });
    }
    setFilterReady(ready && !userCourses?.length);
  }, [filterToquery, ready, userCourses]);

  const handleSelectionChange = (
    courses: Course_jsonld_course_read_timestamps[],
  ) => {
    // Clear selected pdfs and students if course changes
    if (courses[0]?.["@id"] !== formData.course) {
      localStorage.removeItem(`RaStore.pdf_downloads_multi.selectedIds`);
      localStorage.removeItem(`RaStore.students_multi.selectedIds`);
      localStorage.removeItem(`RaStore.modules_multi.selectedIds`);
    }

    setSelectedItems(courses);
    setCourse(courses[0] || null);
    let students: PdfStudent_pdf_write[] = [];
    if (studentList?.length) {
      const validStudents = studentList.filter(
        (student) => student.course === courses?.[0]?.["@id"],
      );
      setStudentList(validStudents);

      selectStudents(
        selectedStudents.filter((studentId) =>
          validStudents.some((s) => s.id === studentId),
        ),
      );
      students =
        formData.students?.filter((student) =>
          validStudents.some((s) => s["@id"] === student.id),
        ) || [];
    }

    const signatory = formData.signatory || {};
    if (typesUserTutor.includes(formData.fileType) && courses[0]?.tutor) {
      dataProvider
        .getOne("teachers", {
          id: courses[0]?.tutor,
        })
        .then((response) => {
          signatory.centerName = response.data.fullName || signatory.centerName;
          setPartial({ signatory });
        });
    } else {
      signatory.centerName = "";
    }

    setPartial({
      course: courses[0] ? courses[0]["@id"] : null,
      module: null,
      students,
      signatory,
    });
  };

  useEffect(() => {
    if (formData.course && !selectedItems.length) {
      select([formData.course]);
    }
    markStepCompleted(!!formData.course);
  }, [formData.course, markStepCompleted, select, selectedItems.length]);

  if (!ready || !filterReady) {
    return <Loading loadingSecondary="" />;
  }

  return (
    <Box>
      <ResourceMultiSelect<Course_jsonld_course_read_timestamps>
        filterFields={["name"]}
        resource="courses"
        selectOne={true}
        setSelectedItems={handleSelectionChange}
        selectedItems={selectedItems}
        fields={["name"]}
        filterToQuery={{ ...filterToquery }}
      />
    </Box>
  );
};
