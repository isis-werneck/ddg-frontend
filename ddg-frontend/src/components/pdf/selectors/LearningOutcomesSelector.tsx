import { Loading, ReferenceField, useDataProvider } from "react-admin";
import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import type { LearningOutcome_jsonld_learning_outcome_read_timestamps } from "../../../services/openapi";
import { ResourceMultiSelect } from "../../custom/resource_multi_select/ResourceMultiSelect.tsx";
import { TextListField } from "../../custom/list/TextListField.tsx";
import { useMeasure } from "react-use";
import { usePdfWizardContext } from "../context/PdfWizardContext.tsx";

export const LearningOutcomesSelector = () => {
  const {
    markStepCompleted,
    formData,
    setPartial,
    course,
    setLearningOutcomesList,
  } = usePdfWizardContext();

  const [initialized, setInitialized] = useState(false);

  const [selectedItems, setSelectedItems] = useState<
    LearningOutcome_jsonld_learning_outcome_read_timestamps[]
  >([]);

  const dataProvider = useDataProvider();

  const [filterToquery, setFilterToquery] = useState<
    Record<string, string | undefined>
  >({});

  const [filterReady, setFilterReady] = useState<boolean>(false);

  const [ref, { width }] = useMeasure<HTMLDivElement>();

  useEffect(() => {
    if (!initialized) {
      if (formData.learningOutcomes && formData.learningOutcomes.length) {
        dataProvider
          .getMany("learning_outcomes", {
            ids: formData.learningOutcomes.map((lo) => lo.learningOutcome),
          })
          .then((response) => {
            setSelectedItems(response.data);
            setLearningOutcomesList(response.data);
          })
          .finally(() => setInitialized(true));
      } else {
        setInitialized(true);
      }
    }
  }, [initialized, formData.learningOutcomes, dataProvider, setLearningOutcomesList]);

  useEffect(() => {
    if (!filterReady && course) {
      if (filterToquery.course && course["@id"] === filterToquery.course) {
        setFilterReady(true);
        return;
      }

      setFilterToquery({
        course: course["@id"],
      });
    }
    setFilterReady(true);
  }, [filterToquery, course, filterReady]);

  const handleSelectionChange = (
    learningOutcomes: LearningOutcome_jsonld_learning_outcome_read_timestamps[],
  ) => {
    setPartial({
      learningOutcomes: learningOutcomes.map((learningOutcome) => {
        const current = formData?.learningOutcomes?.find(
          (lo) => lo.learningOutcome === learningOutcome["@id"],
        );
        return {
          learningOutcome: learningOutcome["@id"],
          integrallyInCenter: current?.integrallyInCenter,
          integrallyInCompany: current?.integrallyInCompany,
        };
      }),
    });
    setLearningOutcomesList(learningOutcomes);
    setSelectedItems(learningOutcomes);
  };

  useEffect(() => {
    markStepCompleted(!!formData.learningOutcomes?.length);
  }, [formData.learningOutcomes?.length, markStepCompleted]);

  if (!filterReady || !initialized) {
    return <Loading />;
  }

  return (
    <Box ref={ref}>
      <Box sx={{ overflowX: "auto", width: width }}>
        <ResourceMultiSelect<LearningOutcome_jsonld_learning_outcome_read_timestamps>
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore module.name is needed but not in the type
          filterFields={["code", "description", "module.name"]}
          resource="learning_outcomes"
          setSelectedItems={handleSelectionChange}
          selectedItems={selectedItems}
          fields={[
            "description",
            "code",
            {
              source: "module",
              componentProps: {
                reference: "modules",
                link: false,
                children: (
                  <TextListField source="name" searchSource="module.name" />
                ),
              },
              sortBy: "module.name",
              component: ReferenceField,
            },
            {
              source: "course",
              componentProps: {
                reference: "courses",
                link: false,
              },
              sortBy: "course.name",
              component: ReferenceField,
            },
          ]}
          filterToQuery={{ ...filterToquery }}
        />
      </Box>
    </Box>
  );
};
