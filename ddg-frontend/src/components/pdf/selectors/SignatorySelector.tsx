import { Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useTranslate } from "react-admin";
import { useGeneralSettings } from "../../../hooks/useGeneralSettings";
import { type PdfSignatory_pdf_write } from "../../../services/openapi";
import { usePdfWizardContext } from "../context/PdfWizardContext";
import { Show } from "./inputs/Show";
import { useSelectorContext } from "../context/SelectorContext";

export const SignatorySelector = () => {
  const t = useTranslate();
  const { formData, setPartial, markStepCompleted } = usePdfWizardContext();
  const { ready, centerLegalRepresentationName, centerCity } =
    useGeneralSettings();
  const [signatory, setSignatory] = useState<PdfSignatory_pdf_write>({
    centerName: formData?.signatory?.centerName || "",
    companyName: formData?.signatory?.companyName || "",
    companyName2: formData?.signatory?.companyName2 || "",
    place: formData?.signatory?.place || "",
    date: formData?.signatory?.date || dayjs().format("YYYY-MM-DD"),
  });

  const { isShown } = useSelectorContext();

  useEffect(() => {
    if (ready) {
      const centerName =
        formData?.signatory?.centerName || centerLegalRepresentationName || "";
      const place = formData?.signatory?.place || centerCity || "";
      if (
        centerName !== formData?.signatory?.centerName ||
        place !== formData?.signatory?.place
      ) {
        setSignatory((prev) => ({
          ...prev,
          centerName: centerName,
          place: place,
        }));
      }
    }
  }, [centerCity, centerLegalRepresentationName, ready, formData.signatory]);

  useEffect(() => {
    const isComplete =
      (!isShown("centerName") || !!formData?.signatory?.centerName) &&
      (!isShown("companyName") || !!formData?.signatory?.companyName) &&
      (!isShown("place") || !!formData?.signatory?.place) &&
      (!isShown("date") || !!formData?.signatory?.date);
    markStepCompleted(isComplete);
  }, [formData?.signatory, markStepCompleted, isShown]);

  useEffect(() => {
    setPartial({
      signatory,
    });
  }, [signatory, setPartial]);

  const setValue = (
    field: keyof PdfSignatory_pdf_write,
    value: string | null,
  ) => {
    setSignatory((prev) => ({ ...prev, [field]: value }));
  };

  return (
      <Grid container spacing={3}>
        <Show when="centerName">
          <Grid item xs={12} md={6}>
            <TextField
              label={t("pages.pdf.signatory.centerName") + " *"}
              value={signatory.centerName}
              onChange={(e) => {
                setValue("centerName", e.target.value);
              }}
            />
          </Grid>
        </Show>

        <Show when="companyName">
          <Grid item xs={12} md={6}>
            <TextField
              label={t("pages.pdf.signatory.companyName") + " *"}
              value={signatory.companyName}
              onChange={(e) => {
                setValue("companyName", e.target.value);
              }}
            />
          </Grid>
        </Show>
        <Show when="companyName2">
          <Grid item xs={12} md={6}>
            <TextField
              label={t("pages.pdf.signatory.companyName2")}
              value={signatory.companyName2}
              onChange={(e) => {
                setValue("companyName2", e.target.value);
              }}
            />
          </Grid>
        </Show>
        <Show when="place">
          <Grid item xs={12} md={6}>
            <TextField
              label={t("pages.pdf.signatory.place") + " *"}
              value={signatory.place}
              onChange={(e) => {
                setValue("place", e.target.value);
              }}
            />
          </Grid>
        </Show>
        <Show when="date">
          <Grid item xs={12} md={6}>
            <DatePicker
              label={t("pages.pdf.signatory.date") + " *"}
              value={dayjs(signatory.date, "YYYY-MM-DD")}
              defaultValue={dayjs()}
              slotProps={{
                field: { clearable: true },
              }}
              onChange={(date) => {
                setValue("date", date?.format("YYYY-MM-DD") || null);
              }}
            />
          </Grid>
        </Show>
      </Grid>
  );
};
