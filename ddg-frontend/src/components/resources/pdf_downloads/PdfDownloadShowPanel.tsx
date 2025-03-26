import {
  ArrayField,
  BooleanField,
  Datagrid,
  DateField,
  Labeled,
  ReferenceField,
  SimpleShowLayout,
  TextField,
  useRecordContext,
  useTranslate,
} from "react-admin";
import { Grid, ListItem } from "@mui/material";

import { Panel } from "../../custom/common/Panel";
import { PdfStudentsShowPanel } from "./PdfStudentsShowPanel";

export const PdfDownloadShowPanel = () => {
  const record = useRecordContext();
  const t = useTranslate();

  return (
    record && (
      <SimpleShowLayout record={record} sx={{ backgroundColor: "grey.100" }}>
        {record.trainingCycle && (
          <Panel caption={t("resources.pdf_downloads.fields.trainingCycle")}>
            <ReferenceField source="trainingCycle" reference="training_cycles">
              <TextField source="name" />
            </ReferenceField>
          </Panel>
        )}
        {record.course > "" && (
          <Panel caption={t("resources.pdf_downloads.fields.course")}>
            <ReferenceField source="course" reference="courses" />
          </Panel>
        )}
        {record.documentNumber && (
          <Panel caption={t("resources.pdf_downloads.fields.documentNumber")}>
            <TextField source="documentNumber" />
          </Panel>
        )}
        {record.includeRelated?.length > 0 && (
          <Panel caption={t("resources.pdf_downloads.fields.includeRelated")}>
            {record.includeRelated?.map((item: string) => (
              <ListItem key={item}>
                {t("pages.pdf.document_names." + item)}
              </ListItem>
            ))}
          </Panel>
        )}
        {record.students?.length && (
          <Panel caption={t("resources.students.name", 2)}>
            <PdfStudentsShowPanel />
          </Panel>
        )}
        {record.learningOutcomes?.length && (
          <Panel caption={t("resources.learning_outcomes.name", 2)}>
            <ArrayField source="learningOutcomes">
              <Datagrid bulkActionButtons={false}>
                <ReferenceField
                  source="learningOutcome"
                  reference="learning_outcomes"
                  label={t("resources.learning_outcomes.name", 1)}
                  link={false}
                >
                  <TextField source="code" />
                </ReferenceField>
                <BooleanField source="integrallyInCenter" />
                <BooleanField source="integrallyInCompany" />
              </Datagrid>
            </ArrayField>
          </Panel>
        )}
        {record.signatory && (
          <Panel caption={t("resources.pdf_downloads.fields.signatory.title")}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Labeled
                  label={t(
                    "resources.pdf_downloads.fields.signatory.centerName",
                  )}
                >
                  <TextField source="signatory.centerName" />
                </Labeled>
              </Grid>
              <Grid item xs={12} md={4}>
                <Labeled
                  label={t(
                    "resources.pdf_downloads.fields.signatory.companyName",
                  )}
                >
                  <TextField source="signatory.companyName" />
                </Labeled>
              </Grid>
              <Grid item xs={12} md={4}>
                <Labeled
                  label={t(
                    "resources.pdf_downloads.fields.signatory.companyName2",
                  )}
                >
                  <TextField source="signatory.companyName2" />
                </Labeled>
              </Grid>
              <Grid item xs={12} md={4}>
                <Labeled
                  label={t("resources.pdf_downloads.fields.signatory.place")}
                >
                  <TextField source="signatory.place" />
                </Labeled>
              </Grid>
              <Grid item xs={12} md={4}>
                <Labeled
                  label={t("resources.pdf_downloads.fields.signatory.date")}
                >
                  <DateField source="signatory.date" />
                </Labeled>
              </Grid>
            </Grid>
          </Panel>
        )}
        {record.companyTutor && (
          <Panel
            caption={t("resources.pdf_downloads.fields.companyTutor.title")}
          >
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <Labeled
                  label={t("resources.pdf_downloads.fields.companyTutor.name")}
                >
                  <TextField source="companyTutor.name" />
                </Labeled>
              </Grid>
              <Grid item xs={12} md={4}>
                <Labeled
                  label={t(
                    "resources.pdf_downloads.fields.companyTutor.lastName",
                  )}
                >
                  <TextField source="companyTutor.lastName" />
                </Labeled>
              </Grid>
              <Grid item xs={12} md={2}>
                <Labeled
                  label={t("resources.pdf_downloads.fields.companyTutor.nif")}
                >
                  <TextField source="companyTutor.nif" />
                </Labeled>
              </Grid>
              <Grid item xs={12} md={2}>
                <Labeled
                  label={t("resources.pdf_downloads.fields.companyTutor.phone")}
                >
                  <TextField source="companyTutor.phone" />
                </Labeled>
              </Grid>
            </Grid>
          </Panel>
        )}
        {record.teacher && (
          <Panel caption={t("resources.pdf_downloads.fields.teacher")}>
            <ReferenceField source="teacher" reference="teachers">
              <TextField source="fullName" />
            </ReferenceField>
          </Panel>
        )}
      </SimpleShowLayout>
    )
  );
};
