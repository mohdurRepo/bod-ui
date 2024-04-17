import React from "react";
import { useLogin } from "@refinedev/core";
import {
  Row,
  Col,
  Layout as AntdLayout,
  Card,
  Typography,
  Form,
  Input,
  Button,
} from "antd";
import "./styles.css";
import i18next from "i18next";
import CurrentLang from "@/components/layout/current-lang";

const { Text, Title } = Typography;

export interface ILoginForm {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const [form] = Form.useForm<ILoginForm>();

  const { mutate: login } = useLogin<ILoginForm>();

  const CardTitle = (
    <>
      <div style={{ borderBottom: "1px solid #000000", width: "100%" }}>
        <div className="imageContainerStart">
          <img
            src="./assets/images/saudi-exchange.jpg"
            alt="Saudi Exchange Logo"
            width={135}
          />
        </div>
        <div className="imageContainerEnd">
          <img
            src="./assets/images/cma.gif"
            alt="Saudi Exchange Logo"
            width={135}
          />
        </div>
        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CurrentLang />
        </div>
      </div>
      <Title level={3} className="title">
        {i18next.t("app_title")}
      </Title>
    </>
  );

  return (
    <AntdLayout className="layout">
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Col xs={22}>
          <div className="container">
            <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
              <Form<ILoginForm>
                layout="vertical"
                form={form}
                onFinish={(values) => {
                  login(values);
                }}
                requiredMark={false}
                initialValues={{
                  remember: false,
                }}
              >
                <Form.Item
                  name="email"
                  label={i18next.t("email")}
                  rules={[{ required: true }]}
                >
                  <Input size="large" placeholder={i18next.t("email")} />
                </Form.Item>
                <Form.Item
                  name="password"
                  label={i18next.t("password")}
                  rules={[{ required: true }]}
                  style={{ marginBottom: "12px" }}
                >
                  <Input type="password" placeholder="●●●●●●●●" size="large" />
                </Form.Item>
                <div style={{ marginBottom: "20px" }}>
                  <a
                    style={{
                      float: "right",
                      fontSize: "12px",
                      marginTop: "10px",
                      marginBottom: "20px",
                    }}
                    href="/forgot-password"
                  >
                    {i18next.t("forgot_password")}
                  </a>
                </div>
                <Button
                  style={{
                    marginBottom: "20px",
                  }}
                  type="primary"
                  size="large"
                  htmlType="submit"
                  block
                >
                  {i18next.t("login")}
                </Button>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </AntdLayout>
  );
};
