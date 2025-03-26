import type { PdfCompanyTutor_pdf_write, PdfSignatory_pdf_write, PdfStudent_pdf_write } from "../../../services/openapi";
import { createContext, useContext } from "react";

import type { CustomDataSelectorProp } from "../selectors/CustomDataSelector";
import type { PdfFileType } from "../../../hooks/usePdfFormData";

export type PdfKey =
  | keyof PdfCompanyTutor_pdf_write
  | keyof PdfSignatory_pdf_write
  | keyof PdfStudent_pdf_write


export type SelectorContextType = {
  isShown: (key: PdfKey) => boolean;
  hide?: Array<PdfKey>;
  show?: Array<PdfKey>;
  customData?: CustomDataSelectorProp[];
  related?: PdfFileType[];
  filterByCourse?: boolean;
  filterByType?: PdfFileType | PdfFileType[];
  required?: PdfKey[];
  selectOne?: boolean;
};

export const SelectorContext = createContext<SelectorContextType | undefined>(
  undefined,
);

export function useSelectorContext() {
  const context = useContext(SelectorContext);
  if (!context) {
    throw new Error(
      "SelectorContext must be used within a SelectorContextProvider",
    );
  }
  return context;
}
