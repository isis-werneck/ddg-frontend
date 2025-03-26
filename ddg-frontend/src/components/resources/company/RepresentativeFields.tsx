import { SelectInput, TextInput, email, required } from "react-admin";

import { Company_jsonld_company_read_timestamps } from "../../../services/openapi";
import { Grid } from "@mui/material";
import { nif } from "../../../validate/nif";
import { phone } from "../../../validate/phone";

export const RepresentativeFields = ({ suffix }: { suffix: string }) => {
  const requiredNotSuffix = suffix ? [] : [required()];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={4}>
        <TextInput
          source={"representativeName" + suffix}
          validate={[...requiredNotSuffix]}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <TextInput
          source={"representativeNif" + suffix}
          validate={[nif, ...requiredNotSuffix]}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <TextInput
          validate={[email()]}
          source={"representativeMail" + suffix}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <TextInput source={"representativePhone" + suffix} validate={phone} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <TextInput
          source={"representativePosition" + suffix}
          validate={[...requiredNotSuffix]}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <SelectInput
          validate={[...requiredNotSuffix]}
          source={"representativeNormativeBasis" + suffix}
          choices={Object.values(
            Company_jsonld_company_read_timestamps.representativeNormativeBasis,
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          source={"representativeAppointedBy" + suffix}
        />
      </Grid>
    </Grid>
  );
};
