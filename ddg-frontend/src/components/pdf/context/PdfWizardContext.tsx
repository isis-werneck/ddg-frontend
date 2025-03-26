import type { CoursesType, FlowType } from "../flows";
import { createContext, useContext } from "react";

import type { PdfFormData } from "../../../hooks/usePdfFormData";

export interface PdfWizardContextType extends PdfFormData {
  currentStep: number;
  completedSteps: Set<number>;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  previousStep: () => void;
  lastCompletedStep: () => number;
  markStepCompleted: (mark?: boolean, stepNumber?: number) => void;
  isStepCompleted: (stepId: number) => boolean;
  isWizardComplete: () => boolean;
  resetWizard: () => void;
  isFileDownloaded: boolean;
  setIsFileDownloaded: (value: boolean) => void;
  flows: FlowType[] | null;
  currentFlow: FlowType | null;
  setCurrentFlow: (flow: FlowType | null) => void;
  setFlows: (flows: FlowType[] | null) => void;
  type: CoursesType | "";
  setType: (type: CoursesType | "") => void;
  fieldsets: number;
  setFieldsets: (fieldsets: number) => void;
}

export const PdfWizardContext = createContext<PdfWizardContextType | undefined>(
  undefined,
);

export const usePdfWizardContext = () => {
  const context = useContext(PdfWizardContext);
  if (!context) {
    throw new Error(
      "usePdfWizardContext must be used within a PdfWizardProvider",
    );
  }
  return context;
};
