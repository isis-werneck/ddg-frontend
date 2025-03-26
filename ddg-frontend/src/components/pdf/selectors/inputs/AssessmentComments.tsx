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
} from "@mui/material";
import { Cancel, Close, Comment, Save } from "@mui/icons-material";
import { useEffect, useState } from "react";

import { ClearableTextField } from "../../../custom/input_fields/ClearableTextField";
import type { PdfStudent_pdf_write } from "../../../../services/openapi";
import { useTranslate } from "react-admin";

export type AssessmentCommentsProps = {
  student: PdfStudent_pdf_write;
  onChange: (student: PdfStudent_pdf_write) => void;
  titleInfo?: string | JSX.Element;
};

export const AssessmentComments = (props: AssessmentCommentsProps) => {
  const t = useTranslate();

  const { student, onChange, titleInfo } = props;

  const [open, setOpen] = useState<boolean>(false);
  const [comments, setComments] = useState<string>(student.comments || "");

  const [obsAssessment, setObsAssessment] = useState<string>(
    student.a3Info?.obsAssessment || "",
  );
  const [obsPerformance, setObsPerformance] = useState<string>(
    student.a3Info?.obsPerformance || "",
  );
  const [obsTutor, setObsTutor] = useState<string>(
    student.a3Info?.obsTutor || "",
  );

  useEffect(() => {
    setComments(student.comments || "");
    setObsAssessment(student.a3Info?.obsAssessment || "");
    setObsPerformance(student.a3Info?.obsPerformance || "");
    setObsTutor(student.a3Info?.obsTutor || "");
  }, [open, student, student.a3Info]);

  const save = () => {
    student.a3Info = { ...(student.a3Info || {}) };
    student.a3Info.obsAssessment = obsAssessment;
    student.a3Info.obsPerformance = obsPerformance;
    student.a3Info.obsTutor = obsTutor;
    student.comments = comments;
    onChange(student);
    setOpen(false);
  };

  const someFilled = () => {
    return !!comments || !!obsAssessment || !!obsPerformance || !!obsTutor;
  };

  return (
    <>
      <Button
        variant="outlined"
        title={t("resources.pdf_downloads.fields.students.comments")}
        onClick={() => setOpen(!open)}
      >
        <Comment />
        <Badge
          invisible={!someFilled()}
          color={"warning"}
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
              <Grid item xs={12}>
                <ClearableTextField
                  multiline
                  minRows={2}
                  maxRows={5}
                  fullWidth
                  label={t(
                    "resources.pdf_downloads.fields.students.a3Info.obsPerformance",
                  )}
                  value={obsPerformance}
                  onChange={(e) => setObsPerformance(e.target.value)}
                  onClear={() => setObsPerformance("")}
                />
              </Grid>
              <Grid item xs={12}>
                <ClearableTextField
                  multiline
                  minRows={2}
                  maxRows={5}
                  fullWidth
                  label={t(
                    "resources.pdf_downloads.fields.students.a3Info.obsAssessment",
                  )}
                  value={obsAssessment}
                  onChange={(e) => setObsAssessment(e.target.value)}
                  onClear={() => setObsAssessment("")}
                />
              </Grid>
              <Grid item xs={12}>
                <ClearableTextField
                  multiline
                  minRows={2}
                  maxRows={5}
                  fullWidth
                  label={t(
                    "resources.pdf_downloads.fields.students.a3Info.obsTutor",
                  )}
                  value={obsTutor}
                  onChange={(e) => setObsTutor(e.target.value)}
                  onClear={() => setObsTutor("")}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider variant="middle" />
              </Grid>
              <Grid item xs={12}>
                <ClearableTextField
                  multiline
                  minRows={2}
                  maxRows={5}
                  fullWidth
                  label={t(
                    "resources.pdf_downloads.fields.students.comments_assessment",
                  )}
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  onClear={() => setComments("")}
                />
              </Grid>
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
