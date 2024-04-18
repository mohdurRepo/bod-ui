import { Authenticated, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import { authProvider, dataProvider, liveProvider } from "./providers";
import { ForgotPassword, Login, Home } from "./pages";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { resources } from "./Config/resources";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import HttpApi from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { Cookies } from "react-cookie";
import "./App.css";
import Form3 from "./pages/form3/list";
import Create from "./pages/form3/create";
const cookie = new Cookies();
i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    lng: cookie.get("i18next"),
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "querystring",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    // ... your i18next config
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

function App() {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <AntdApp>
          <Refine
            dataProvider={dataProvider}
            liveProvider={liveProvider}
            notificationProvider={useNotificationProvider}
            routerProvider={routerBindings}
            authProvider={authProvider}
            resources={resources}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              useNewQueryKeys: true,
              projectId: "KC8T5K-2lNXiD-7wXxLR",
              liveMode: "auto",
            }}
          >
            <Routes>
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/login" element={<Login />} />
              <Route
                element={
                  <Authenticated
                    key="authenticated-layout"
                    fallback={<CatchAllNavigate to="/login" />}
                  >
                    <Layout>
                      <Outlet />
                    </Layout>
                  </Authenticated>
                }
              >
                <Route index element={<Home />} />
                <Route path="/form3">
                  <Route index element={<Form3 />} />
                  <Route path="new" element={<Create />} />
                </Route>
              </Route>
            </Routes>
            <RefineKbar />
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
        </AntdApp>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
