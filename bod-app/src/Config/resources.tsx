import {
  BookOutlined,
  DashboardOutlined,
  FileSearchOutlined,
  FileTextOutlined,
  ShopOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";
import i18next from "i18next";

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
      label: i18next.t("dashboard"),
      icon: (
        <DashboardOutlined
          style={{
            fontSize: "18px",
          }}
        />
      ),
    },
  },

  {
    name: "formFilling",

    list: "/form3",
    show: "/form3/:id",
    create: "/form3/new",
    edit: "/form3/edit/:id",
    meta: {
      label: i18next.t("form3_filling"),
      icon: (
        <FileTextOutlined
          style={{
            fontSize: "18px",
          }}
        />
      ),
    },
  },
  {
    name: "forms",

    list: "/companies",
    show: "/companies/:id",
    create: "/companies/new",
    edit: "/companies/edit/:id",
    meta: {
      label: i18next.t("user_forms"),
      icon: (
        <SnippetsOutlined
          style={{
            fontSize: "18px",
          }}
        />
      ),
    },
  },
  {
    name: "userGudie",

    list: "/companies",
    show: "/companies/:id",
    create: "/companies/new",
    edit: "/companies/edit/:id",
    meta: {
      label: i18next.t("user_guide"),
      icon: (
        <BookOutlined
          style={{
            fontSize: "18px",
          }}
        />
      ),
    },
  },
  {
    name: "comperhensiveReport",

    list: "/companies",
    show: "/companies/:id",
    create: "/companies/new",
    edit: "/companies/edit/:id",
    meta: {
      parent: "reports",
      label: i18next.t("comperhensive_report"),

      icon: (
        <FileSearchOutlined
          style={{
            fontSize: "18px",
          }}
        />
      ),
    },
  },

  {
    name: "businessReport",

    list: "/companies",
    show: "/companies/:id",
    create: "/companies/new",
    edit: "/companies/edit/:id",
    meta: {
      parent: "reports",
      label: i18next.t("business_report"),

      icon: (
        <FileSearchOutlined
          style={{
            fontSize: "18px",
          }}
        />
      ),
    },
  },
  {
    name: "submissionReport",
    list: "/companies",
    show: "/companies/:id",
    create: "/companies/new",
    edit: "/companies/edit/:id",
    meta: {
      parent: "reports",
      label: i18next.t("submission_report"),

      icon: (
        <FileSearchOutlined
          style={{
            fontSize: "18px",
          }}
        />
      ),
    },
  },
  {
    name: "setupForms",
    list: "/companies",
    show: "/companies/:id",
    create: "/companies/new",
    edit: "/companies/edit/:id",
    meta: {
      parent: "Administration",
      label: i18next.t("setup_forms"),

      icon: (
        <FileSearchOutlined
          style={{
            fontSize: "18px",
          }}
        />
      ),
    },
  },
  {
    name: "menuManagment",
    list: "/companies",
    show: "/companies/:id",
    create: "/companies/new",
    edit: "/companies/edit/:id",
    meta: {
      parent: "Administration",
      label: i18next.t("menu_managment"),

      icon: (
        <FileSearchOutlined
          style={{
            fontSize: "18px",
          }}
        />
      ),
    },
  },
];
