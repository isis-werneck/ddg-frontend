import {
  Alert,
  Collapse,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  ReferenceField,
  TextField as TextGridField,
  useDataProvider,
  useTranslate,
} from "react-admin";
import { useEffect, useMemo, useRef, useState } from "react";

import { TextListField } from "../../custom/list/TextListField";
import dayjs from "dayjs";
import { usePdfWizardContext } from "../context/PdfWizardContext";

export const DocumentNumberSelector = () => {
  const t = useTranslate();
  const thisYear = useMemo(() => dayjs().format("YY"), []);

  const dataProvider = useDataProvider();

  const { formData, setPartial, markStepCompleted } = usePdfWizardContext();

  const [documentNumber, setDocumentNumber] = useState<string>(
    formData.documentNumber || "001/" + thisYear,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [isCalculated, setIsCalculated] = useState<boolean>(false);

  const initialized = useRef<boolean>(false);

  const calculateDocumentNumber = (documentNumber: string) => {
    const documentNumberArray = documentNumber.split("/");
    const newNumber = parseInt(documentNumberArray[0]) + 1;
    documentNumberArray[0] = newNumber.toString().padStart(3, "0");
    setDocumentNumber(documentNumberArray.join("/"));
    setIsCalculated(true);
  };

  const isValidNumber = () => {
    const documentNumberArray = documentNumber.split("/");
    return (
      documentNumberArray.length === 2 &&
      documentNumberArray[1] === thisYear &&
      documentNumberArray[0].length === 3
    );
  };

  const filter = useMemo(
    () => ({
      "regexp[documentNumber]": "/" + thisYear + "$",
      company: formData.company,
      fileType: formData.fileType,
    }),
    [formData.company, formData.fileType, thisYear],
  );

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      if (formData.company) {
        dataProvider
          .getList("pdf_downloads", {
            filter: filter,
            sort: { field: "documentNumber", order: "DESC" },
          })
          .then((response) => {
            if (response?.data?.length) {
              calculateDocumentNumber(response.data[0].documentNumber);
            }
          })
          .finally(() => setLoading(false));
      } else {
        setLoading(false);
      }
    }
  }, [formData.company, formData.documentNumber,dataProvider, filter]);

  useEffect(() => {
    markStepCompleted(!!documentNumber);
    setPartial({
      documentNumber,
    });
  }, [documentNumber, setPartial, markStepCompleted]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <TextField
          label={t("resources.pdf_downloads.fields.documentNumber")}
          value={documentNumber}
          disabled={loading}
          onChange={(e) => setDocumentNumber(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Collapse in={!isValidNumber()} timeout={500}>
          <Alert
            severity="warning"
            sx={{ whiteSpace: "pre-line", transition: "0.3s ease in" }}
          >
            {t("pages.pdf.document_number.example", { year: thisYear })}
          </Alert>
        </Collapse>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>

      {!loading && isCalculated && (
        <>
          <Grid item xs={12} sx={{ marginTop: 2, marginBottom: 2 }}>
            <Alert severity="info">
              {t("pages.pdf.document_number.already_exist")}
            </Alert>
            <Divider sx={{ margin: 2 }} />
            <Typography>
              {t("pages.pdf.document_number.previous_documents")}:
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <List
              resource="pdf_downloads"
              actions={false}
              pagination={false}
              title=" "
              filter={filter}
              sort={{ field: "documentNumber", order: "DESC" }}
              storeKey={false}
            >
              <Datagrid bulkActionButtons={false} >
                <FunctionField
                  source="fileType"
                  render={(record) =>
                    t("pages.pdf.document_names." + record.fileType + "")
                  }
                />
                <DateField source="createdAt" />
                <TextListField source="documentNumber" />
                <ReferenceField
                  source="company"
                  reference="companies"
                  link={false}
                ></ReferenceField>
                <ReferenceField source="user" reference="users">
                  <TextGridField source="firstName" />{" "}
                  <TextGridField source="firstSurname" />{" "}
                  <TextGridField source="secondSurname" />
                </ReferenceField>
              </Datagrid>
            </List>
          </Grid>
        </>
      )}
    </Grid>
  );
};
