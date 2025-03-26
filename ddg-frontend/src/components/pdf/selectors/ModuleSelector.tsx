import { Loading, ReferenceField } from "react-admin";
import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import type { Module_jsonld_module_read_timestamps } from "../../../services/openapi";
import type { PdfInput } from "../../../hooks/usePdfFormData";
import { ResourceMultiSelect } from "../../custom/resource_multi_select/ResourceMultiSelect";
import { usePdfWizardContext } from "../context/PdfWizardContext";
import { useUserCourses } from "../../../hooks/useUserCourses";

export const ModuleSelector = () => {
  const [selectedItems, setSelectedItems] = useState<
    Module_jsonld_module_read_timestamps[]
  >([]);

  const { markStepCompleted, formData, setPartial, setModule } =
    usePdfWizardContext();

  const { ready: userReady, userTeacher } = useUserCourses();

  const filterToQuery = {
    course: formData.course || userTeacher?.courses || "",
    id: userTeacher?.modules?.map((m: string) => m) || [],
  };

  const handleSelectionChange = (
    modules: Module_jsonld_module_read_timestamps[],
  ) => {
    const partial: Partial<PdfInput> = {
      module: modules[0] ? modules[0]["@id"] : null,
    };
    setPartial(partial);
    setSelectedItems(modules);
    setModule(modules[0] || null);
  };

  useEffect(() => {
    markStepCompleted(!!formData.module);
  }, [formData.module, markStepCompleted]);

  if (!userReady) {
    return <Loading loadingSecondary="" />;
  }

  return (
    <Box>
      <ResourceMultiSelect<Module_jsonld_module_read_timestamps>
        filterFields={["code", "name"]}
        resource="modules"
        selectOne={true}
        setSelectedItems={handleSelectionChange}
        selectedItems={selectedItems}
        fields={[
          "code",
          "name",
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
        filterToQuery={filterToQuery}
      />
    </Box>
  );
};
