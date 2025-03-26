import { Download, Repeat } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import {
  AutocompleteArrayInput,
  DateField,
  Empty,
  ExportButton,
  FilterButton,
  FunctionField,
  ReferenceArrayInput,
  ReferenceField,
  SearchInput,
  SelectArrayInput,
  SelectColumnsButton,
  TextField,
  TopToolbar,
  useCanAccess,
  useDataProvider,
  useRedirect,
  useTranslate,
  type RaRecord,
} from "react-admin";

import { PdfDownload_pdf_write } from "../../../services/openapi";
import { GeneralValues } from "../../../types/enum";
import { ScrollableList } from "../../custom/list/ScrollableList";
import { TextListField } from "../../custom/list/TextListField";
import { PdfDownloadShowPanel } from "./PdfDownloadShowPanel";

export const PdfDownloadList = () => {
  const t = useTranslate();
  const dataProvider = useDataProvider();
  const redirect = useRedirect();
  const canAccessUsers = useCanAccess({ resource: "users", action: "show" });

  const download = (id: string, fileType: string) => {
    dataProvider.downloadPdfGet(id).then(async (response: Response) => {
      if (response.ok) {
        const disposition = response.headers.get("Content-Disposition");
        const fileName = disposition && disposition.match(/filename="([^"]+)"/);
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(await response.blob());
        link.download = fileName?.length ? fileName[1] : `${fileType}.pdf`;
        link.click();
      }
    });
  };

  const gotoDownloadPage = (record: RaRecord) => {
    const url = "/pdf?id=" + record.id + "&type=" + record.type + "&step=1";
    redirect(url, undefined, undefined, { id: record.id });
  };

  return (
    <ScrollableList
      resource="pdf_downloads"
      empty={<Empty />}
      datagridProps={{
        rowClick: "expand",
        bulkActionButtons: false,
        expand: <PdfDownloadShowPanel />,
        expandSingle: true,
      }}
      actions={
        <TopToolbar>
          <FilterButton />
          <SelectColumnsButton />
          <ExportButton />
        </TopToolbar>
      }
      sort={{ field: "createdAt", order: "DESC" }}
      filters={[
        <SearchInput key="documentNumber" source="documentNumber" />,
        <SelectArrayInput
          key="fileType"
          source="fileType"
          choices={Object.values(PdfDownload_pdf_write.fileType)}
          optionText={(fileType) =>
            t("pages.pdf.document_names." + fileType.name)
          }
        />,
        <ReferenceArrayInput
          source="course"
          reference="courses"
          key="course"
          sort={{ field: "name", order: "ASC" }}
        >
          <AutocompleteArrayInput
            filterToQuery={(searchTerm) => ({ name: searchTerm })}
          />
        </ReferenceArrayInput>,
        <ReferenceArrayInput
          source="company"
          reference="companies"
          key="company"
          sort={{ field: "name", order: "ASC" }}
        >
          <AutocompleteArrayInput
            filterToQuery={(searchTerm) => ({ name: searchTerm })}
            optionText={(record) => `${record.name} (${record.nif})`}
          />
        </ReferenceArrayInput>,
        <ReferenceArrayInput
          source="user"
          reference="users"
          key="user"
          sort={{ field: "name", order: "ASC" }}
        >
          <AutocompleteArrayInput
            filterToQuery={(searchTerm) => ({ userName: searchTerm })}
            optionText={(record) => `${record.userName} (${record.firstName} ${record.firstSurname})`}
          />
        </ReferenceArrayInput>,
      ]}
    >
      <FunctionField
        source="actions"
        label={" "}
        render={(record) => {
          return (
            <Stack direction="row" spacing={2} alignItems={"center"}>
              <IconButton
                title={t("pages.pdf.download")}
                color="primary"
                onClick={(e) => {
                  e.stopPropagation();
                  download(record.id, record.fileType);
                }}
              >
                <Download />
              </IconButton>
              <IconButton
                title={t("pages.pdf.download")}
                onClick={(e) => {
                  e.stopPropagation();
                  gotoDownloadPage(record);
                }}
              >
                <Repeat />
              </IconButton>
            </Stack>
          );
        }}
      />
      <DateField source="createdAt" showTime={true} sortByOrder="DESC" />
      <FunctionField
        source="fileType"
        render={(record) => t("pages.pdf.document_names." + record.fileType)}
      />
      <FunctionField
        source="students"
        render={(record) => record.students?.length || 0}
        sortable={false}
        label={t("resources.pdf_downloads.fields.students.title")}
      />
      <ReferenceField
        source="company"
        reference="companies"
        sortBy="company.name"
      >
        <TextField source="name" />
        {" ("}
        <TextField source="nif" />
        {")"}
      </ReferenceField>
      <TextListField
        source="documentNumber"
        emptyText={GeneralValues.emptyValue + " ---- "}
      />
      {canAccessUsers.canAccess && (
        <ReferenceField
          source="user"
          reference="users"
          link={false}
          sortBy="user.firstName"
        >
          <TextField source="firstName" /> <TextField source="firstSurname" />{" "}
          <TextField source="secondSurname" />
        </ReferenceField>
      )}
    </ScrollableList>
  );
};
