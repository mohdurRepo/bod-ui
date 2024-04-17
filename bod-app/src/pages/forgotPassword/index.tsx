import React from "react";
import { useForgotPassword } from "@refinedev/core";
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

export interface IForgotPasswordForm {
  email: string;
}

export const ForgotPassword: React.FC = () => {
  const [form] = Form.useForm<IForgotPasswordForm>();

  const { mutate: login } = useForgotPassword<IForgotPasswordForm>();

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
              <Form<IForgotPasswordForm>
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
                <div style={{ marginBottom: "20px" }}>
                  <a
                    style={{
                      float: "right",
                      fontSize: "12px",
                      marginTop: "10px",
                      marginBottom: "20px",
                    }}
                    href="/login"
                  >
                    {i18next.t("login")}
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
                  {i18next.t("send")}
                </Button>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </AntdLayout>
  );
};
