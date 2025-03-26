import { ResourceTitle } from "./ResourceTitle";
import { useShowContext } from "react-admin";

type ShowTitleProps = {
  sources?: string[];
  joint?: string;
};

export const ShowTitle = ({ sources, joint }: ShowTitleProps) => {
  const { record, resource } = useShowContext();

  return (
    <ResourceTitle
      title="pages.show_title"
      resourceName={resource}
      sources={sources}
      joint={joint}
      record={record}
    />
  );
};
