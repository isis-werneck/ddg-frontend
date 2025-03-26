import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";
import { SkipNext, SkipPrevious } from "@mui/icons-material";
import { useEffect, useRef } from "react";

import { usePdfWizardContext } from "./context/PdfWizardContext";
import { useTranslate } from "react-admin";

export const PdfWizardActions = () => {
  const t = useTranslate();
  const {
    currentStep,
    isStepCompleted,
    nextStep,
    previousStep,
    formData,
    resetWizard,
    lastCompletedStep,
    setCurrentStep,
    isWizardComplete,
    currentFlow,
  } = usePdfWizardContext();

  const handleReset = () => {
    resetWizard();
  };

  const nextRef = useRef<HTMLButtonElement>(null);
  const previousRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const activeElement = document.activeElement as HTMLElement;
      const isTyping =
        (activeElement.tagName === "INPUT" &&
          activeElement.getAttribute("type") !== "radio") ||
        activeElement.tagName === "TEXTAREA";
      if (isTyping) return;
      if (event.key === "Enter" && isStepCompleted(currentStep)) {
        nextRef.current?.focus();
        nextRef.current?.click();
        nextRef.current?.blur();
      } else if (event.key === "Backspace" && previousRef.current) {
        previousRef.current.focus();
        previousRef.current.click();
        previousRef.current.blur();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentStep, isStepCompleted, nextStep]);

  const steps = currentFlow?.steps || [];

  return (
    <AppBar position="static" color="default">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Button
          color="secondary"
          disabled={currentStep === 0}
          sx={{ opacity: currentStep === 0 ? 0 : 1 }}
          onClick={previousStep}
          ref={previousRef}
        >
          {t("pages.pdf.back")}
        </Button>
        <Stack direction={"row"} gap={2}>
          {steps.length > 0 && (
            <>
              <IconButton
                onClick={() => setCurrentStep(0)}
                title={t("ra.navigation.goto_first")}
                disabled={currentStep === 0}
              >
                <SkipPrevious />
              </IconButton>
              <IconButton
                onClick={() =>
                  setCurrentStep(
                    isWizardComplete() ? steps.length - 1 : lastCompletedStep(),
                  )
                }
                disabled={
                  lastCompletedStep() === 0 ||
                  lastCompletedStep() <= currentStep ||
                  currentStep > steps.length
                }
                title={t("ra.navigation.goto_last")}
              >
                <SkipNext />
              </IconButton>
            </>
          )}
        </Stack>
        <Stack direction={"row"} gap={2}>
          <Button
            onClick={handleReset}
            variant={steps.length > currentStep ? "text" : "outlined"}
          >
            {t("pages.pdf.reset")}
          </Button>

          {(!formData.fileType || steps.length > currentStep) && (
            <Button
              variant="contained"
              onClick={nextStep}
              disabled={
                !isStepCompleted(currentStep) ||
                steps.length === currentStep + 1
              }
              ref={nextRef}
            >
              {t("pages.pdf.next")}
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
