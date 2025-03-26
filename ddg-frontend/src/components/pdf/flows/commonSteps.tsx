import { PdfFileTypeSelector } from "../selectors/PdfFileTypeSelector";
import type { Step } from "../flows";
import { TypeSelector } from "../selectors/TypeSelector";

export const commonSteps: Step[] = [
  {
    component: TypeSelector,
    title: "pages.pdf.select_type",
    id: "_type_selector",
  },
  {
    component: PdfFileTypeSelector,
    title: "pages.pdf.file_type_select",
    id: "_file_type_selector",
  },
];
