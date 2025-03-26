import { PdfFileType } from "../../../../hooks/usePdfFormData";
import { type FlowType } from "../../flows";
import { CourseSelector } from "../../selectors/CourseSelector";
import { PdfHistorySelector } from "../../selectors/PdfHistorySelector";
import { SignatorySelector } from "../../selectors/SignatorySelector";
import { StudentsInfoSelector } from "../../selectors/StudentsInfoSelector";
import { StudentsSelector } from "../../selectors/StudentsSelector";
import { Summary } from "../../summary/Summary";

export const anexo2_2: FlowType = {
  value: PdfFileType.FFE_ANEXO2_2,
  label: "pages.pdf.document_names.ffe_anexo2_2",
  img: "/assets/img/pdf/ffe_anexo2_1.png",
  steps: [
    {
      component: CourseSelector,
      title: "pages.pdf.course_select",
    },
    {
      component: PdfHistorySelector,
      title: "pages.pdf.pdf_history_select",
      subtitle: "pages.pdf.pdf_history_select_subtitle",
      context: {
        filterByCourse: true,
        filterByType: PdfFileType.FFE_ANEXO2_1,
      },
    },
    {
      component: StudentsSelector,
      title: "pages.pdf.students_select",
    },
    {
      component: StudentsInfoSelector,
      title: "pages.pdf.students_info_select",
      context: {
        show: [
          "company",
          "companyTutor",
          "periodFrom",
          "periodTo",
          "hoursAndDays",
          "totalHours",
        ],
      },
    },
    {
      component: SignatorySelector,
      title: "pages.pdf.signatory.title",
      context: {
        show: ["place", "date"],
      },
    },
    { component: Summary, title: "pages.pdf.summary.title" },
  ],
};
