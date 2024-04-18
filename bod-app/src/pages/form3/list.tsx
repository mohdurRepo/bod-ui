import { COMPANIES_LIST_QUERY } from "@/graphql/queries";
import { CreateButton, List, useTable } from "@refinedev/antd";
import { useGo } from "@refinedev/core";
import { Button, Divider, Table } from "antd";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import i18next from "i18next";

const Form3 = () => {
  const componentRef = useRef<any>();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const go = useGo();
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: true,
      render: () => <a>action</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: true,
      render: () => <a>action</a>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      sorter: true,
      render: () => <a>action</a>,
    },
  ];

  return (
    <List
      title="Form3 Details"
      breadcrumb={false}
      headerButtons={() => (
        <CreateButton
          title={i18next.t("draft")}
          onClick={() => {
            go({
              to: {
                resource: "formFilling",
                action: "create",
              },
              options: {
                keepQuery: true,
              },
              type: "replace",
            });
          }}
        />
      )}
    >
      <Button onClick={handlePrint} type="primary" danger>
        {" "}
        Export to PDF{" "}
      </Button>
      <div ref={componentRef}>
        <Divider>{i18next.t("draft")}</Divider>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </List>
  );
};

export default Form3;
