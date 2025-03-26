import { PdfFileType } from "../../../../hooks/usePdfFormData";
import { type FlowType } from "../../flows";
import { CompanySelector } from "../../selectors/CompanySelector";
import { SignatorySelector } from "../../selectors/SignatorySelector";
import { Summary } from "../../summary/Summary";

export const anexo1: FlowType = {
  value: PdfFileType.FFE_ANEXO1,
  label: "pages.pdf.document_names.ffe_anexo1",
  img: "/assets/img/pdf/ffe_anexo1.png",
  steps: [
    { component: CompanySelector, title: "pages.pdf.company_select" },
    { component: SignatorySelector, title: "pages.pdf.signatory.title" },
    { component: Summary, title: "pages.pdf.summary.title" },
  ],
};
