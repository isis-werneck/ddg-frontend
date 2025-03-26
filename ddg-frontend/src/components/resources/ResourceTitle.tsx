import { useTranslate } from "react-admin";

type ResourceTitleProps = {
  title: string;
  resourceName: string;
  sources?: string[];
  joint?: string;
  record?: Record<string, unknown>;
};

export const ResourceTitle = ({
  title,
  resourceName,
  sources,
  joint = " ",
  record,
}: ResourceTitleProps) => {
  const t = useTranslate();

  const resourceTexts = [];

  if (record && sources && sources.length > 0) {
    for (let i = 0; i < sources.length; i++) {
      if (record[sources[i]]) {
        resourceTexts.push(record[sources[i]]);
      }
    }
  }

  return (
    <span>
      {t(title, {
        resource: t(`resources.${resourceName}.name`, 1),
        data: `"${resourceTexts.join(joint).trim()}"`,
      })}
    </span>
  );
};
