import {
  AutocompleteInput,
  ReferenceArrayInput,
  ReferenceField,
  SearchInput,
} from "react-admin";

import { ListActions } from "../../../layout/actionbar/ListActions";
import { ScrollableList } from "../../custom/list/ScrollableList";
import { TextListField } from "../../custom/list/TextListField";

export const ModuleList = () => (
  <ScrollableList
    sort={{ field: "id", order: "DESC" }}
    filters={[
      <SearchInput
        source={"code"}
        key="code"
        placeholder="Código"
        name="code_partial"
      />,
      <SearchInput key="name" source="name" placeholder="Nombre" />,
      <ReferenceArrayInput key="course" source="course" reference="courses">
        <AutocompleteInput
          multiple
          optionText="name"
          filterToQuery={(searchTerm) => ({ name: searchTerm })}
        />
      </ReferenceArrayInput>,
    ]}
    actions={<ListActions />}
  >
    <TextListField source="code" searchSource="code_partial" />
    <TextListField source="name" />
    <ReferenceField source="course" reference="courses" sortBy="course.name" />
  </ScrollableList>
);
