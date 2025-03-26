import { PdfFileType } from "../../../../hooks/usePdfFormData";
import { type FlowType } from "../../flows";
import { CompanySelector } from "../../selectors/CompanySelector";
import { CompanyTutorSelector } from "../../selectors/CompanyTutorSelector";
import { CourseSelector } from "../../selectors/CourseSelector";
import { DocumentNumberSelector } from "../../selectors/DocumentNumberSelector";
import { LearningOutcomesSelector } from "../../selectors/LearningOutcomesSelector";
import { RelatedSelector } from "../../selectors/RelatedSelector";
import { SignatorySelector } from "../../selectors/SignatorySelector";
import { StudentsInfoA3Selector } from "../../selectors/StudentsInfoA3Selector";
import { StudentsSelector } from "../../selectors/StudentsSelector";
import { Summary } from "../../summary/Summary";

export const anexo_valoracion: FlowType = {
  value: PdfFileType.FFE_ANEXO_VALORACION_FINAL,
  label: "pages.pdf.document_names.ffe_anexo_valoracion_final",
  img: "/assets/img/pdf/ffe_anexo_beca_intensivo.png",
  steps: [
    {
      component: RelatedSelector,
      title: "pages.pdf.related_select",
      context: {
        related: [
          PdfFileType.FFE_ANEXO3_PLAN,
          PdfFileType.FFE_ANEXO_SEGUIMIENTO,
        ],
      },
    },
    { component: CompanySelector, title: "pages.pdf.company_select" },
    {
      component: CompanyTutorSelector,
      title: "pages.pdf.company_tutor.title",
      context: { show: ["name", "lastName", "email"] },
    },
    {
      component: DocumentNumberSelector,
      title: "pages.pdf.document_number_select",
    },
    { component: CourseSelector, title: "pages.pdf.course_select" },
    {
      component: StudentsSelector,
      title: "pages.pdf.students_select",
    },
    {
      component: StudentsInfoA3Selector,
      title: "pages.pdf.students_info_select",
    },
    {
      component: LearningOutcomesSelector,
      title: "pages.pdf.learning_outcomes.title",
    },
    {
      component: SignatorySelector,
      title: "pages.pdf.signatory.title",
      context: {
        show: ["place", "date", "companyName"],
      },
    },
    { component: Summary, title: "pages.pdf.summary.title" },
  ],
};
