import {
  CreateButton,
  ListButton,
  sanitizeListRestProps,
  ShowButton,
  TopToolbar,
  useResourceDefinition,
  type EditActionsProps,
} from "react-admin";

export const EditActions = (props: EditActionsProps) => {
  const { hasList, hasCreate, hasShow } = useResourceDefinition(props);
  return (
    <TopToolbar {...sanitizeListRestProps(props)}>
      {hasList && <ListButton />}
      {hasShow && <ShowButton />}
      {hasCreate && <CreateButton variant="outlined" />}
    </TopToolbar>
  );
};
