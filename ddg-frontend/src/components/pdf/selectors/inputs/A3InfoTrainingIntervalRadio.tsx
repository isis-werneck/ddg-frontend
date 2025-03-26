import {
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  styled,
  type RadioGroupProps,
} from "@mui/material";
import { useTranslate } from "react-admin";

const StyledLabel = styled(FormLabel)({
  justifyContent: "flex-start",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer"
});

export const A3InfoTrainingIntervalRadio = (props: RadioGroupProps) => {
  const t = useTranslate();
  return (
    <RadioGroup {...props}>
      <Stack direction={"row"} spacing={2}>
        <StyledLabel>
          <Radio value="daily" />
          {t("intervals.daily")}
        </StyledLabel>
        <StyledLabel>
          <Radio value="weekly" />
          {t("intervals.weekly")}
        </StyledLabel>
        <StyledLabel>
          <Radio value="monthly" />
          {t("intervals.monthly")}
        </StyledLabel>
        <StyledLabel>
          <Radio value="other" />
          {t("intervals.other")}
        </StyledLabel>
      </Stack>
    </RadioGroup>
  );
};
