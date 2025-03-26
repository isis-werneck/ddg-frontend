import {
  Add,
  Cancel,
  Close,
  DeleteOutline,
  ModelTraining,
  Save,
} from "@mui/icons-material";
import {
  Badge,
  Box,
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
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";

import type { PdfTrainingPeriod_pdf_write } from "../../../../services/openapi";
import { TrainingPeriodInputField } from "./TrainingPeriodInputField";
import { useTranslate } from "react-admin";

export type A3TrainingPeriodsProps = {
  trainingPeriods: PdfTrainingPeriod_pdf_write[];
  comments: string;
  specificTrainingComments: string | null | undefined;
  onChange: (
    trainingPeriods: PdfTrainingPeriod_pdf_write[] | null,
    comments: string,
    specificTrainingComments: string | null | undefined,
  ) => void;
  titleInfo?: string;
  maxItems?: number;
};

export const A3TrainingPeriods = (props: A3TrainingPeriodsProps) => {
  const t = useTranslate();

  const {
    trainingPeriods,
    comments,
    onChange,
    titleInfo,
    maxItems = 5,
    specificTrainingComments,
  } = props;

  const [open, setOpen] = useState<boolean>(false);
  const [localTrainingPeriods, setLocalTrainingPeriods] = useState<
    PdfTrainingPeriod_pdf_write[]
  >(trainingPeriods || [{}]);

  const [localComments, setLocalComments] = useState<string>(comments);
  const [localSpecificComments, setLocalSpecificComments] = useState<
    string | null | undefined
  >(comments);

  useEffect(() => {
    if (!open) {
      if (localTrainingPeriods !== trainingPeriods) {
        setLocalTrainingPeriods(trainingPeriods);
      }
      if (comments !== localComments) {
        setLocalComments(comments);
      }
      if (specificTrainingComments !== localSpecificComments) {
        setLocalSpecificComments(specificTrainingComments);
      }
    }
  }, [
    localTrainingPeriods,
    trainingPeriods,
    open,
    comments,
    localComments,
    specificTrainingComments,
    localSpecificComments,
  ]);

  const validate = useCallback(() => {
    return localTrainingPeriods.every((trainingPeriod) => {
      return (
        trainingPeriod.number &&
        trainingPeriod.calendar &&
        trainingPeriod.schedule
      );
    });
  }, [localTrainingPeriods]);

  const set = (
    fieldName: keyof PdfTrainingPeriod_pdf_write,
    index: number,
    value: string,
  ) => {
    setLocalTrainingPeriods((prev) => {
      prev[index] = { ...prev[index], [fieldName]: value };
      return [...prev];
    });
  };

  const save = () => {
    if (validate()) {
      onChange(localTrainingPeriods, localComments, localSpecificComments);
      setOpen(false);
    }
  };

  return (
    <>
      <Button
        variant="outlined"
        title={t("resources.pdf_downloads.fields.students.trainingPeriods.title")}
        onClick={() => setOpen(!open)}
      >
        <ModelTraining />
        <Badge
          badgeContent={trainingPeriods?.length || "0"}
          color={trainingPeriods?.length ? "success" : "primary"}
          sx={{ pl: 7, mt: -3, position: "absolute" }}
        />
        <Badge
          invisible={!comments && !specificTrainingComments}
          color={"warning"}
          variant="dot"
          sx={{ ml: 7, mt: 4, position: "absolute" }}
        />
      </Button>
      {open && (
        <Dialog open={open} fullWidth={true} maxWidth={"lg"}>
          <DialogTitle>
            {t("resources.pdf_downloads.fields.students.trainingPeriods.title")}
            {titleInfo && ` (${titleInfo})`}
            <IconButton
              onClick={() => setOpen(false)}
              title={t("import.close")}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
              }}
            >
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {localTrainingPeriods.map((_, index) => (
              <Grid container spacing={2} key={"tp_" + index}>
                <Grid xs={12} item>
                  <Divider />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TrainingPeriodInputField
                    fieldName="number"
                    index={index}
                    set={set}
                    trainingPeriods={localTrainingPeriods}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TrainingPeriodInputField
                    fieldName="calendar"
                    index={index}
                    set={set}
                    trainingPeriods={localTrainingPeriods}
                  />
                </Grid>
                <Grid item xs={11} md={4}>
                  <TrainingPeriodInputField
                    fieldName="schedule"
                    index={index}
                    set={set}
                    trainingPeriods={localTrainingPeriods}
                  />
                </Grid>
                <Grid item xs={1} md={1} sx={{ margin: "auto" }}>
                  <IconButton
                    size="small"
                    title={t("ra.action.delete")}
                    onClick={() =>
                      setLocalTrainingPeriods(
                        localTrainingPeriods.filter((_, i) => i !== index),
                      )
                    }
                  >
                    <DeleteOutline color="error" />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            {(maxItems || 5) > localTrainingPeriods.length && validate() && (
              <Box mt={2} justifyContent={"center"} sx={{ display: "flex" }}>
                <Button
                  onClick={() =>
                    setLocalTrainingPeriods([...localTrainingPeriods, {number: "", calendar: "", schedule: ""}])
                  }
                  variant="outlined"
                  color="secondary"
                >
                  <Add /> &nbsp;
                  {t("resources.pdf_downloads.fields.students.trainingPeriods.add")}
                </Button>
              </Box>
            )}
            <Box>
              <Typography variant="caption"></Typography>
              <TextField
                label={t("resources.pdf_downloads.fields.students.trainingPeriods.comments")}
                multiline
                value={localComments}
                onChange={(e) => setLocalComments(e.target.value)}
                maxRows={4}
                minRows={2}
              />
            </Box>
            <Box>
              <TextField
                label={t("resources.pdf_downloads.fields.students.a3Info.specificTrainingComments")}
                multiline
                value={localSpecificComments}
                onChange={(e) => setLocalSpecificComments(e.target.value)}
                maxRows={4}
                minRows={2}
              />
            </Box>
          </DialogContent>
          <Divider />
          <DialogActions sx={{ p: 3 }}>
            <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
              <Button onClick={() => setOpen(false)}>
                <Cancel />
                {t("ra.action.cancel")}
              </Button>
              <Button onClick={save} variant="contained" disabled={!validate()}>
                <Save />
                {t("ra.action.save")}
              </Button>
            </Stack>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};
