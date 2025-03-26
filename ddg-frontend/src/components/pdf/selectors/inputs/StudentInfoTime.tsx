import { Stack } from "@mui/material";
import {
  TimePicker,
  type PickerValidDate,
  type TimePickerFieldProps,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { type Identifier } from "react-admin";
import type { Student_jsonld_student_read_timestamps } from "../../../../services/openapi";
import type { OmitPdfStudentInfo, StudentInfos } from "../StudentsInfoSelector";
import { CopyButton } from "./CopyButton";

export type TimeInputProps = Partial<TimePickerFieldProps<PickerValidDate>> & {
  fieldName: "startTime" | "endTime";
  student: Student_jsonld_student_read_timestamps;
  studentInfos: StudentInfos;
  setInfo: (
    key: keyof OmitPdfStudentInfo,
    id: Identifier,
    value: string | number | null,
  ) => void;
  setAllInfo?: (key: keyof OmitPdfStudentInfo, value: string | null) => void;
};

export const StudentInfoTime = (props: TimeInputProps) => {
  const { fieldName, student, studentInfos, setInfo, setAllInfo, ...rest } =
    props;

  const studentInfo = studentInfos.get(student.id || "");

  return (
    <Stack direction={"row"}>
      <TimePicker
        slotProps={{
          field: { clearable: true },
        }}
        {...rest}
        value={dayjs(studentInfo?.[fieldName] || null, "HH:mm") || null}
        onChange={(date: dayjs.Dayjs | null) => {
          setInfo(fieldName, student.id || "", date?.format("HH:mm") || null);
        }}
        defaultValue={null}
      />
      {setAllInfo && studentInfos.size > 1 && (
        <CopyButton
          disabled={!!rest.disabled}
          onClick={() => {
            setAllInfo(fieldName, studentInfo?.[fieldName]?.toString() || null);
          }}
        ></CopyButton>
      )}
    </Stack>
  );
};
