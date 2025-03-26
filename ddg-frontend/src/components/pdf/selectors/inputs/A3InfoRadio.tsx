import {
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  type RadioGroupProps,
} from "@mui/material";
import { useEffect, useState, type ChangeEvent } from "react";
import { Labeled, useTranslate } from "react-admin";

export type A3InfoRadioProps = RadioGroupProps & {
  messageValue?: string | null;
  showMessage?: boolean;
  messageLabel?: string;
  onBlurMessage?: (message: string) => void;
};

export const A3InfoRadio = (props: A3InfoRadioProps) => {
  const t = useTranslate();
  const { messageValue, messageLabel, showMessage, onBlurMessage, ...rest } =
    props;

  const [message, setMessage] = useState(messageValue || "");

  const changeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    setMessage(messageValue || "");
  }, [messageValue]);

  return (
    <>
      <RadioGroup {...rest}>
        <Stack direction={"row"} spacing={2}>
          <FormLabel>
            <Radio value="true" />
            {t("ra.boolean.true")}
          </FormLabel>
          <FormLabel>
            <Radio value="false" />
            {t("ra.boolean.false")}
          </FormLabel>
        </Stack>
      </RadioGroup>
      {showMessage && (
        <Labeled label={messageLabel || ""}>
          <TextField
            variant="filled"
            value={message}
            multiline
            onChange={changeMessage}
            onBlur={() => onBlurMessage && onBlurMessage(message)}
          />
        </Labeled>
      )}
    </>
  );
};
