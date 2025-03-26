import { Close } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  TextField,
  type TextFieldProps,
} from "@mui/material";

export type ClearableTextFieldProps = TextFieldProps & {
  onClear?: () => void;
};

export const ClearableTextField = (props: ClearableTextFieldProps) => {
  const { onClear, ...rest } = props;
  return (
    <TextField
      {...rest}
      InputProps={{
        ...props.InputProps,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              size="small"
              onClick={() => {
                onClear && onClear();
              }}
            >
              <Close />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
