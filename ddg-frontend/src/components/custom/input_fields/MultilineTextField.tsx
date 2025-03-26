import { FunctionField } from "react-admin";
import { Typography } from "@mui/material";

export type MultilineTextFieldProps = {
  source: string;
};

export const MultilineTextField = ({ source }: MultilineTextFieldProps) => (
  <FunctionField
    source={source}
    render={(record) =>
      record.jobFunctions
        ?.split(/\n/g)
        .map((line: string) => <Typography key={line}>{line}</Typography>)
    }
  />
);
