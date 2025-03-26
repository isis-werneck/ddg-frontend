import { Phone } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { TextInput, type TextInputProps } from "react-admin";
import { phone } from "../../../validate/phone";

export const PhoneInput = (props: TextInputProps) => {
  return (
    <TextInput
      validate={phone}
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Phone color="disabled" />
          </InputAdornment>
        ),
      }}
    ></TextInput>
  );
};
