import { FC } from "react";
import { Spin } from "antd";
import { spin } from "./styles";
const LoadingSpin: FC = () => {
  return <Spin size="large" style={spin} />;
};
export default LoadingSpin;
