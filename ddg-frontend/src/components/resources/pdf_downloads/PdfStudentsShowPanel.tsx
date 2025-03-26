import {
  ArrayField,
  BooleanField,
  Datagrid,
  DateField,
  NumberField,
  ReferenceField,
  TextField,
  WrapperField,
  useListContext,
  useRecordContext,
  useTranslate,
} from "react-admin";
import { List, ListItem } from "@mui/material";

import type { PdfStudent_pdf_read_timestamps } from "../../../services/openapi";

export const PdfStudentsShowPanel = () => {
  const t = useTranslate();
  const record = useRecordContext();
  const students = record?.students || [];

  const some = (fieldName: keyof PdfStudent_pdf_read_timestamps) => {
    return students.some(
      (s: PdfStudent_pdf_read_timestamps) =>
        s[fieldName] &&
        (fieldName == "trainingPeriods" ? s[fieldName].length : true),
    );
  };

  const TrainingPeriodsList = () => {
    const list = useListContext();
    return (
      <List sx={{ padding: 0 }}>
        {list?.data?.map((s, index: number) => (
          <ListItem
            key={index}
            sx={{
              padding: 0.2,
              backgroundColor: index % 2 == 0 ? "grey.100" : "background.paper",
            }}
          >
            {s.number} - {s.calendar} / {s.schedule}
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <ArrayField source="students">
      <Datagrid
        bulkActionButtons={false}
        setSort={() => false}
        sort={undefined}
        sx={{ backgroundColor: "background.paper" }}
      >
        <ReferenceField
          source="id"
          reference="students"
          label={t("resources.students.name", 1)}
          link={false}
        >
          <TextField source="fullName" />
        </ReferenceField>

        {some("periodFrom") && (
          <DateField
            source="periodFrom"
            label={t("resources.pdf_downloads.fields.students.periodFrom")}
          />
        )}
        {some("periodTo") && (
          <DateField
            source="periodTo"
            label={t("resources.pdf_downloads.fields.students.periodTo")}
          />
        )}
        {some("startTime") && (
          <TextField
            source="startTime"
            label={t("resources.pdf_downloads.fields.students.startTime")}
          />
        )}
        {some("endTime") && (
          <TextField
            source="endTime"
            label={t("resources.pdf_downloads.fields.students.endTime")}
          />
        )}
        {some("hoursAndDays") && (
          <TextField
            source="hoursAndDays"
            label={t("resources.pdf_downloads.fields.students.hoursAndDays")}
          />
        )}
        {some("totalHours") && (
          <NumberField
            source="totalHours"
            label={t("resources.pdf_downloads.fields.students.totalHours")}
          />
        )}
        {some("weeklyHours") && (
          <NumberField
            source="weeklyHours"
            label={t("resources.pdf_downloads.fields.students.weeklyHours")}
          />
        )}
        {some("a3Info") && (
          <WrapperField
            source="a3Info.disabilityMeasures"
            label={t(
              "resources.pdf_downloads.fields.students.a3Info.disabilityMeasures",
            )}
          >
            <BooleanField source="a3Info.disabilityMeasures" />
            <TextField source="a3Info.disabilityMeasuresComments" />
          </WrapperField>
        )}
        {some("a3Info") && (
          <WrapperField
            source="a3Info.extraordinaryAuthorization"
            label={t(
              "resources.pdf_downloads.fields.students.a3Info.extraordinaryAuthorization",
            )}
          >
            <BooleanField source="a3Info.extraordinaryAuthorization" />
            <TextField source="a3Info.extraordinaryAuthorizationComments" />
          </WrapperField>
        )}
        {some("a3Info") && (
          <BooleanField
            source="a3Info.extraordinaryAuthorization"
            label={t(
              "resources.pdf_downloads.fields.students.a3Info.multipleCompanies",
            )}
            textAlign="center"
          ></BooleanField>
        )}
        {some("trainingPeriods") && (
          <ArrayField
            source="trainingPeriods"
            label={t(
              "resources.pdf_downloads.fields.students.trainingPeriods.title",
            )}
          >
            <TrainingPeriodsList></TrainingPeriodsList>
          </ArrayField>
        )}
      </Datagrid>
    </ArrayField>
  );
};
