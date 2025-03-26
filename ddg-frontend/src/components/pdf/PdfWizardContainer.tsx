import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { Loading, Title, useTranslate } from "react-admin";
import { useEffect, useState } from "react";

import { PdfWizardActions } from "./PdfWizardActions";
import { PdfWizardStepper } from "./PdfWizardStepper";
import { SelectorContextProvider } from "./context/SelectorContextProvider";
import { Summary } from "./summary/Summary";
import { flows } from "./flows";
import { usePdfUrlParams } from "../../hooks/usePdfUrlParams";
import { usePdfWizardContext } from "./context/PdfWizardContext";

export const PdfWizardContainer = () => {
  const {
    currentStep,
    currentFlow,
    setType,
    setCurrentStep,
    markStepCompleted,
    setFlows,
  } = usePdfWizardContext();
  const t = useTranslate();
  const { ready, type: urlType, step } = usePdfUrlParams();
  const [initialized, setInitialized] = useState(false);
  const [steps, setSteps] = useState(currentFlow?.steps || []);

  useEffect(() => {
    if (!initialized && urlType) {
      setType(urlType);
      setFlows(flows[urlType] || null);
      if (step) {
        setCurrentStep(step);
        for (let i = 0; i < step; i++) {
          markStepCompleted(true, i);
        }
      }
    }
    setInitialized(ready);
  }, [
    urlType,
    step,
    ready,
    setCurrentStep,
    markStepCompleted,
    setType,
    initialized,
    setFlows,
  ]);

  useEffect(() => {
    setSteps(currentFlow?.steps || []);
  }, [initialized, currentFlow]);

  const renderStepContent = (stepIndex: number) => {
    if (steps.length > stepIndex) {
      const Component = steps[stepIndex].component;
      const context = steps[stepIndex].context || {};
      return (
        <SelectorContextProvider {...context}>
          <Component key={stepIndex} />
        </SelectorContextProvider>
      );
    }
    return <Summary />;
  };

  const CardTitle = () => {
    if (steps[currentStep]?.title) {
      return (
        <>
          <CardHeader
            title={
              <>
                {t(steps[currentStep]?.title ?? "")}
                <Divider />
              </>
            }
            subheader={
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", whiteSpace: "pre-wrap" }}
              >
                {t(steps[currentStep]?.subtitle ?? "")}
              </Typography>
            }
          ></CardHeader>
        </>
      );
    }
    return null;
  };

  if (!initialized) {
    return <Loading />;
  }

  return (
    <Box>
      <Card
        sx={{
          minHeight: {
            xs: "calc(100vh - 115px)",
            md: "calc(100vh - 600px)",
            xl: "415px",
          },
          maxHeight: "calc(100vh - 114px)",
          overflow: "auto",
        }}
      >
        <Title title={": " + t(currentFlow?.label ?? "", { _: "" })}></Title>
        <PdfWizardStepper />
        <CardTitle></CardTitle>
        <CardContent>{renderStepContent(currentStep)}</CardContent>
      </Card>
      <CardActions
        sx={{
          position: "sticky",
          width: "100%",
          p: "0 0 2px",
          mt: "-1px",
        }}
      >
        <PdfWizardActions />
      </CardActions>
    </Box>
  );
};
