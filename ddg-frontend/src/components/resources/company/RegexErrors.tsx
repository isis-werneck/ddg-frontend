import { useEffect, useState } from "react";

import { Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

export type RegexErrorsProps = {
  regex: string;
  errorMessage: string;
};

export const RegexErrors = ({ regex, errorMessage }: RegexErrorsProps) => {
  const formContext = useFormContext();
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("");
    const representativeRegex = new RegExp(regex);
    const matchingErrors: Array<unknown> = Object.keys(
      formContext.formState.errors,
    ).reduce((acc: Array<unknown>, key: string) => {
      if (key.match(representativeRegex)) {
        acc.push(formContext.formState.errors[key]);
      }
      return acc;
    }, []);
    if (matchingErrors.length > 0) {
      setMessage(errorMessage);
    }
  }, [errorMessage, regex, formContext]);

  return <>{message && <Typography color="error">{message}</Typography>}</>;
};
