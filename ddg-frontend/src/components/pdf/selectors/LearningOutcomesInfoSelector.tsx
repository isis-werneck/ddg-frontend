import {
  Box,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { useEffect, useState } from "react";
import { useTranslate, type Identifier } from "react-admin";
import { useMeasure } from "react-use";
import { usePdfWizardContext } from "../context/PdfWizardContext";
import { CopyButton } from "./inputs/CopyButton";
import type { PdfLearningOutcome_pdf_write } from "../../../services/openapi";

export const LearningOutcomesInfoSelector = () => {
  const t = useTranslate();
  const [ref, { width }] = useMeasure<HTMLDivElement>();
  const { markStepCompleted, setPartial, learningOutcomesList, formData } =
    usePdfWizardContext();

  const [learningOutcomesInfos, setLearningOutcomesInfos] = useState<
    Map<Identifier, PdfLearningOutcome_pdf_write>
  >(
    new Map(
      learningOutcomesList?.map((learningOutcome) => {
        const current = formData?.learningOutcomes?.find(
          (lo) => lo?.learningOutcome === learningOutcome["@id"],
        );
        return [
          learningOutcome["@id"] as string,
          {
            learningOutcome: learningOutcome["@id"],
            integrallyInCenter: current?.integrallyInCenter || null,
            integrallyInCompany: current?.integrallyInCompany || null,
          },
        ];
      }),
    ),
  );

  const setInfo = (id: Identifier, value?: string | null) => {
    const info = learningOutcomesInfos.get(id);

    if (info) {
      info.integrallyInCenter = value == "center";
      info.integrallyInCompany = value == "company";
      learningOutcomesInfos.set(id, info);
      setLearningOutcomesInfos(new Map(learningOutcomesInfos));
    }
  };

  const setAllInfos = (id: Identifier) => {
    const info = learningOutcomesInfos.get(id);
    if (info) {
      learningOutcomesInfos.forEach((learningOutcome: PdfLearningOutcome_pdf_write) => {
        learningOutcome.integrallyInCenter = info?.integrallyInCenter;
        learningOutcome.integrallyInCompany = info?.integrallyInCompany;
      });
    }
    setLearningOutcomesInfos(new Map(learningOutcomesInfos));
  };

  useEffect(() => {
    const isComplete = Array.from(learningOutcomesInfos.values()).every(
      (info) => info.integrallyInCenter || info.integrallyInCompany,
    );
    markStepCompleted(isComplete ? true : false);
  });

  useEffect(() => {
    setPartial({
      learningOutcomes: Array.from(learningOutcomesInfos.values()),
    });
  }, [learningOutcomesInfos, setPartial]);

  return (
    <Box ref={ref}>
      <Box sx={{ overflowX: "auto", width: width }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ minWidth: "100px" }}>
                {t("resources.learning_outcomes.fields.code")}
              </TableCell>
              <TableCell sx={{ minWidth: "200px" }}>
                {t("resources.learning_outcomes.fields.description")}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {t("pages.pdf.learning_outcomes.integrallyInCompany")}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {t("pages.pdf.learning_outcomes.integrallyInCenter")}
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {learningOutcomesList?.map((learningOutcome) => {
              const info = learningOutcomesInfos.get(
                learningOutcome["@id"] as string,
              );
              return (
                info && (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={learningOutcome.id}
                  >
                    <TableCell>{learningOutcome.code}</TableCell>
                    <TableCell>{learningOutcome.description}</TableCell>
                    <TableCell colSpan={3}>
                      <RadioGroup
                        onChange={(e) => {
                          setInfo(learningOutcome["@id"] || "", e.target.value);
                        }}
                        name="radio-buttons-group"
                        value={
                          info?.integrallyInCompany
                            ? "company"
                            : info?.integrallyInCenter
                              ? "center"
                              : ""
                        }
                      >
                        <Stack
                          direction={"row"}
                          gap={2}
                          sx={{ width: "100%" }}
                          justifyContent={"space-around"}
                        >
                          <Radio value="company" />
                          <Radio value="center" />
                        </Stack>
                      </RadioGroup>
                    </TableCell>
                    <TableCell>
                      <CopyButton
                        onClick={() =>
                          setAllInfos(learningOutcome["@id"] || "")
                        }
                      />
                    </TableCell>
                  </TableRow>
                )
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};
