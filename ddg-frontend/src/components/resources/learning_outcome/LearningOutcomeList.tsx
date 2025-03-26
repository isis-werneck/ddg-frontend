import {
  AutocompleteArrayInput,
  ReferenceArrayInput,
  ReferenceField,
  SearchInput,
  useTranslate,
} from "react-admin";

import { ListActions } from "../../../layout/actionbar/ListActions";
import { ScrollableList } from "../../custom/list/ScrollableList";
import { TextListField } from "../../custom/list/TextListField";

export const LearningOutcomeList = () => {
  const t = useTranslate();

  return (
    <ScrollableList
      sort={{ field: "id", order: "DESC" }}
      filters={[
        <SearchInput
          source={"code"}
          key="code"
          name="code_partial"
          placeholder={t("resources.learning_outcomes.fields.code")}
        />,
        <SearchInput
          source={"description"}
          key="description"
          placeholder={t("resources.learning_outcomes.fields.description")}
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
          source="module"
          reference="modules"
          key="module"
          sort={{ field: "name", order: "ASC" }}
        >
          <AutocompleteArrayInput
            filterToQuery={(searchTerm: string) => ({ name: searchTerm })}
          />
        </ReferenceArrayInput>,
      ]}
      actions={<ListActions />}
    >
      <TextListField source="code" searchSource="code_partial" />
      <ReferenceField
        source="course"
        reference="courses"
        sortBy="course.name"
      />
      <ReferenceField
        source="module"
        reference="modules"
        sortBy="module.name"
      />
      <TextListField source="description" />
    </ScrollableList>
  );
};
