import { Box } from "@mui/material";
import { useEffect, useRef, useState, type Dispatch } from "react";
import {
  AutocompleteArrayInput,
  Form,
  Loading,
  ReferenceArrayInput,
  ReferenceField,
  useDataProvider,
  useTranslate,
  type Identifier,
} from "react-admin";
import type { Student_jsonld_student_read_timestamps } from "../../../services/openapi";

import { useMultiSelection } from "../../../hooks/useMultiSelection";
import { useUserCourses } from "../../../hooks/useUserCourses";
import { ResourceMultiSelect } from "../../custom/resource_multi_select/ResourceMultiSelect";
import { usePdfWizardContext } from "../context/PdfWizardContext";
import { useSelectorContext } from "../context/SelectorContext";

export const StudentsSelector = () => {
  const {
    formData,
    markStepCompleted,
    setPartial,
    setStudentList,
    course,
    studentList,
  } = usePdfWizardContext();

  const { selectOne } = useSelectorContext();

  const dataProvider = useDataProvider();

  const [userHasCourses, setUserHasCourses] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<
    Student_jsonld_student_read_timestamps[]
  >([]);

  const [, { select }] = useMultiSelection({ resource: "students" });

  const initialized = useRef(false);
  const [loadingNew, setLoadingNew] = useState(true);

  const [coursesIds, setCoursesIds] = useState<Identifier[]>(
    course?.["@id"] ? [course["@id"]] : [],
  );

  const { ready, userCourses } = useUserCourses();

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      select(formData.students?.map((student) => student.id) || []);

      const current = studentList.filter((student) =>
        formData.students?.some((s) => s.id === student["@id"]),
      );
      const newIds = formData.students
        ?.filter((student) => !current.some((s) => s["@id"] === student.id))
        .map((student) => student.id);
      if (newIds && newIds.length) {
        dataProvider
          .getMany("students", { ids: newIds })
          .then(({ data }) => {
            setStudentList([...current, ...data]);
            setSelectedItems([...current, ...data]);
          })
          .finally(() => setLoadingNew(false));
      } else {
        setLoadingNew(false);
        setSelectedItems(current);
      }
    }
  }, [
    dataProvider,
    formData.students,
    initialized,
    select,
    setStudentList,
    studentList,
  ]);

  useEffect(() => {
    if (course?.["@id"]) {
      setCoursesIds([course["@id"]]);
      setUserHasCourses(true);
    } else {
      if (userCourses?.length) {
        setUserHasCourses(true);
        setCoursesIds(userCourses.map((c) => c["@id"] || 0));
      }
    }
  }, [course, userCourses]);

  useEffect(() => {
    markStepCompleted(!!selectedItems.length);
  }, [selectedItems.length, markStepCompleted]);

  const handleSelectionChange = (
    students: Student_jsonld_student_read_timestamps[],
  ) => {
    const uniqueStudents = Array.from(
      new Map(students.map((student) => [student.id, student])).values(),
    );
    setPartial({
      students: uniqueStudents.map((s) => {
        const current = formData?.students?.find(
          (student) => student.id === s["@id"],
        );
        if (current) return current;
        return {
          id: s["@id"],
        };
      }),
    });
    setStudentList(uniqueStudents);
    setSelectedItems(uniqueStudents);
  };

  if (!ready || !initialized.current || loadingNew) {
    return <Loading loadingSecondary="" />;
  }

  return (
    <Box>
      <Form>
        {!userHasCourses && <CourseSelector setCourses={setCoursesIds} />}
      </Form>
      <ResourceMultiSelect<Student_jsonld_student_read_timestamps>
        filterFields={["fullName", "document"]}
        filterToQuery={{ course: coursesIds }}
        resource="students"
        selectOne={selectOne}
        setSelectedItems={handleSelectionChange}
        selectedItems={selectedItems}
        optimized={true}
        fields={[
          "fullName",
          "document",
          {
            source: "course",
            componentProps: {
              reference: "courses",
              link: false,
            },
            sortBy: "course.name",
            component: ReferenceField,
          },
        ]}
      />
    </Box>
  );
};

const CourseSelector = ({
  setCourses,
}: {
  setCourses: Dispatch<React.SetStateAction<Identifier[]>>;
}) => {
  const t = useTranslate();
  return (
    <ReferenceArrayInput source="course" reference="courses" name="courses">
      <AutocompleteArrayInput
        optionText="name"
        onChange={(ids) => setCourses(ids)}
        filterToQuery={(searchTerm) => ({ name: searchTerm })}
        label={t("resources.courses.name", 2)}
      />
    </ReferenceArrayInput>
  );
};
