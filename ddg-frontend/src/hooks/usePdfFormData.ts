import {
  Company_jsonld_company_read_timestamps,
  Course_jsonld_course_read_timestamps,
  Module_jsonld_module_read_timestamps,
  PdfDownload_pdf_write,
  Student_jsonld_student_read_timestamps,
  TrainingAction_jsonld_taction_read_timestamps,
  type LearningOutcome_jsonld_learning_outcome_read_timestamps,
} from "../services/openapi";

import { useCallback } from "react";
import { useStore } from "react-admin";

export import PdfFileType = PdfDownload_pdf_write.fileType;

export type PdfInput = Omit<PdfDownload_pdf_write, "fileType"> & {
  fileType: PdfFileType | null;
  customData?: Record<string, string>;
  evaluationRequirements?: Record<string, string>;
};

export interface PdfFormData {
  formData: PdfInput;
  studentList: Student_jsonld_student_read_timestamps[];
  company?: Company_jsonld_company_read_timestamps | null;
  setCompany: (company: Company_jsonld_company_read_timestamps | null) => void;
  course?: Course_jsonld_course_read_timestamps | null;
  setCourse: (course: Course_jsonld_course_read_timestamps | null) => void;
  module?: Module_jsonld_module_read_timestamps | null;
  setModule: (module: Module_jsonld_module_read_timestamps | null) => void;
  trainingAction: TrainingAction_jsonld_taction_read_timestamps | null;
  setTrainingAction: (
    trainingAction: TrainingAction_jsonld_taction_read_timestamps | null,
  ) => void;
  setFormData: (data: PdfInput) => void;
  resetFormData: () => void;
  setPartial: (data: Partial<PdfInput>) => void;
  setStudentList: (data: Student_jsonld_student_read_timestamps[]) => void;
  learningOutcomesList: Array<LearningOutcome_jsonld_learning_outcome_read_timestamps> | null;
  setLearningOutcomesList: (
    data: Array<LearningOutcome_jsonld_learning_outcome_read_timestamps> | null,
  ) => void;
}

export const usePdfFormData = (): PdfFormData => {
  const [formData, setFormData] = useStore<PdfInput>("pdfOptions", {
    fileType: null,
  });

  const [studentList, setStudentList] = useStore<
    Student_jsonld_student_read_timestamps[]
  >("pdfOptions.studentList", []);

  const [company, setCompany] =
    useStore<Company_jsonld_company_read_timestamps | null>(
      "pdfOptions.company",
      null,
    );

  const [course, setCourse] =
    useStore<Course_jsonld_course_read_timestamps | null>(
      "pdfOptions.course",
      null,
    );

  const [module, setModule] =
    useStore<Module_jsonld_module_read_timestamps | null>(
      "pdfOptions.module",
      null,
    );

  const [trainingAction, setTrainingAction] =
    useStore<TrainingAction_jsonld_taction_read_timestamps | null>(
      "pdfOptions.training_action",
      null,
    );

  const [learningOutcomesList, setLearningOutcomesList] = useStore<
    LearningOutcome_jsonld_learning_outcome_read_timestamps[] | null
  >("pdfOptions.learning_outcomes", null);

  const cleanStores = useCallback(() => {
    localStorage.removeItem(`RaStore.companies_multi_select.list`);
    localStorage.removeItem(`RaStore.companies_multi.selectedIds`);
    localStorage.removeItem(`RaStore.courses_multi_select.list`);
    localStorage.removeItem(`RaStore.courses_multi.selectedIds`);
    localStorage.removeItem(`RaStore.modules_multi.selectedIds`);
    localStorage.removeItem(`RaStore.modules_multi.list`);
    localStorage.removeItem(`RaStore.training_actions_multi.selectedIds`);
    localStorage.removeItem(`RaStore.training_actions_multi_select.list`);
    localStorage.removeItem(`RaStore.students_multi.selectedIds`);
    localStorage.removeItem(`RaStore.students_multi_select.list`);
    localStorage.removeItem(`RaStore.learning_outcomes_multi.selectedIds`);
    localStorage.removeItem(`RaStore.learning_outcomes_multi_select.list`);
    localStorage.removeItem(`RaStore.pdf_downloads_multi.selectedIds`);
  }, []);

  const resetFormData = useCallback(() => {
    setFormData({ fileType: null });
    setStudentList([]);
    setCompany(null);
    setCourse(null);
    setModule(null);
    setTrainingAction(null);
    setLearningOutcomesList(null);
    cleanStores();
  }, [
    setFormData,
    setStudentList,
    setCompany,
    setCourse,
    setModule,
    setTrainingAction,
    cleanStores,
    setLearningOutcomesList,
  ]);

  const setPartial = useCallback(
    (data: Partial<PdfInput>) => {
      setFormData((prevData) => ({
        ...prevData,
        ...data,
      }));
    },
    [setFormData],
  );

  return {
    formData,
    setFormData,
    resetFormData,
    setPartial,
    studentList,
    setStudentList,
    company,
    setCompany,
    course,
    setCourse,
    module,
    setModule,
    trainingAction,
    setTrainingAction,
    learningOutcomesList,
    setLearningOutcomesList,
  };
};
