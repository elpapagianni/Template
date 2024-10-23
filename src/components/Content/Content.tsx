import { FC } from "react";
import { Layout } from "antd";
type Props = {
  children: any;
};
const Content: FC<Props> = ({ children }) => {
  const { Content } = Layout;
  return <Content>{children} </Content>;
};
export default Content;
