import { Box, Typography } from "@mui/material";

import { CompanySelector } from "../selectors/CompanySelector";
import { CourseSelector } from "../selectors/CourseSelector";
import { CustomDataInfo } from "./CustomDataInfo";
import { CustomDataSelector } from "../selectors/CustomDataSelector";
import { LearningOutcomesInfoSelector } from "../selectors/LearningOutcomesInfoSelector";
import { LearningOutcomesSelector } from "../selectors/LearningOutcomesSelector";
import { LearningOutomes } from "./LearningOutomes";
import { LearningOutomesInfo } from "./LearningOutomesInfo";
import { ModuleSelector } from "../selectors/ModuleSelector";
import { PdfFileType } from "../../../hooks/usePdfFormData";
import { SelectorContextProvider } from "../context/SelectorContextProvider";
import { SignatoryInfo } from "./SignatoryInfo";
import { SignatorySelector } from "../selectors/SignatorySelector";
import type { Step } from "../flows";
import { StudentsInfo } from "./StudentsInfo";
import { StudentsInfoA3Selector } from "../selectors/StudentsInfoA3Selector";
import { StudentsInfoSelector } from "../selectors/StudentsInfoSelector";
import { StudentsSelector } from "../selectors/StudentsSelector";
import { TrainingActionSelector } from "../selectors/TrainingActionSelector";
import { usePdfWizardContext } from "../context/PdfWizardContext";
import { useTranslate } from "react-admin";

export const SummaryItem = ({ step }: { step: Step }) => {
  const { formData, currentFlow, company, course, module, trainingAction } =
    usePdfWizardContext();
  const t = useTranslate();

  switch (step.component.name) {
    case CompanySelector.name: {
      return (
        <Box>
          {company && (
            <>
              <Typography variant="caption">
                {t("pages.pdf.summary.company")}:
              </Typography>
              <Typography variant="body1">
                {company.name} - {company.nif}
              </Typography>
            </>
          )}
        </Box>
      );
    }
    case ModuleSelector.name: {
      return (
        module && (
          <Box>
            <Typography variant="caption">
              {t("pages.pdf.summary.module")}:
            </Typography>
            <Typography variant="body1">
              {module.code}
              {" - "}
              {module.name}
            </Typography>
          </Box>
        )
      );
    }
    case SignatorySelector.name: {
      return (
        formData.signatory && (
          <Box>
            <SelectorContextProvider {...step.context}>
              <SignatoryInfo />
            </SelectorContextProvider>
          </Box>
        )
      );
    }
    case TrainingActionSelector.name: {
      return (
        <Box>
          {trainingAction && (
            <>
              <Typography variant="caption">
                {t("pages.pdf.summary.training_action")}:
              </Typography>
              <Typography variant="body1">
                {trainingAction.trainingActionCode} /{" "}
                {trainingAction.trainingSpecialityCode} -{" "}
                {trainingAction.trainingSpecialityName}
              </Typography>
            </>
          )}
        </Box>
      );
    }
    case StudentsSelector.name: {
      return (
        formData.students?.length &&
        (formData.fileType === PdfFileType.FFE_EVALUACION_PRL_ANEXO1 ||
          formData.fileType === PdfFileType.FFE_EVALUACION_PRL_ANEXO2) && (
          <Box>
            <StudentsInfo />
          </Box>
        )
      );
    }
    case StudentsInfoSelector.name:
    case StudentsInfoA3Selector.name: {
      return (
        (formData.students?.length || 0) > 0 && (
          <Box>
            {" "}
            <StudentsInfo />
          </Box>
        )
      );
    }
    case CourseSelector.name: {
      return (
        <Box>
          {course && (
            <>
              <Typography variant="caption">
                {t("pages.pdf.summary.course")}:
              </Typography>
              <Typography variant="body1">{course.name}</Typography>
            </>
          )}
        </Box>
      );
    }
    case CustomDataSelector.name: {
      return formData.customData && <CustomDataInfo title={t(step.title || "", {_: ""})} />;
    }
    case LearningOutcomesInfoSelector.name: {
      return <LearningOutomesInfo />;
    }
    case LearningOutcomesSelector.name: {
      const hasInfos = currentFlow?.steps.some(
        (step) => step.component.name === LearningOutcomesInfoSelector.name,
      );
      if (hasInfos) {
        return null;
      }
      return <LearningOutomes />;
    }
  }
};
