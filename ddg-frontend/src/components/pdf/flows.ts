import {
  anexo1,
  anexo2_1,
  anexo2_2,
  anexo3_beca,
  anexo3_plan,
  anexo_seguimiento,
  anexo_valoracion,
  ffe_evaluacion_prl_anexo1,
  ffe_evaluacion_prl_anexo2,
} from "./flows/fp";
import { cp1, cp3, cp8, fct_anexo1, fct_anexo2 } from "./flows/sepe";

import type { ComponentType } from "react";
import type { PdfFileType } from "../../hooks/usePdfFormData.ts";
import type { SelectorContextType } from "./context/SelectorContext.tsx";

export type Step = {
  component: ComponentType;
  context?: Omit<SelectorContextType, "isShown">;
  title?: string;
  subtitle?: string;
  id?: string;
  isDuplicated?: boolean;
};

export type FlowType = {
  value?: PdfFileType;
  label?: string;
  img?: string;
  steps: Step[];
};

export type CoursesType = "fp" | "sepe";

export type FlowsType = {
  [key in CoursesType]: FlowType[];
};

export const flows: FlowsType = {
  sepe: [fct_anexo1, fct_anexo2, cp1, cp3, cp8],
  fp: [
    anexo1,
    anexo2_1,
    anexo2_2,
    anexo3_plan,
    anexo_seguimiento,
    anexo_valoracion,
    anexo3_beca,
    ffe_evaluacion_prl_anexo1,
    ffe_evaluacion_prl_anexo2,
  ],
};
