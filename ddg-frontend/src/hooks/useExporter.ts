import jsonExport from "jsonexport/dist";
import { downloadCSV, useTranslate, type RaRecord } from "react-admin";

export const useExporter = (resource?: string) => {
  const t = useTranslate();
  const exporter = (records: RaRecord[]) => {
    if (!records.length) {
      return;
    }

    const excludeKeys = ["originId", "@id", "@type", "@context"];

    const filteredRecords = records.map((record) => {
      const filteredRecord: Record<string, unknown> = {};
      Object.keys(record).forEach((key) => {
        if (!excludeKeys.includes(key)) {
          filteredRecord[t(`resources.${resource}.fields.${key}`, { _: key })] =
            record[key];
        }
      });
      return filteredRecord;
    });

    const headers = Object.keys(filteredRecords[0]);

    jsonExport(
      filteredRecords,
      {
        headers,
        rowDelimiter: ";",
        arrayPathString: "/",
      },
      (err, csv) => {
        if (!err) {
          downloadCSV(
            csv,
            resource ? t(`resources.${resource}.name`, 2) : "export",
          );
        }
      },
    );
  };
  return exporter;
};
