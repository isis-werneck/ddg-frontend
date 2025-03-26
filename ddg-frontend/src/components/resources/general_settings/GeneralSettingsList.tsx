import {
  BooleanField,
  Datagrid,
  List,
  ListActions,
  SearchInput,
  useTranslate,
} from "react-admin";

import { TextListField } from "../../custom/list/TextListField";

export const GeneralSettingsList = () => {
  const t = useTranslate();
  return (
    <List
      actions={<ListActions />}
      filters={[
        <SearchInput
          source={"settingsDescription"}
          key="settingsDescription"
          placeholder={t(
            "resources.general_settings.fields.settingsDescription",
          )}
          alwaysOn={true}
        />,
        <SearchInput
          source={"settingsValue"}
          key="settingsValue"
          placeholder={t("resources.general_settings.fields.settingsValue")}
          alwaysOn={true}
        />,
      ]}
    >
      <Datagrid bulkActionButtons={false}>
        <TextListField source="settingsDescription"></TextListField>
        <TextListField source="settingsValue"></TextListField>
        <BooleanField source="active"></BooleanField>
      </Datagrid>
    </List>
  );
};
