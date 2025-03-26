import { Button, useTranslate } from "react-admin";
import {
  Collapse,
  Divider,
  Step,
  StepIcon,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

import { ArrowDropDown } from "@mui/icons-material";
import type { Step as StepType } from "./flows";
import { usePdfWizardContext } from "./context/PdfWizardContext";
import { useState } from "react";

export const PdfWizardStepper = () => {
  const t = useTranslate();
  const { currentFlow, currentStep, isStepCompleted, setCurrentStep } =
    usePdfWizardContext();

  const [show, setShow] = useState(false);

  const allPreviousCompleted = (stepIndex: number) => {
    return currentFlow?.steps
      .slice(0, stepIndex)
      .every((_, idx) => isStepCompleted(idx));
  };

  if (!currentFlow || currentFlow.steps.length < 2 || currentStep < 2) {
    return null;
  }

  return (
    <>
      <Button
        sx={{
          width: "100%",
          height: "10px",
          marginTop: "-15px",
          borderRadius: 0,
        }}
        onClick={() => setShow(!show)}
        color="secondary"
        title={t("pages.pdf.show_stepper")}
      >
        <ArrowDropDown
          sx={{
            transform: show ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 300ms linear",
          }}
        />
      </Button>
      <Collapse in={show}>
        <Stepper alternativeLabel variant="outlined" sx={{ margin: 2 }}>
          {currentFlow.steps.slice(2).map((step: StepType, idx: number) => {
            const stepIndex = idx + 2;
            const allowClick = allPreviousCompleted(stepIndex);
            const isActive = currentStep === stepIndex;
            return (
              <Step
                key={step.component.name + idx}
                completed={isStepCompleted(stepIndex)}
                active={isActive}
                onClick={() => {
                  allowClick && setCurrentStep(stepIndex);
                }}
              >
                <StepLabel
                  StepIconComponent={StepIcon}
                  StepIconProps={{
                    sx: {
                      cursor: allowClick ? "pointer" : "default",
                      color:
                        allowClick || isActive ? "" : "lightgrey !important",
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      cursor: allowClick ? "pointer" : "",
                    }}
                  >
                    {t(step.title || "", { _: "" })}
                  </Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Divider variant="middle" />
      </Collapse>
    </>
  );
};
