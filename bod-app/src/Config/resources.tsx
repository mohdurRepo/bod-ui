import { DashboardOutlined, ShopOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export const resources: IResourceItem[] = [
  /**
   * A resource in Refine performs theses actions
   * list -> get all records (Read)
   * show -> get a single record (Read)
   * create -> create a record (Create)
   * edit -> update a record (Update)
   * delete -> delete a record (Delete)
   * or clone
   */

  {
    name: "dashboard",
    list: "/",
    // used to sotre any additonal information about the resource
    meta: {
      label: i18next.t("lang"),
      icon: <DashboardOutlined />,
    },
  },

  {
    name: "companies",
    list: "/companies",
    show: "/companies/:id",
    create: "/companies/new",
    edit: "/companies/edit/:id",
    meta: {
      label: "Companies",
      icon: <ShopOutlined />,
    },
  },
];
