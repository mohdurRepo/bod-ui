import { GlobalOutlined, SettingOutlined } from "@ant-design/icons";
import { Button, List, Popover, Typography } from "antd";
import "flag-icon-css/css/flag-icons.min.css";
import i18next from "i18next";

import { useEffect } from "react";

const CurrentLang = () => {
  const languages = [
    {
      code: i18next.t("ar"),
      name: i18next.t("arabic"),
      country_code: i18next.t("country_code_ar"),
      dir: i18next.t("dir_rtl"),
    },
    {
      code: i18next.t("en"),
      name: i18next.t("english"),
      country_code: i18next.t("country_code_gb"),
      dir: i18next.t("dir_ltr"),
    },
  ];
  const currentLanguage = languages.find(
    (l) => l.code === document.documentElement.lang
  );
  useEffect(() => {
    document.body.dir = currentLanguage?.dir || "ltr";
  }, [currentLanguage]);
  const content = (
    <List
      header={<div>{i18next.t("lang")}</div>}
      bordered
      dataSource={languages}
      renderItem={(item) => (
        <List.Item
          style={{ margin: "0", padding: "6px" }}
          key={item.country_code}
        >
          <Button
            style={{ textAlign: "start", border: "none", width: "100%" }}
            onClick={() => {
              document.documentElement.lang = item.code;
              i18next.changeLanguage(item.code);
            }}
            disabled={item.code === currentLanguage?.code}
          >
            <span
              style={{
                margin: "6px",
                opacity: item.code === currentLanguage?.code ? 0.5 : 1,
              }}
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
