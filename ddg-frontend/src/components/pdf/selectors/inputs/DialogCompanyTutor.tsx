import {
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { Cancel, Close, Comment, Save, School } from "@mui/icons-material";
import type {
  PdfCompanyTutor_pdf_write,
  PdfStudent_pdf_write,
} from "../../../../services/openapi";
import { useCallback, useState } from "react";

import { useTranslate } from "react-admin";

export type AssessmentCommentsProps = {
  student: PdfStudent_pdf_write;
  onChange: (student: PdfStudent_pdf_write) => void;
  titleInfo?: string | JSX.Element;
  fields?: (keyof PdfCompanyTutor_pdf_write)[];
};

export const DialogCompanyTutor = (props: AssessmentCommentsProps) => {
  const t = useTranslate();

  const { student, onChange, titleInfo } = props;

  const [open, setOpen] = useState<boolean>(false);

  const [companyTutor, setCompanyTutor] = useState<PdfCompanyTutor_pdf_write>(
    student?.companyTutor || {
      name: "",
      email: "",
      phone: "",
      lastName: "",
      nif: "",
    },
  );

  const setValue = (
    field: keyof PdfCompanyTutor_pdf_write,
    value: string | null,
  ) => {
    setCompanyTutor((prev) => ({ ...prev, [field]: value }));
  };

  const save = () => {
    student.companyTutor = companyTutor;
    onChange(student);
    setOpen(false);
  };

  const isShown = useCallback(
    (field: keyof PdfCompanyTutor_pdf_write) => {
      return !props.fields || props.fields.includes(field);
    },
    [props],
  );

  const someEmpty = useCallback(() => {
    return Object.keys(companyTutor).some(
      (key) =>
        isShown(key as keyof PdfCompanyTutor_pdf_write) &&
        !companyTutor[key as keyof PdfCompanyTutor_pdf_write],
    );
  }, [companyTutor, isShown]);

  return (
    <>
      <Button
        variant="outlined"
        title={t("resources.pdf_downloads.fields.students.companyTutor")}
        onClick={() => setOpen(!open)}
      >
        <School />
        <Badge
          invisible={someEmpty()}
          color={"success"}
          variant="dot"
          sx={{ ml: 7, mt: 4, position: "absolute" }}
        />
      </Button>
      {open && (
        <Dialog open={open} fullWidth={true} maxWidth={"lg"}>
          <DialogTitle>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Comment color="secondary" />
              <span>{titleInfo}</span>
            </Stack>
            <IconButton
              onClick={() => setOpen(false)}
              title={t("ra.action.close")}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
              }}
            >
              <Close />
            </IconButton>
          </DialogTitle>
          <Divider />
          <DialogContent>
            <Grid container spacing={2}>
              {isShown("name") && (
                <Grid item xs={12} lg={4}>
                  <TextField
                    value={companyTutor?.name}
                    label={t("resources.companies.fields.tutorName") + " *"}
                    onChange={(e) => {
                      setValue("name", e.target.value);
                    }}
                  />
                </Grid>
              )}
              {isShown("lastName") && (
                <Grid item xs={12} lg={4}>
                  <TextField
                    value={companyTutor?.lastName}
                    label={t("resources.companies.fields.tutorLastName") + " *"}
                    onChange={(e) => {
                      setValue("lastName", e.target.value);
                    }}
                  />
                </Grid>
              )}
              {isShown("nif") && (
                <Grid item xs={12} lg={4}>
                  <TextField
                    value={companyTutor?.nif}
                    label={t("resources.companies.fields.tutorNif") + " *"}
                    onChange={(e) => {
                      setValue("nif", e.target.value);
                    }}
                  />
                </Grid>
              )}
              {isShown("email") && (
                <Grid item xs={12} lg={4}>
                  <TextField
                    value={companyTutor?.email}
                    label={t("resources.companies.fields.tutorMail")}
                    onChange={(e) => {
                      setValue("email", e.target.value);
                    }}
                  />
                </Grid>
              )}
              {isShown("phone") && (
                <Grid item xs={12} lg={4}>
                  <TextField
                    value={companyTutor?.phone}
                    label={t("resources.companies.fields.tutorPhone")}
                    onChange={(e) => {
                      setValue("phone", e.target.value);
                    }}
                  />
                </Grid>
              )}
            </Grid>
          </DialogContent>
          <Divider />
          <DialogActions sx={{ p: 3 }}>
            <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
              <Button onClick={() => setOpen(false)}>
                <Cancel /> &nbsp;
                {t("ra.action.cancel")}
              </Button>
              <Button onClick={save} variant="contained">
                <Save /> &nbsp;
                {t("ra.action.save")}
              </Button>
            </Stack>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};
