import { useEffect, useMemo, useState } from "react";
import {
  DateField,
  FunctionField,
  ReferenceField,
  useNotify,
  useTranslate,
} from "react-admin";

import { Box } from "@mui/material";
import dayjs from "dayjs";
import {
  PdfDownload_pdf_read_timestamps,
  type PdfDownload_jsonld_pdf_read_timestamps,
} from "../../../services/openapi";
import { TextListField } from "../../custom/list/TextListField";
import { ResourceMultiSelect } from "../../custom/resource_multi_select/ResourceMultiSelect";
import { usePdfWizardContext } from "../context/PdfWizardContext";
import { useSelectorContext } from "../context/SelectorContext";

export const PdfHistorySelector = () => {
  const t = useTranslate();
  const { markStepCompleted, formData, setPartial } = usePdfWizardContext();

  const [selectedItems, setSelectedItems] = useState<
    PdfDownload_pdf_read_timestamps[]
  >([]);

  const notify = useNotify();

  const { filterByCourse, filterByType } = useSelectorContext();

  const filterToQuery = useMemo(
    () => ({
      ...(filterByCourse && formData.course && { course: formData.course }),
      ...(filterByType && { fileType: filterByType }),
    }),
    [filterByCourse, filterByType, formData.course],
  );

  const handleSelectionChange = (
    selectedItems: PdfDownload_jsonld_pdf_read_timestamps[],
  ) => {
    setSelectedItems(selectedItems);
    const mapStudents = new Map();
    const orderedPdfs = selectedItems.sort((a, b) =>
      (a.createdAt || 0) > (b.createdAt || 0) ? 1 : -1,
    );
    orderedPdfs.forEach((pdf) => {
      pdf.students?.forEach((student) => {
        if (mapStudents.get(student.id)) {
          notify("pages.pdf.duplicated_students", { type: "warning" });
        }
        student.companyTutor = pdf.companyTutor;
        student.company = pdf.company;
        mapStudents.set(student.id, student);
      });
    });
    const uniqueStudents = Array.from(mapStudents.values());
    setPartial({ students: uniqueStudents.filter((s) => !!s) });
  };

  useEffect(() => {
    markStepCompleted(true);
  }, [markStepCompleted]);

  return (
    <Box>
      <ResourceMultiSelect<PdfDownload_pdf_read_timestamps>
        filterFields={[]}
        resource="pdf_downloads"
        setSelectedItems={handleSelectionChange}
        selectedItems={selectedItems}
        selectionLabelFunction={(record: PdfDownload_pdf_read_timestamps) => (
          <>
            {dayjs(record.createdAt).format("DD/MM/YYYY")}
            {" - "}
            <ReferenceField
              record={record}
              source="company"
              link={false}
              reference="companies"
            />
            {" - "}
            {t("pages.pdf.document_names." + record.fileType)}
          </>
        )}
        fields={[
          {
            source: "createdAt",
            componentProps: {
              showTime: false,
            },
            component: DateField,
          },
          {
            source: "fileType",
            componentProps: {
              render: (record: PdfDownload_pdf_read_timestamps) =>
                t("pages.pdf.document_names." + record.fileType),
            },
            component: FunctionField,
          },
          {
            source: "company",
            componentProps: {
              reference: "companies",
              link: false,
            },
            sortBy: "company.name",
            component: ReferenceField,
          },
          {
            source: "user",
            componentProps: {
              reference: "users",
              link: false,
              children: (
                <>
                  <TextListField source="firstName" />
                  &nbsp;
                  <TextListField source="firstSurname" />
                </>
              ),
            },
            sortBy: "user.name",
            component: ReferenceField,
          },
          {
            source: "course",
            componentProps: {
              reference: "courses",
              link: false,
            },
            sortBy: "user.name",
            component: ReferenceField,
          },
        ]}
        filterToQuery={filterToQuery}
        listProps={{ sort: { field: "createdAt", order: "DESC" } }}
      />
    </Box>
  );
};
