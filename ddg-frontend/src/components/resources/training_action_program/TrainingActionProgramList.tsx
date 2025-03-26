import {
  BooleanField,
  SearchInput,
  SelectInput,
  useTranslate,
} from "react-admin";

import { ListActions } from "../../../layout/actionbar/ListActions";
import { ScrollableList } from "../../custom/list/ScrollableList";
import { TextListField } from "../../custom/list/TextListField";

export const TrainingActionProgramList = () => {
  const t = useTranslate();
  return (
    <ScrollableList
      actions={<ListActions />}
      filters={[
        <SearchInput
          source={"name"}
          key="name"
          placeholder={t("resources.training_action_programs.fields.name")}
        />,
        <SelectInput
          source={"active"}
          key="active"
          name="active"
          choices={[
            { id: "true", name: "ra.message.yes" },
            { id: "false", name: "ra.message.no" },
          ]}
          optionText={"name"}
          optionValue={"id"}
        />,
      ]}
    >
      <TextListField source="name"></TextListField>
      <BooleanField source="active"></BooleanField>
    </ScrollableList>
  );
};
