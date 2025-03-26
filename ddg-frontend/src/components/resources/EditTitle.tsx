import { ResourceTitle } from "./ResourceTitle";
import { useEditContext } from "react-admin";

type EditTitleProps = {
  sources?: string[];
  joint?: string;
};

export const EditTitle = ({ sources, joint }: EditTitleProps) => {
  const { record, resource } = useEditContext();

  return (
    <ResourceTitle
      title="pages.edit_title"
      resourceName={resource}
      sources={sources}
      joint={joint}
      record={record}
    />
  );
};
