import { totalCountVariants } from "@/constants";
import { Card, Skeleton } from "antd";
import React from "react";
import { Text } from "../text";

type Props = {
  resource: "companies" | "contacts" | "deals";
  isLoading: boolean;
  totalCount?: number;
};

const DashboardTotalCount = ({ resource, isLoading, totalCount }: Props) => {
  const { primaryColor, secondaryColor, icon, title } =
    totalCountVariants[resource];
  return (
    <Card
      style={{
        height: "96px",
        padding: "0",
      }}
      bodyStyle={{ padding: "8px 8px 8px 12px " }}
      size="small"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          whiteSpace: "nowrap",
        }}
      >
        {icon}
        <Text size="md" className="secondary" style={{ marginLeft: "8px" }}>
          {title}
        </Text>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Text
          size="xxxl"
          strong
          style={{
            flex: 1,
            whiteSpace: "nowrap",
            flexShrink: 0,
            textAlign: "start",
            marginLeft: "48px",
            marginRight: "48px",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {isLoading ? <Skeleton.Button /> : totalCount}
        </Text>
      </div>
    </Card>
  );
};

export default DashboardTotalCount;
