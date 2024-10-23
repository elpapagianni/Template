import { Layout, Grid } from "antd";
import { FC, useState } from "react";

const Sider: FC = () => {
  const { useBreakpoint } = Grid;
  const { Sider } = Layout;
  const breakpoints = useBreakpoint();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      {!breakpoints.md ? (
        <Sider breakpoint="md" collapsedWidth={0} />
      ) : (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => {
            setCollapsed(value);
          }}
        />
      )}
    </>
  );
};
export default Sider;
