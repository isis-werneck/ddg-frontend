import { ReferenceField, SearchInput, useTranslate } from "react-admin";

import { ListActions } from "../../../layout/actionbar/ListActions";
import { ScrollableList } from "../../custom/list/ScrollableList";
import { TextListField } from "../../custom/list/TextListField";

export const TrainingCycleList = () => {
  const t = useTranslate();
  return (
    <ScrollableList
      actions={<ListActions />}
      filters={[
        <SearchInput
          source={"code"}
          key="code"
          name="code_partial"
          placeholder={t("resources.training_cycles.fields.code")}
        />,
        <SearchInput
          name={"name"}
          source={"name"}
          key="name"
          placeholder="Name"
        />,
      ]}
    >
      <TextListField source="code" searchSource="code_partial"></TextListField>
      <TextListField source="name"></TextListField>
      <TextListField source="regime"></TextListField>
      <ReferenceField
        source="professionalFamily"
        reference="professional_families"
        sortBy="professionalFamily.name"
      >
        <TextListField source="name"></TextListField>
      </ReferenceField>
    </ScrollableList>
  );
};
