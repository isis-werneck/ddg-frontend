import { CreateButton, TopToolbar } from "react-admin";
import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import type { Company_jsonld_company_read_timestamps } from "../../../services/openapi";
import type { PdfInput } from "../../../hooks/usePdfFormData";
import { ResourceMultiSelect } from "../../custom/resource_multi_select/ResourceMultiSelect";
import { useMultiSelection } from "../../../hooks/useMultiSelection";
import { usePdfWizardContext } from "../context/PdfWizardContext";

export const CompanySelector = () => {
  const [selectedItems, setSelectedItems] = useState<
    Company_jsonld_company_read_timestamps[]
  >([]);

  const { markStepCompleted, formData, setPartial, setCompany } =
    usePdfWizardContext();
  const [, { select }] = useMultiSelection({ resource: "companies" });

  const handleSelectionChange = (
    companies: Company_jsonld_company_read_timestamps[],
  ) => {
    const firstCompany = companies[0];
    const partial: Partial<PdfInput> = {
      company: firstCompany?.["@id"] ?? null,
    };
    if (firstCompany && formData.company !== firstCompany["@id"]) {
      partial.signatory = {
        companyName: firstCompany.representativeName || null,
        companyName2: firstCompany.representativeName2 || null,
      };

      partial.companyTutor = {
        name: firstCompany.tutorName || "",
        lastName: firstCompany.tutorLastName || "",
        email: firstCompany.tutorMail || null,
        nif: firstCompany.tutorNif || null,
        phone: firstCompany.tutorPhone || null,
        address: firstCompany.address || null,
        city: firstCompany.city || null,
        postalCode: firstCompany.postalCode || null,
      };
    }

    setPartial(partial);
    setSelectedItems(companies);
    setCompany(companies[0] || null);
  };

  useEffect(() => {
    if (formData.company && !selectedItems.length) {
      select([formData.company]);
    }
    markStepCompleted(!!formData.company);
  }, [formData.company, markStepCompleted, select, selectedItems.length]);

  return (
    <Box>
      <ResourceMultiSelect<Company_jsonld_company_read_timestamps>
        filterFields={["name", "nif"]}
        resource="companies"
        selectOne={true}
        setSelectedItems={handleSelectionChange}
        selectedItems={selectedItems}
        fields={["name", "nif", "address", "agreementCode"]}
        listProps={{
          actions: (
            <TopToolbar>
              <CreateButton variant="outlined" />
            </TopToolbar>
          ),
        }}
      />
    </Box>
  );
};
