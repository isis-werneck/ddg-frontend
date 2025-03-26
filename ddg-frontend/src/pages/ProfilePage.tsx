import {
  RecordContextProvider,
  ResourceContextProvider,
  SaveButton,
  Title,
  Toolbar,
  useNotify,
  useUpdate,
  type NotificationType,
  type RaRecord,
} from "react-admin";
import { useNavigate } from "react-router-dom";

import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import { authProvider } from "../auth/authProvider";
import { UserEditForm } from "../components/resources/user/UserEditForm";
import { dataProvider } from "../dataProvider";

export const ProfilePage = () => {
  const [user, setUser] = useState<RaRecord | null>(null);
  const [update] = useUpdate();
  const navigate = useNavigate();
  const notify = useNotify();
  const onSubmit = (data: Partial<RaRecord>) => {
    update(
      "users",
      { id: user?.id, data },
      {
        onSuccess: (data: Partial<RaRecord>) => {
          let message = "resources.users.saved";
          let type: NotificationType = "success";
          if (
            data.userName !== user?.userName ||
            data.userEmail !== user?.userEmail
          ) {
            authProvider.logout(null);
            navigate("/login");
            message = "resources.users.relogin";
            type = "warning";
          }
          notify(message, { type: type, autoHideDuration: 12000 });
        },
      },
    );
  };

  useEffect(() => {
    dataProvider.me().then(async (response: Response) => {
      const user = await response.json();
      user.id = "/api/users/" + user.id;
      user["@id"] = "/api/users/" + user.id;
      setUser(user);
    });
  }, []);

  if (!user) return null;
  return (
    <ResourceContextProvider value="users">
      <RecordContextProvider value={user}>
        <Title title="resources.users.profile_editor" />
        <Card>
          <UserEditForm
            onSubmit={onSubmit}
            noRoles={true}
            toolbar={
              <Toolbar>
                <SaveButton />
              </Toolbar>
            }
          />
        </Card>
      </RecordContextProvider>
    </ResourceContextProvider>
  );
};
