import {
  CreateButton,
  EditButton,
  ListButton,
  sanitizeListRestProps,
  TopToolbar,
  useResourceDefinition,
  type ShowActionsProps
} from "react-admin";

export const ShowActions = (props: ShowActionsProps) => {
  const { hasList, hasCreate, hasShow } = useResourceDefinition(props);
  return (
    <TopToolbar {...sanitizeListRestProps(props)}>
      {hasList && <ListButton />}
      {hasCreate && <CreateButton variant="outlined" />}
      {hasShow && <EditButton variant="contained" />}
    </TopToolbar>
  );
};
