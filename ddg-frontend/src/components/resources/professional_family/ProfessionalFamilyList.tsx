import { SearchInput } from "react-admin";
import { ListActions } from "../../../layout/actionbar/ListActions";
import { ScrollableList } from "../../custom/list/ScrollableList";
import { TextListField } from "../../custom/list/TextListField";

export const ProfessionalFamilyList = () => {
  return (
    <ScrollableList
      actions={<ListActions />}
      filters={[
        <SearchInput
          source={"code_partial"}
          key="code"
          name="code_partial"
          placeholder="Code"
        />,
        <SearchInput source={"name"} key="name" placeholder="Name" />,
      ]}
    >
      <TextListField source="code" searchSource="code_partial"></TextListField>
      <TextListField source="name"></TextListField>
    </ScrollableList>
  );
};
