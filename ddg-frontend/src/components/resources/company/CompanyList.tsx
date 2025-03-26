import {
  BooleanField,
  DateField,
  EmailField,
  FunctionField,
  NumberField,
  SearchInput,
  SelectArrayInput,
  TextField,
  useTranslate,
} from "react-admin";

import { Company_jsonld_company_read_timestamps } from "../../../services/openapi";
import { GeneralValues } from "../../../types/enum";
import { GenerateAnexo1Button } from "../../custom/actions/GenerateAnexo1Button";
import { ListActions } from "../../../layout/actionbar/ListActions";
import { ScrollableList } from "../../custom/list/ScrollableList";
import { Stack } from "@mui/material";
import { TextListField } from "../../custom/list/TextListField";

export const CompanyList = () => {
  const t = useTranslate();
  return (
    <ScrollableList
      sort={{ field: "name", order: "DESC" }}
      filters={[
        <SearchInput key="name" source="name" placeholder="Nombre" />,
        <SearchInput
          source="nif"
          key="nif"
          placeholder={t("resources.companies.fields.nif")}
        />,
        <SearchInput
          key="agreementCode"
          source="agreementCode"
          placeholder={t("resources.companies.fields.agreementCode")}
        />,
        <SelectArrayInput
          key="legalNatue"
          source="legalNature"
          choices={Object.values(
            Company_jsonld_company_read_timestamps.legalNature,
          )}
          slot="clear"
        />,
      ]}
      actions={<ListActions />}
    >
      <TextListField source="name" />
      <TextField source="activity" />
      <TextField source="legalNature" />
      <NumberField source="numberOfWorkers" />
      <BooleanField source="workersRepresentation" textAlign="center" />
      <TextListField source="nif" />
      <FunctionField
        source="agreementCode"
        render={(record) => {
          return (
            <Stack
              direction="row"
              spacing={2}
              alignItems={"center"}
              justifyItems={"space-between"}
            >
              {record.agreementCode || GeneralValues.emptyValue}
              <GenerateAnexo1Button
                label=""
                size="small"
                color={"secondary"}
                title={t("resources.companies.generate_anexo1")}
                iconButton={true}
              />
            </Stack>
          );
        }}
      />
      <DateField source="signatureDate" />
      <TextField source="address" />
      <TextField source="city" />
      <TextField source="postalCode" />
      <TextField source="representativeName" />
      <TextField source="representativeNif" />
      <TextField source="tutorName" />
      <TextField source="tutorLastName" />
      <TextField source="tutorNif" />
      <TextField source="phone" />
      <EmailField source="email" />
      <DateField source="createdAt" showTime={true} />
      <DateField source="updatedAt" showTime={true} />
    </ScrollableList>
  );
};
