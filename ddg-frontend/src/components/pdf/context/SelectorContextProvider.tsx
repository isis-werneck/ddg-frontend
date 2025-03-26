import { useCallback, type ReactNode } from "react";
import {
  SelectorContext,
  type PdfKey,
  type SelectorContextType,
} from "./SelectorContext";

export type SelectorContextProviderProps = Omit<SelectorContextType, "isShown"> & {
  children: ReactNode | ReactNode[];
};

export function SelectorContextProvider({
  hide,
  show,
  required,
  children,
  ...rest

}: SelectorContextProviderProps) {
  const isShown = useCallback(
    (key: PdfKey) => {
      return (!hide || !hide.includes(key)) && (!show || show.includes(key));
    },
    [hide, show],
  );

  return (
    <SelectorContext.Provider
      value={{
        ...rest,
        hide,
        show,
        required: required ?? show,
        isShown,
      }}
    >
      {children}
    </SelectorContext.Provider>
  );
}
