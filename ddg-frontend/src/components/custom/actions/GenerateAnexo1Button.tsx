import { Button, IconButton, Stack, Typography } from "@mui/material";
import {
  useRecordContext,
  useRedirect,
  useTranslate,
  type ButtonProps,
} from "react-admin";

import { DocumentScanner } from "@mui/icons-material";
import dayjs from "dayjs";
import type { ElementType } from "react";
import { useGeneralSettings } from "../../../hooks/useGeneralSettings";
import { PdfFileType, usePdfFormData } from "../../../hooks/usePdfFormData";
import type { Company_jsonld_company_read_timestamps } from "../../../services/openapi";

type GenerateAnexo1ButtonProps = ButtonProps & {
  iconButton?: true;
};

export const GenerateAnexo1Button = (props: GenerateAnexo1ButtonProps) => {
  const t = useTranslate();
  const { setFormData, resetFormData, setCompany } = usePdfFormData();
  const { centerLegalRepresentationName, centerCity } = useGeneralSettings();
  const record = useRecordContext<Company_jsonld_company_read_timestamps>();
  const redirect = useRedirect();

  const gotoAnexo1 = (ev: React.MouseEvent) => {
    ev.stopPropagation();
    resetFormData();
    setFormData({
      fileType: PdfFileType.FFE_ANEXO1,
      company: record?.["@id"],
      signatory: {
        date: dayjs().format("YYYY-MM-DD"),
        centerName: centerLegalRepresentationName,
        place: centerCity,
        companyName: record?.representativeName,
      },
    });
    setCompany(record || null);
    redirect("/pdf?type=fp&step=4", "", undefined, undefined, { type: "fp" });
  };

  if (!record) return null;

  const { iconButton, ...rest } = props;
  const GenerateButton: ElementType = iconButton ? IconButton : Button;

  return (
    <GenerateButton
      color="primary"
      title={t("resources.companies.generate_anexo1")}
      {...rest}
      onClick={gotoAnexo1}
    >
      <Stack direction="row" alignItems="flex-start">
        <DocumentScanner />
        <Typography variant="button">
          {props.label ?? t("resources.companies.generate_anexo1")}
        </Typography>
      </Stack>
    </GenerateButton>
  );
};
