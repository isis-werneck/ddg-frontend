import {
    ListButton,
    sanitizeListRestProps,
    TopToolbar,
    useResourceDefinition,
    type CreateActionsProps
} from "react-admin";

export const CreateActions = (props: CreateActionsProps) => {
  const { hasList } = useResourceDefinition(props);
  return (
    <TopToolbar {...sanitizeListRestProps(props)}>
      {hasList && <ListButton />}
    </TopToolbar>
  );
};
