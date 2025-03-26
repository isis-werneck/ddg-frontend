import { PdfFileType } from "../../../../hooks/usePdfFormData";
import { type FlowType } from "../../flows";
import { CompanySelector } from "../../selectors/CompanySelector";
import { CompanyTutorSelector } from "../../selectors/CompanyTutorSelector";
import { CourseSelector } from "../../selectors/CourseSelector";
import { CustomDataSelector } from "../../selectors/CustomDataSelector";
import { DocumentNumberSelector } from "../../selectors/DocumentNumberSelector";
import { SignatorySelector } from "../../selectors/SignatorySelector";
import { StudentsInfoSelector } from "../../selectors/StudentsInfoSelector";
import { StudentsSelector } from "../../selectors/StudentsSelector";
import { Summary } from "../../summary/Summary";

export const anexo2_1: FlowType = {
  value: PdfFileType.FFE_ANEXO2_1,
  label: "pages.pdf.document_names.ffe_anexo2_1",
  img: "/assets/img/pdf/ffe_anexo2_1.png",
  steps: [
    {
      component: CompanySelector,
      title: "pages.pdf.company_select",
    },
    {
      component: CompanyTutorSelector,
      title: "pages.pdf.company_tutor.title",
    },
    {
      component: DocumentNumberSelector,
      title: "pages.pdf.document_number_select",
    },
    {
      component: CourseSelector,
      title: "pages.pdf.course_select",
    },
    {
      component: StudentsSelector,
      title: "pages.pdf.students_select",
    },
    {
      component: StudentsInfoSelector,
      title: "pages.pdf.students_info_select",
      context: { hide: ["dailyHours", "company", "companyTutor"] },
    },
    {
      component: CustomDataSelector,
      title: "pages.pdf.custom_info.title",
      context: {
        customData: [
          {
            title: "pages.pdf.custom_info.observations",
            name: "comments",
            componentProps: { multiline: true, required: false, minRows: 2 },
            gridOptions: { xs: 12, sm: 12, md: 12 },
          },
        ],
      },
    },
    {
      component: SignatorySelector,
      title: "pages.pdf.signatory.title",
      context: { show: ["companyName", "companyName2", "centerName", "date"] },
    },
    { component: Summary, title: "pages.pdf.summary.title" },
  ],
};
