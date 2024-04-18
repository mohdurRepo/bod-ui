import { Card, Col, Row } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import { Text } from "@/components/text";
import { dir } from "console";
import i18next from "i18next";

const Create = () => {
  return (
    <>
      <Card
        style={{
          height: "100%",
          padding: "0",
        }}
        bodyStyle={{ padding: "8px 8px 8px 12px " }}
        size="small"
      >
        <Text
          size="xl"
          strong
          style={{
            textAlign: "start",
            marginBottom: "100px",
          }}
        >
          {i18next.t("form3_filling")}
        </Text>
        <Form style={{ direction: "ltr" }}>
          <Row
            style={{
              marginTop: "20px",
            }}
          >
            <Col xs={24} sm={24} xl={12}>
              <Form.Item style={{ marginRight: "10px" }} label="Input">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} xl={12}>
              <Form.Item
                style={{ marginRight: "10px", direction: "rtl" }}
                label="عربي"
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
};

export default Create;
