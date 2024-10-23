import { FC } from "react";
import { Layout } from "antd";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sider from "../Sider/Sider";
import Content from "../Content/Content";
import { Outlet } from "react-router-dom";
import { baseStyle } from "../../shared/styles/baseStyle";
type Props = {
  children: any;
};
const Mainlayout: FC = () => {
  return (
    <Layout style={baseStyle.layoutStyle}>
      <Header />
      <Layout>
        <Sider />
        <Layout>
          <Content>
            <Outlet />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Mainlayout;
