import { GlobalOutlined, SettingOutlined } from "@ant-design/icons";
import { Button, List, Popover, Typography } from "antd";
import "flag-icon-css/css/flag-icons.min.css";
import i18next from "i18next";

const CurrentLang = () => {
  const languages = [
    {
      code: "ar",
      name: "العربية",
      country_code: "sa",
    },
    {
      code: "en",
      name: "Englush",
      country_code: "gb",
    },
  ];
  const content = (
    <List
      header={<div>Language</div>}
      bordered
      dataSource={languages}
      renderItem={(item) => (
        <List.Item
          style={{ margin: "0", padding: "6px" }}
          key={item.country_code}
        >
          <Button
            style={{ textAlign: "start", border: "none" }}
            onClick={() => i18next.changeLanguage(item.code)}
          >
            <span
              style={{ margin: "6px" }}
              className={`flag-icon flag-icon-${item.country_code}`}
            ></span>
            {item.name}
          </Button>
        </List.Item>
      )}
    />
  );
  return (
    <>
      <Popover
        placement="bottomRight"
        content={content}
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 999 }}
      >
        <GlobalOutlined
          style={{
            fontSize: "26px",
            top: "5px",
            position: "relative",
          }}
        />
      </Popover>
    </>
  );
};

export default CurrentLang;
