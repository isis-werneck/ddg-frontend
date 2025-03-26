import { Person } from "@mui/icons-material";
import { Divider, ListItemIcon, ListItemText, MenuList } from "@mui/material";
import {
  Logout,
  MenuItemLink,
  UserMenu,
  useTranslate,
  useUserMenu,
  type UserMenuProps,
} from "react-admin";

const MenuLinks = () => {
  const { onClose } = useUserMenu() ?? { onClose: () => null };
  const t = useTranslate();

  return (
    <MenuList onClick={onClose}>
      <MenuItemLink to="/profile">
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText>{t("menu.profile")}</ListItemText>
      </MenuItemLink>
      {/* <MenuItemLink to="/">
        <ListItemIcon>
          <TextSnippetOutlined />
        </ListItemIcon>
        <ListItemText>Example</ListItemText>
      </MenuItemLink> */}
    </MenuList>
  );
};

export const AppUserMenu = (props: UserMenuProps) => {
  return (
    <UserMenu {...props}>
      <MenuLinks />
      <Divider />
      <Logout />
    </UserMenu>
  );
};
