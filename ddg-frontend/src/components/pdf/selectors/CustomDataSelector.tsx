import {
  Fragment,
  JSX,
  useCallback,
  useEffect,
  type ChangeEvent,
  type ElementType,
} from "react";

import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  type RegularBreakpoints,
} from "@mui/material";
import { Dayjs, isDayjs } from "dayjs";
import { useTranslate } from "react-admin";
import { usePdfWizardContext } from "../context/PdfWizardContext";
import { useSelectorContext } from "../context/SelectorContext";

export type CustomDataSelectorProp = {
  title: string;
  name: string;
  isDataGroup?: boolean;
  component?: ElementType;
  componentProps?: Record<string, unknown>;
  options?: Record<string, string>[];
  transformFunction?: (value?: string | null) => unknown;
  gridOptions?: RegularBreakpoints;
};

export const CustomDataSelector = () => {
  const t = useTranslate();

  const { markStepCompleted, formData, setPartial, fieldsets, setFieldsets } =
    usePdfWizardContext();

  const { customData: data } = useSelectorContext();

  const isDataGroup = !!data?.some((prop) => prop.isDataGroup);

  const isCompletedDataGroup = useCallback(
    (prop: CustomDataSelectorProp) => {
      let isCompleted = true;
      [...Array(fieldsets)].map((_, idx) => {
        if (!formData.customData?.[prop.name + "_" + (idx + 1)]) {
          isCompleted = false;
        }
      });
      return isCompleted;
    },
    [fieldsets, formData.customData],
  );

  const isCompleted = useCallback(() => {
    for (const prop of data || []) {
      if (
        prop.componentProps?.required !== false &&
        ((prop.isDataGroup && !isCompletedDataGroup(prop)) ||
          (!prop.isDataGroup &&
            (!formData.customData?.[prop.name] ||
              formData.customData?.[prop.name] === "Invalid Date")))
      ) {
        return false;
      }
    }
    return true;
  }, [data, formData.customData, isCompletedDataGroup]);

  const handleComponentChange = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
      | Dayjs,
    name: string,
  ) => {
    let value = "";
    if (isDayjs(e)) {
      value = e.format("YYYY-MM-DD");
    } else if (e !== null) {
      value = e.target?.value;
    }

    setPartial({
      customData: {
        ...formData.customData,
        [name]: value,
      },
    });
  };

  const handleAddFields = (maxfieldsets: number) => {
    fieldsets < maxfieldsets && setFieldsets(fieldsets + 1);
    markStepCompleted(false);
  };

  const handleDeleteFields = () => {
    for (const key in formData.customData) {
      if (
        Object.prototype.hasOwnProperty.call(formData.customData, key) &&
        key.endsWith("_" + fieldsets)
      ) {
        delete formData.customData?.[key];
      }
    }
    setFieldsets(fieldsets - 1);
  };

  useEffect(() => {
    markStepCompleted(isCompleted());
  }, [formData.customData, isCompleted, markStepCompleted]);

  const CustomSelectLabel = ({
    title,
    required,
    fieldKey,
    gridOptions,
  }: {
    title: string;
    required: boolean;
    fieldKey: string;
    gridOptions?: RegularBreakpoints;
  }): JSX.Element => {
    return (
      <Grid item key={"text_grid_" + fieldKey} sx={{ mb: 2 }} {...gridOptions}>
        <InputLabel
          id={"custom_data_" + fieldKey}
          sx={{ overflow: "visible", whiteSpace: "normal" }}
        >
          {t(title) + (required ? " *" : "")}
        </InputLabel>
      </Grid>
    );
  };

  const renderButton = (prop: CustomDataSelectorProp, fieldKey: string) => {
    const maxfieldsets = (prop.componentProps?.maxfieldsets as number) || 1;
    const marginLeft = fieldsets === maxfieldsets ? 0 : 2;
    return (
      <Grid item key={"button_grid_" + fieldKey} {...prop.gridOptions}>
        {fieldsets !== maxfieldsets && (
          <Button
            key={"add_" + fieldKey}
            color="primary"
            onClick={() => handleAddFields(maxfieldsets)}
            {...prop.componentProps}
          >
            {prop.title && t(prop.title)}
          </Button>
        )}
        {fieldsets > 1 && (
          <Button
            key={"delete_" + fieldKey}
            sx={{ ml: marginLeft }}
            onClick={handleDeleteFields}
            variant="contained"
            color="primary"
          >
            {t("pages.pdf.custom_info.delete_fields")}
          </Button>
        )}
      </Grid>
    );
  };

  const inputs = (fieldIdx: number) =>
    data?.map((prop, idx) => {
      const ComponentElement = prop?.component || TextField;
      const isSelectInput = ComponentElement === Select;
      const isButtonElement = ComponentElement === Button;
      const fieldKey = idx + "_" + fieldIdx;
      const fieldName = prop.isDataGroup
        ? prop.name + "_" + (fieldIdx + 1)
        : prop.name;

      return (
        <Fragment key={"input_grid_" + fieldKey}>
          {!isButtonElement && isSelectInput ? (
            <>
              <CustomSelectLabel
                title={prop.title}
                required={!!prop.componentProps?.required}
                fieldKey={fieldKey}
                gridOptions={prop.gridOptions}
              />
              <Grid item key={"input_grid_" + fieldKey} {...prop.gridOptions}>
                <Select
                  key={"custom_data_" + fieldKey}
                  labelId={"custom_data_" + fieldKey}
                  label={
                    t(prop.title) + (prop.componentProps?.required ? " *" : "")
                  }
                  onChange={(e: SelectChangeEvent<string>) =>
                    handleComponentChange(e, fieldName)
                  }
                  value={formData.customData?.[fieldName] || ""}
                  name={fieldName}
                  {...prop.componentProps}
                >
                  {prop.options?.map((option, index) => (
                    <MenuItem
                      key={"option_" + fieldKey + "_" + index}
                      value={t(option.value)}
                    >
                      {t(option.label)}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </>
          ) : (
            !isButtonElement && (
              <Grid item {...prop.gridOptions}>
                <ComponentElement
                  key={"custom_data_" + fieldKey}
                  label={t(prop.title)}
                  onChange={(
                    e:
                      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                      | Dayjs,
                  ) => handleComponentChange(e, fieldName)}
                  value={
                    prop.transformFunction
                      ? prop.transformFunction(
                          formData.customData?.[fieldName] || "",
                        )
                      : formData.customData?.[fieldName] || ""
                  }
                  name={fieldName}
                  {...prop.componentProps}
                  helperText={t("" + prop.componentProps?.helperText, {
                    _: prop.componentProps?.helperText || "",
                  })}
                />
              </Grid>
            )
          )}
          {isButtonElement &&
            fieldsets - fieldIdx === 1 &&
            renderButton(prop, fieldKey)}
        </Fragment>
      );
    });

  return isDataGroup && fieldsets > 1 ? (
    [...Array(fieldsets)].map((_, idx) => (
      <Fragment key={"text_grid_" + idx}>
        {isDataGroup && fieldsets > 1 && (
          <Grid container spacing={2}>
            <Typography variant="h6" sx={{ mt: 4, ml: 2 }}>
              {t("pages.pdf.custom_info.register") + " " + (idx + 1)}
            </Typography>
          </Grid>
        )}
        <Grid container spacing={2} key={"container_" + idx}>
          {inputs(idx)}
        </Grid>
      </Fragment>
    ))
  ) : (
    <Grid container spacing={2} key={"container_" + 0}>
      {inputs(0)}
    </Grid>
  );
};
