import { AppBar } from "./AppBar";
import { AppMenu } from "./AppMenu";
import { Layout } from "react-admin";

export const AppLayout = ({ children }: { children?: React.ReactNode }) => (
  <Layout menu={AppMenu} appBar={AppBar}>
    {children}
  </Layout>
);
