import { type TextFieldProps, Stack, TextField } from "@mui/material";
import type { Identifier } from "react-admin";
import type { Student_jsonld_student_read_timestamps } from "../../../../services/openapi";
import type { OmitPdfStudentInfo, StudentInfos } from "../StudentsInfoSelector";
import { CopyButton } from "./CopyButton";

export type TextInfoProps = Partial<TextFieldProps> & {
  fieldName: keyof OmitPdfStudentInfo;
  student: Student_jsonld_student_read_timestamps;
  studentInfos: StudentInfos;
  setInfo: (
    key: keyof OmitPdfStudentInfo,
    id: Identifier,
    value: string | number | null,
  ) => void;
  setAllInfo?: (key: keyof OmitPdfStudentInfo, value: string | null) => void;
};

export const StudentInfoText = (props: TextInfoProps) => {
  const { fieldName, student, studentInfos, setInfo, setAllInfo, ...rest } =
    props;
  const currentValue =
    studentInfos.get(student.id || "")?.[fieldName]?.toString() || "";
  return (
    <Stack direction={"row"}>
      <TextField
        onWheel={(e) => e.currentTarget.blur()}
        size="small"
        {...rest}
        value={currentValue}
        onChange={(ev) => {
          if (student.id) {
            const value = ev.target.value || null;
            setInfo(fieldName, student.id, value);
          }
        }}
      />
      {setAllInfo && studentInfos.size > 1 && (
        <CopyButton
          disabled={!!rest.disabled}
          onClick={() => {
            setAllInfo(fieldName, currentValue);
          }}
        ></CopyButton>
      )}
    </Stack>
  );
};
