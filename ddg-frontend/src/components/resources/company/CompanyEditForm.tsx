import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import {
  BooleanInput,
  DateInput,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput,
  email,
  minValue,
  required,
  usePermissions,
  useTranslate,
} from "react-admin";

import { Company_jsonld_company_read_timestamps } from "../../../services/openapi";
import { GenerateAnexo1Button } from "../../custom/actions/GenerateAnexo1Button";
import { PhoneInput } from "../../custom/input_fields/PhoneInput";
import { RegexErrors } from "./RegexErrors";
import { RepresentativeFields } from "./RepresentativeFields";
import { Role } from "../../../types/Role";
import { nif } from "../../../validate/nif";

export type CompanyEditFormProps = {
  showAgreement?: boolean;
  sanitizeEmptyValues?: boolean;
};

export const CompanyEditForm = ({
  showAgreement,
  sanitizeEmptyValues,
}: CompanyEditFormProps) => {
  const t = useTranslate();

  const { permissions } = usePermissions();

  return (
    <SimpleForm sanitizeEmptyValues={sanitizeEmptyValues ?? false}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextInput source="name" validate={[required()]} />
        </Grid>
        <Grid item xs={12}>
          <TextInput source="activity" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput
            source="nif"
            validate={[required(), nif]}
            inputProps={{ maxLength: 9 }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <NumberInput
            source="numberOfWorkers"
            validate={[required(), minValue(0)]}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <BooleanInput source="workersRepresentation" />
        </Grid>
        <Grid item xs={12} lg={8}>
          <TextInput source="address" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="city" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="province" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput
            source="postalCode"
            validate={[required()]}
            inputProps={{ maxLength: 5 }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="country" />
        </Grid>
        <Grid item xs={12} lg={3}>
          <PhoneInput source="phone" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="email" validate={[required(), email()]} />
        </Grid>
        {showAgreement ? (
          <>
            <Grid item xs={11} lg={2}>
              <TextInput
                source="agreementCode"
                disabled={!permissions.hasRole(Role.admin)}
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <DateInput
                source="signatureDate"
                disabled={!permissions.hasRole(Role.admin)}
              />
            </Grid>
            <Grid item xs={1} sx={{ mt: 2 }}>
              <GenerateAnexo1Button
                iconButton={true}
                label=""
                color="secondary"
              />
            </Grid>
          </>
        ) : (
          <Grid item xs={12} lg={5}></Grid>
        )}
        <Grid item xs={12} lg={4}>
          <SelectInput
            source="legalNature"
            choices={Object.values(
              Company_jsonld_company_read_timestamps.legalNature,
            )}
          />
        </Grid>

        {["", "2"].map((suffix) => (
          <Accordion
            key={"company_representative_info_accordion" + suffix}
            sx={{ mb: 2 }}
          >
            <AccordionSummary>
              <Typography variant="h6">
                {t("resources.companies.representative_info")} {suffix}
              </Typography>
              &nbsp;
              <RegexErrors
                regex={"^representative.*[a-zA-Z]" + suffix + "$"}
                errorMessage={
                  "* " +
                  t("resources.companies.representative_error") +
                  " " +
                  suffix
                }
              />
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <RepresentativeFields suffix={suffix} />
            </AccordionDetails>
          </Accordion>
        ))}
        <Accordion>
          <AccordionSummary>
            <Typography variant="h6">
              {t("resources.companies.tutor_info")}
            </Typography>
            &nbsp;
            <RegexErrors
              regex={"^tutor"}
              errorMessage={"* " + t("resources.companies.tutor_error")}
            />
          </AccordionSummary>
          <Divider />
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={4}>
                <TextInput source="tutorName" validate={[required()]} />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextInput source="tutorLastName" validate={[required()]} />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextInput
                  source="tutorNif"
                  inputProps={{ maxLength: 9 }}
                  validate={nif}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextInput source="tutorMail" validate={[email()]} />
              </Grid>
              <Grid item xs={12} lg={4}>
                <PhoneInput source="tutorPhone" />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </SimpleForm>
  );
};
