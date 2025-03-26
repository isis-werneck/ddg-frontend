import { useCallback, useEffect, useState, type ReactNode } from "react";
import { usePdfFormData } from "../../../hooks/usePdfFormData";
import type { CoursesType, FlowType } from "../flows";
import { commonSteps } from "../flows/commonSteps";
import { PdfWizardContext } from "./PdfWizardContext";

interface PdfWizardProviderProps {
  children: ReactNode;
}

export const PdfWizardProvider = ({ children }: PdfWizardProviderProps) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [isFileDownloaded, setIsFileDownloaded] = useState<boolean>(false);
  const [flows, setFlows] = useState<FlowType[] | null>();
  const [currentFlow, setLocalCurrentFlow] = useState<FlowType | null>({
    steps: commonSteps,
  });
  const [fieldsets, setFieldsets] = useState<number>(1);

  const { formData, resetFormData, ...pdfFormData } = usePdfFormData();

  const [type, setType] = useState<CoursesType | "">(
    formData.fileType
      ? formData.fileType.toString().match(/^fct/)
        ? "sepe"
        : "fp"
      : "",
  );

  const markStepCompleted = (mark = true, stepNumber?: number) => {
    const applyToStep = stepNumber || currentStep;
    if (mark && completedSteps.has(applyToStep)) {
      return;
    }
    if (!mark && !completedSteps.has(applyToStep)) {
      return;
    }

    setCompletedSteps((prev: Set<number>) => {
      const current = new Set(prev);
      if (mark) {
        current.add(applyToStep);
      } else {
        current.delete(applyToStep);
      }
      return current;
    });
  };

  const setCurrentFlow = useCallback((flow?: FlowType | null) => {
    if (!flow) {
      flow = { steps: [] };
    }
    if (flow.steps.length === 0 || flow.steps[0].id !== commonSteps[0].id) {
      flow.steps = [...commonSteps, ...flow.steps];
    }
    setLocalCurrentFlow(flow);
  }, []);

  const isStepCompleted = (stepId: number) => completedSteps.has(stepId);

  const nextStep = () => {
    if (currentStep === 0 || currentStep < (currentFlow?.steps?.length || 0)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isWizardComplete = useCallback(() => {
    return completedSteps.size >= (currentFlow?.steps?.length || 0) - 1;
  }, [completedSteps, currentFlow?.steps.length]);

  const lastCompletedStep = useCallback(() => {
    let last = 0;
    Array.from(completedSteps)
      .sort()
      .forEach((step) => {
        if (step === last + 1) {
          last = step;
        }
      });
    return last;
  }, [completedSteps]);

  const resetWizard = () => {
    setCurrentStep(0);
    setCompletedSteps(new Set());
    setIsFileDownloaded(false);
    setFlows(null);
    setType("");
    resetFormData();
    setCurrentFlow(null);
    setFieldsets(1);
  };

  useEffect(() => {
    const currentFlow = flows?.find(
      (flow: FlowType) => flow.value === formData.fileType,
    );
    setCurrentFlow(currentFlow);
  }, [flows, formData.fileType, setCurrentFlow]);

  return (
    <PdfWizardContext.Provider
      value={{
        currentStep,
        flows: flows || null,
        currentFlow: currentFlow || null,
        setCurrentFlow,
        setFlows,
        completedSteps,
        setCurrentStep,
        markStepCompleted,
        isStepCompleted,
        nextStep,
        previousStep,
        lastCompletedStep,
        isWizardComplete,
        resetWizard,
        isFileDownloaded,
        setIsFileDownloaded,
        type,
        setType,
        formData,
        fieldsets,
        setFieldsets,
        resetFormData,
        ...pdfFormData,
      }}
    >
      {children}
    </PdfWizardContext.Provider>
  );
};
