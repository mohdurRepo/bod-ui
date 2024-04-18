import { CalendarOutlined } from "@ant-design/icons";
import { Badge, Card, List } from "antd";
import React, { useState } from "react";
import { Text } from "../text";
import UpcomingEventsSkeleton from "../skeleton/upcoming-events";
import { useList } from "@refinedev/core";
import { DASHBORAD_CALENDAR_UPCOMING_EVENTS_QUERY } from "@/graphql/queries";

const UpcomingEvents = () => {
  const [isLoading, setIsLoading] = useState(false);

  /*const { data, isLoading: evetnsLoading } = useList({
    resource: "events",
    pagination: { pageSize: 5 },
    meta: {
      gqlQuery: DASHBORAD_CALENDAR_UPCOMING_EVENTS_QUERY,
    },
  });*/
  //alert(JSON.stringify(data));
  return (
    <Card
      style={{
        height: "100%",
      }}
      headStyle={{
        padding: "8px 16px",
      }}
      bodyStyle={{
        padding: "0 1rem",
      }}
      title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <CalendarOutlined />
          <Text
            size="sm"
            style={{
              marginLeft: "0.7rem",
            }}
          >
            UpComing Events
          </Text>
        </div>
      }
    >
      {isLoading ? (
        <List
          itemLayout="horizontal"
          dataSource={Array.from({ length: 5 }).map((_, index) => ({
            id: index,
          }))}
          renderItem={() => <UpcomingEventsSkeleton />}
        ></List>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={[]}
          renderItem={(item) => {
            return (
              //const renderDate = getDate(item.startDate, item.endDate)
              <List.Item>
                <List.Item.Meta
                  avatar={<Badge color={item.color} />}
                  title={<Text size="xs" />}
                />
              </List.Item>
            );
          }}
        ></List>
      )}
    </Card>
  );
};

export default UpcomingEvents;
