import { useEffect, useState } from "react";

import type { CoursesType } from "../components/pdf/flows";
import { useDataProvider } from "react-admin";
import { useLocation } from "react-router-dom";
import { usePdfWizardContext } from "../components/pdf/context/PdfWizardContext";

export const usePdfUrlParams = () => {
  const [ready, setReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState<CoursesType | "">("");
  const [step, setStep] = useState<number | null>(null);

  const { setFormData, resetFormData } = usePdfWizardContext();

  const dataProvider = useDataProvider();

  const location = useLocation();

  useEffect(() => {
    if (!ready) {
      const urlParams = new URLSearchParams(location.search);
      const id = urlParams.get("id");
      const type = urlParams.get("type") || "";
      const step = urlParams.get("step");
      if (id && !isLoading) {
        setIsLoading(true);
        dataProvider
          .getOne("pdf_downloads", { id: id })
          .then((response) => {
            delete response.data.id;
            delete response.data["@id"];
            resetFormData();
            setFormData(response.data);
            goTo(type, step);
          })
          .finally(() => setReady(true));
      } else {
        goTo(type, step);
      }
    }
  }, [
    ready,
    isLoading,
    dataProvider,
    location.search,
    setFormData,
    resetFormData,
  ]);

  const goTo = (type: string, step: string | null) => {
    if (type) {
      setType(type as CoursesType);
      setStep(Number(step));
    }
    setReady(true);
  };

  return { ready, type, step };
};
