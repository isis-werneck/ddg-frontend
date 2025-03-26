import type { ReactNode } from "react";
import { useSelectorContext, type PdfKey } from "../../context/SelectorContext";

export type ShowProps = {
  when: PdfKey;
  children: ReactNode | ReactNode[];
};

export function Show({ when, children }: ShowProps) {
  const { isShown } = useSelectorContext();

  return isShown(when) && children;
}
