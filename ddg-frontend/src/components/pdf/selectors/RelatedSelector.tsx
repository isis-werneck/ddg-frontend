import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useRef } from "react";

import { PdfFileType } from "../../../hooks/usePdfFormData";
import { flows } from "../flows";
import { usePdfWizardContext } from "../context/PdfWizardContext";
import { useSelectorContext } from "../context/SelectorContext";
import { useTranslate } from "react-admin";

export const RelatedSelector = () => {
  const t = useTranslate();

  const {
    formData,
    setPartial,
    markStepCompleted,
    type,
    currentFlow,
    setCurrentFlow,
  } = usePdfWizardContext();

  const { related } = useSelectorContext();

  const defaultChecked = useRef<Map<PdfFileType, boolean>>(
    new Map(formData.includeRelated?.map((item) => [item, true])),
  );

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.includeRelated = formData.includeRelated || [];
    if (event.target.checked) {
      formData.includeRelated.push(event.target.value);
    } else {
      formData.includeRelated = formData.includeRelated?.filter(
        (item) => item !== event.target.value,
      );
    }
    setPartial({ includeRelated: formData.includeRelated });
    updateFlow();
  };

  const updateFlow = useCallback(() => {
    if (type) {
      const defaultFlow = flows[type]?.find(
        (flow) => flow.value === formData.fileType,
      );
      const currentSteps = [...(defaultFlow?.steps || [])];
      if (currentSteps.length && (formData?.includeRelated?.length || 0) > 0) {
        formData.includeRelated?.forEach((item) => {
          const itemFlow = flows[type]?.find((flow) => flow.value === item);
          itemFlow?.steps?.forEach((step) => {
            if (
              !currentSteps.some(
                (componentstep) =>
                  componentstep.component?.name === step.component?.name,
              )
            ) {
              currentSteps.splice(currentSteps.length - 1, 0, step);
            }
          });
        });
      }
      if (currentFlow?.steps?.length !== currentSteps.length) {
        setCurrentFlow({ ...currentFlow, steps: currentSteps });
      }
    }
  }, [
    currentFlow,
    formData.fileType,
    formData.includeRelated,
    setCurrentFlow,
    type,
  ]);

  useEffect(() => {
    updateFlow();
    markStepCompleted(true);
  }, [markStepCompleted, updateFlow]);

  return (
    <Box>
      <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
        {t("pages.pdf.related_select_info")}
      </Typography>
      <Divider />
      <Stack sx={{ padding: { xs: "10px", md: "10px 20px" } }}>
        <FormControlLabel
          label={t("pages.pdf.document_names." + formData.fileType)}
          control={<Checkbox checked={true} disabled />}
        />
        {related?.map((item) => {
          return (
            <FormControlLabel
              key={"related_" + item}
              label={t("pages.pdf.document_names." + item)}
              control={
                <Checkbox
                  value={item}
                  onChange={onChangeHandler}
                  defaultChecked={defaultChecked.current.get(item)}
                />
              }
            />
          );
        })}
      </Stack>
    </Box>
  );
};
