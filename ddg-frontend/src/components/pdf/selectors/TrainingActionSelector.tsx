import { Loading, ReferenceArrayField, ReferenceField, TextField, useDataProvider } from "react-admin";
import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import type { PdfInput } from "../../../hooks/usePdfFormData";
import { ResourceMultiSelect } from "../../custom/resource_multi_select/ResourceMultiSelect";
import type { TrainingAction_jsonld_taction_read_timestamps } from "../../../services/openapi";
import { usePdfWizardContext } from "../context/PdfWizardContext";

export const TrainingActionSelector = () => {
  const { markStepCompleted, formData, setPartial, setTrainingAction } =
    usePdfWizardContext();

  const dataProvider = useDataProvider();

  const [initialized, setInitialized] = useState(false);

  const [selectedItems, setSelectedItems] = useState<
    TrainingAction_jsonld_taction_read_timestamps[]
  >(() => {
    if (formData.trainingAction) {
      dataProvider
        .getMany("training_actions", {
          ids: [formData.trainingAction],
        })
        .then((response) => setSelectedItems(response.data))
        .finally(() => setInitialized(true));
    } else {
      setInitialized(true);
    }
    return [];
  });

  const handleSelectionChange = (
    trainingActions: TrainingAction_jsonld_taction_read_timestamps[],
  ) => {
    const partial: Partial<PdfInput> = {
      trainingAction: trainingActions[0] ? trainingActions[0]["@id"] : null,
      customData: {
        ...formData.customData,
        jobTitle: trainingActions[0]?.jobTitle || "",
      },
    };
    setPartial(partial);
    setSelectedItems(trainingActions);
    setTrainingAction(trainingActions[0] || null);
  };

  useEffect(() => {
    markStepCompleted(!!formData.trainingAction);
  }, [formData.trainingAction, markStepCompleted]);

  if (!initialized) {
    return <Loading />;
  }

  return (
    <Box>
      <ResourceMultiSelect<TrainingAction_jsonld_taction_read_timestamps>
        filterFields={["trainingActionCode", "trainingSpecialityName"]}
        resource="training_actions"
        selectOne={true}
        setSelectedItems={handleSelectionChange}
        selectedItems={selectedItems}
        fields={[
          "trainingActionCode",
          {
            source: "course",
            componentProps: {
              reference: "courses",
              link: false,
            },
            sortBy: "course.name",
            component: ReferenceField,
          },
          {
            source: "modules",
            componentProps: {
              reference: "modules",
              link: false,
            },
            component: ReferenceArrayField,
          },
          {
            source: "learningOutcome",
            componentProps: {
              reference: "learning_outcomes",
              link: false,
              children: <TextField source="code" />
            },
            sortBy: "learningOutcome.code",
            component: ReferenceField,
          },
          "trainingSpecialityCode",
          "trainingSpecialityName",
        ]}
      />
    </Box>
  );
};
