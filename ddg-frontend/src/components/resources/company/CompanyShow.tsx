import {
  BooleanField,
  DateField,
  EmailField,
  Labeled,
  NumberField,
  Show,
  SimpleShowLayout,
  TextField,
  useTranslate,
} from "react-admin";
import { Divider, Stack, Typography } from "@mui/material";

import { GeneralValues } from "../../../types/enum";
import { GenerateAnexo1Button } from "../../custom/actions/GenerateAnexo1Button";
import { ShowActions } from "../../../layout/actionbar/ShowActions";
import { ShowTitle } from "../ShowTitle";
import { TimestampsFields } from "../TimestampsFields";

export const CompanyShow = () => {
  const t = useTranslate();
  return (
    <Show title={<ShowTitle sources={["name"]} />} actions={<ShowActions />}>
      <SimpleShowLayout>
        <TextField source="name" />
        <TextField source="activity" />
        <NumberField source="numberOfWorkers" />
        <BooleanField source="workersRepresentation" textAlign="center" />
        <TextField source="nif" />
        <Labeled label={t("resources.companies.fields.agreementCode")}>
          <Stack direction="row" spacing={2} alignContent={"center"}>
            <TextField
              source="agreementCode"
              variant="h5"
              emptyText={GeneralValues.emptyValue}
            />
            <GenerateAnexo1Button
              size="small"
              variant="contained"
              color={"secondary"}
            />
          </Stack>
        </Labeled>
        <DateField source="signatureDate" />
        <TextField source="address" />
        <TextField source="city" />
        <TextField source="province" />
        <TextField source="postalCode" />
        <TextField source="country" />
        <TextField source="legalNature" emptyText={GeneralValues.emptyValue} />
        <TextField source="tutorName" emptyText={GeneralValues.emptyValue} />
        <TextField
          source="tutorLastName"
          emptyText={GeneralValues.emptyValue}
        />
        <TextField source="tutorNif" emptyText={GeneralValues.emptyValue} />
        <TextField source="phone" emptyText={GeneralValues.emptyValue} />
        <EmailField source="email" />
        <TimestampsFields />
        {["", "2"].map((suffix) => (
          <SimpleShowLayout key={"company_representative_info" + suffix}>
            <Typography variant="h5">
              {t("resources.companies.representative_info")} {suffix}
            </Typography>
            <Divider />
            <TextField
              source={"representativeName" + suffix}
              emptyText={GeneralValues.emptyValue}
            />
            <TextField
              source={"representativeNif" + suffix}
              emptyText={GeneralValues.emptyValue}
            />
            <EmailField
              source={"representativeMail" + suffix}
              emptyText={GeneralValues.emptyValue}
            />
            <TextField
              source={"representativePhone" + suffix}
              emptyText={GeneralValues.emptyValue}
            />
            <TextField
              source={"representativePosition" + suffix}
              emptyText={GeneralValues.emptyValue}
            />
            <TextField
              source={"representativeNormativeBasis" + suffix}
              emptyText={GeneralValues.emptyValue}
            />
            <TextField
              source={"representativeAppointedBy" + suffix}
              emptyText={GeneralValues.emptyValue}
            />
          </SimpleShowLayout>
        ))}
      </SimpleShowLayout>
    </Show>
  );
};
