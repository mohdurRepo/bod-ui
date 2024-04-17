import { UpcomingEvents } from "@/components";
import { Col, Row } from "antd";
import i18next from "i18next";
export const Home = () => {
  return (
    <div>
      <Row>
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: "460px",
          }}
        >
          <UpcomingEvents />
        </Col>
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: "460px",
          }}
        >
          Draft
        </Col>
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: "460px",
          }}
        >
          Draft
        </Col>
      </Row>
    </div>
  );
};
