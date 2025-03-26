import {
  CanAccess,
  Menu,
  ResourceMenuItem,
  usePermissions,
  useResourceDefinitions,
  useTranslate,
} from "react-admin";
import { Construction, FileDownload, History } from "@mui/icons-material";

import { MultiLevelMenu } from "../components/custom/MultiLevelMenu";
import { Role } from "../types/Role";
import { useLocation } from "react-router-dom";

export const AppMenu = () => {
  const t = useTranslate();
  const resources = useResourceDefinitions();
  const location = useLocation();
  const path = location.pathname;
  const { isSuccess, data: permissions } = usePermissions();

  const isResourcePath = (): boolean => {
    const pathMatch = path.match(/^\/(\w+)(\/%2F|$)/);
    return pathMatch?.[1] && resources[pathMatch[1]] ? true : false;
  };

  return (
    <Menu>
      <Menu.DashboardItem />

      <Menu.Item
        to="/pdf"
        primaryText={t("pages.pdf.title")}
        leftIcon={<FileDownload />}
      />
      {isSuccess && !permissions.hasRole(Role.teacher) && (
        <Menu.Item
          to="/pdf-history"
          resource="pdf_downloads"
          primaryText={t("resources.pdf_downloads.name")}
          leftIcon={<History />}
        />
      )}

      {isSuccess && permissions.hasRole(Role.viewer) && (
        <ResourceMenuItem name="companies" />
      )}

      <CanAccess resource="multilevel_menu" action="view">
        {Object.keys(resources).length > 0 && (
          <MultiLevelMenu
            title={t("menu.maintenance")}
            active={isResourcePath()}
            initialOpen={isResourcePath()}
            leftIcon={<Construction />}
          >
            <Menu.ResourceItems />
          </MultiLevelMenu>
        )}
      </CanAccess>
    </Menu>
  );
};
