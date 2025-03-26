import { useDataProvider, useStore } from "react-admin";
import { useEffect, useState } from "react";

import type { GeneralSettings_generalSettings_read_timestamps } from "../services/openapi";

type ExcludeReady<T> = T extends "ready|reload" ? never : T;

export type GeneralSettingsType = {
  [key in ExcludeReady<string>]: string | undefined;
} & { ready: boolean; reload: () => void };

export const useGeneralSettings = (): GeneralSettingsType => {
  const [data, setData] = useStore<Record<ExcludeReady<string>, string>>(
    "generalSettings",
    {},
  );
  const [ready, setReady] = useState<boolean>(!!Object.keys(data).length);
  const dataProvider = useDataProvider();

  useEffect(() => {
    if (!ready || !Object.keys(data).length) {
      dataProvider.getList("general_settings", {}).then(({ data }) => {
        const settings = map(data);
        setData(settings);
        setReady(true);
      });
    }
  }, [dataProvider, setData, ready, data]);

  const reload = () => {
    setReady(false);
    setData({});
  };

  return { ...data, ready, reload } as GeneralSettingsType;
};

function map(data: GeneralSettings_generalSettings_read_timestamps[]) {
  return data.reduce((acc: Record<string, string>, item) => {
    const key: string = item.settingsKey.replace(/_([a-z])/g, (_, letter) =>
      letter.toUpperCase(),
    );
    acc[key] = item.settingsValue;
    return acc;
  }, {});
}
