import { Stack } from "@mui/material";
import {
  DatePicker,
  type DatePickerFieldProps,
  type PickerValidDate,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { type Identifier } from "react-admin";
import type { Student_jsonld_student_read_timestamps } from "../../../../services/openapi";
import type { OmitPdfStudentInfo, StudentInfos } from "../StudentsInfoSelector";
import { CopyButton } from "./CopyButton";

export type DateInputProps = Partial<DatePickerFieldProps<PickerValidDate>> & {
  fieldName: "periodFrom" | "periodTo";
  student: Student_jsonld_student_read_timestamps;
  studentInfos: StudentInfos;
  setInfo: (
    key: keyof OmitPdfStudentInfo,
    id: Identifier,
    value: string | number | null,
  ) => void;
  setAllInfo?: (key: keyof OmitPdfStudentInfo, value: string | null) => void;
};

export const StudentInfoDate = (props: DateInputProps) => {
  const { fieldName, student, studentInfos, setInfo, setAllInfo, ...rest } =
    props;
  const curDate = studentInfos.get(student.id || "")?.[fieldName] || null;

  return (
    <Stack direction={"row"}>
      <DatePicker
        slotProps={{
          field: { clearable: true },
        }}
        {...rest}
        value={dayjs(curDate, "YYYY-MM-DD")}
        onChange={(date: dayjs.Dayjs | null) => {
          if (student.id) {
            const dateString = date?.isValid()
              ? date.format("YYYY-MM-DD")
              : null;
            setInfo(fieldName, student.id, dateString);
          }
        }}
      />
      {setAllInfo && studentInfos.size > 1 && (
        <CopyButton
          disabled={!!rest.disabled}
          onClick={() => {
            setAllInfo(fieldName, curDate?.toString() || null);
          }}
        />
      )}
    </Stack>
  );
};
