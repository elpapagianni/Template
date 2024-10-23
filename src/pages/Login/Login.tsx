import {
  Col,
  Row,
  Button,
  Form,
  type FormProps,
  Input,
  Card,
  Typography,
} from "antd";

import { FC, useContext } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  outerRow,
  innerRow,
  card,
  title,
  signIn,
  formStyle,
  cardRow,
  forgotPasswordbutton,
} from "./style";
import { AuthContext } from "../../shared/context/auth-context";
import useApiRequest from "../../shared/hooks/useApiRequest";
import Endpoints from "../../shared/endPoints.json";
import LoadingSpin from "../../components/LoadingSpin/LoadingSpin";

type FieldType = {
  email: string;
  username: string;
  password: string;
};
const Login: FC = () => {
  const { request, isLoading } = useApiRequest();
  const { login } = useContext(AuthContext);
  const { Title, Text } = Typography;

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const response = await request({
      url: Endpoints.USER.LOGIN,
      method: "post",
      data: values,
    });
    if (response.status == 200) {
      login(response.data);
    }
  };
  if (isLoading) return <LoadingSpin />;
  return (
    <Row align="middle" style={outerRow}>
      <Row justify="center" style={innerRow}>
        <Col xs={20} sm={16} md={12} lg={8} xxl={6}>
          <Card style={card}>
            <Title level={2} style={title}>
              Login
            </Title>
            <Text style={signIn}>Συνδεθείτε στο λογαριασμό σας</Text>
            <Form size="large" onFinish={onFinish} style={formStyle}>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Εισάγετε το username σας!" },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Εισάγετε τον κωδικό πρόσβασής σας!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Κωδικός Πρόσβασης"
                />
              </Form.Item>
              <Row style={cardRow}>
                <Button type="primary" htmlType="submit">
                  Σύνδεση
                </Button>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </Row>
  );
};
export default Login;
