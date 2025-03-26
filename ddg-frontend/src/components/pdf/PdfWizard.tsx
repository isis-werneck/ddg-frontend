import { PdfWizardContainer } from "./PdfWizardContainer";
import { PdfWizardProvider } from "./context/PdfWizardProvider";

export const PdfWizard = () => {
  return (
    <PdfWizardProvider>
      <PdfWizardContainer />
    </PdfWizardProvider>
  );
};
