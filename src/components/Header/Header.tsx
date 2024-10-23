import { FC, useContext } from 'react';
import { Button, Col, Layout, Row, Typography } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { AuthContext } from '../../shared/context/auth-context';
import { headerText } from './style';
const Header: FC = () => {
  const { Text } = Typography;
  const { Header } = Layout;
  const { logout } = useContext(AuthContext);
  return (
    <Header>
      <Row>
        <Col span={22}>
          <Text style={headerText}>Header</Text>
        </Col>
        <Col span={2}>
          <Button
            shape="circle"
            type="primary"
            icon={<LogoutOutlined />}
            onClick={logout}
          ></Button>
        </Col>
      </Row>
    </Header>
  );
};
export default Header;
