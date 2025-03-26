import { Role } from "../types/Role";
import { useTranslate } from "react-admin";

export const useTranslateRoles = () => {
  const t = useTranslate();

  return (roles: string[] | string): string => {
    if (!Array.isArray(roles)) {
      roles = roles.split(",");
    }

    return roles
      .map((role: string) => {
        const roleStrings = Object.values(Role) as string[];
        const isRole = roleStrings.includes(role.trim());
        return isRole ? t(`roles.${role.trim()}`) : role;
      })
      .join(", ");
  };
};
