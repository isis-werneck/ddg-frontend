import { Grid, TextField, Typography } from "@mui/material";

import { ClearableTextField } from "../../custom/input_fields/ClearableTextField";
import type { PdfCompanyTutor_pdf_write } from "../../../services/openapi";
import { Show } from "./inputs/Show";
import { useEffect } from "react";
import { usePdfWizardContext } from "../context/PdfWizardContext";
import { useSelectorContext } from "../context/SelectorContext";
import { useTranslate } from "react-admin";

export const CompanyTutorSelector = () => {
  const t = useTranslate();
  const { formData, setPartial, markStepCompleted } = usePdfWizardContext();
  const { isShown } = useSelectorContext();

  const setValue = (
    field: keyof PdfCompanyTutor_pdf_write,
    value: string | null,
  ) => {
    setPartial({
      companyTutor: {
        ...formData.companyTutor,
        [field]: value,
      },
    });
  };

  // InitValues
  formData.companyTutor = formData.companyTutor || {};
  formData.companyTutor.name = formData.companyTutor?.name || "";
  formData.companyTutor.lastName = formData.companyTutor?.lastName || "";
  formData.companyTutor.nif = formData.companyTutor?.nif || "";
  formData.companyTutor.phone = formData.companyTutor?.phone || "";
  formData.companyTutor.email = formData.companyTutor?.email || "";

  useEffect(() => {
    const isComplete =
      (!isShown("name") || formData.companyTutor?.name) &&
      (!isShown("lastName") || formData.companyTutor?.lastName) &&
      (!isShown("nif") || formData.companyTutor?.nif) &&
      (!isShown("address") ||
        (formData.companyTutor?.address &&
          formData.companyTutor?.postalCode &&
          formData.companyTutor?.city));
    markStepCompleted(isComplete ? true : false);
  }, [formData.companyTutor, markStepCompleted, isShown]);

  return (
    <Grid container spacing={3}>
      <Show when="name">
        <Grid item xs={12} lg={4}>
          <TextField
            value={formData.companyTutor?.name}
            label={t("resources.companies.fields.tutorName") + " *"}
            onChange={(e) => {
              setValue("name", e.target.value);
            }}
          />
        </Grid>
      </Show>
      <Show when="lastName">
        <Grid item xs={12} lg={4}>
          <TextField
            value={formData.companyTutor?.lastName}
            label={t("resources.companies.fields.tutorLastName") + " *"}
            onChange={(e) => {
              setValue("lastName", e.target.value);
            }}
          />
        </Grid>
      </Show>
      <Show when="nif">
        <Grid item xs={12} lg={4}>
          <TextField
            value={formData.companyTutor?.nif}
            label={t("resources.companies.fields.tutorNif") + " *"}
            onChange={(e) => {
              setValue("nif", e.target.value);
            }}
          />
        </Grid>
      </Show>
      <Show when="email">
        <Grid item xs={12} lg={4}>
          <TextField
            value={formData.companyTutor?.email}
            label={t("resources.companies.fields.tutorMail")}
            onChange={(e) => {
              setValue("email", e.target.value);
            }}
          />
        </Grid>
      </Show>
      <Show when="phone">
        <Grid item xs={12} lg={4}>
          <TextField
            value={formData.companyTutor?.phone}
            label={t("resources.companies.fields.tutorPhone")}
            onChange={(e) => {
              setValue("phone", e.target.value);
            }}
          />
        </Grid>
      </Show>
      <Show when="address">
        <Grid item xs={12} sx={{ borderBottom: "1px solid #ccc" }}>
          <Typography variant="h6">
            {t("pages.pdf.company_tutor.address")}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <ClearableTextField
            onClear={() => {
              setValue("address", "");
            }}
            value={formData.companyTutor?.address}
            label={t("resources.companies.fields.address") + " *"}
            onChange={(e) => {
              setValue("address", e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ClearableTextField
            onClear={() => {
              setValue("postalCode", "");
            }}
            value={formData.companyTutor?.postalCode}
            label={t("resources.companies.fields.postalCode") + " *"}
            onChange={(e) => {
              setValue("postalCode", e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ClearableTextField
            onClear={() => {
              setValue("city", "");
            }}
            value={formData.companyTutor?.city}
            label={t("resources.companies.fields.city") + " *"}
            onChange={(e) => {
              setValue("city", e.target.value);
            }}
          />
        </Grid>
      </Show>
    </Grid>
  );
};
