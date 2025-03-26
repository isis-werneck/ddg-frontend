import { DateField, Labeled, useRecordContext } from "react-admin";

import { Stack } from "@mui/material";

export const TimestampsFields = () => {
  const record = useRecordContext();
  return (
    <Stack direction={{ xs: "column", md: "row" }} gap={2}>
      {record?.createdAt && (
        <Labeled label="resources.default.fields.createdAt">
          <DateField source="createdAt" showTime={true} />
        </Labeled>
      )}

      {record?.updatedAt && (
        <Labeled label="resources.default.fields.updatedAt">
          <DateField source="updatedAt" showTime={true} />
        </Labeled>
      )}
    </Stack>
  );
};
