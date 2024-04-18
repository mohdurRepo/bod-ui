import React from "react";

import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";

import { Header } from "./header";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <ThemedLayoutV2
        Header={Header}
        Title={(titleProps) => {
          return (
            <ThemedTitleV2
              {...titleProps}
              text=""
              icon={
                <img
                  src="./assets/images/saudi-exchange.jpg"
                  alt="Saudi Exchange Logo"
                  width={120}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: "10px",
                  }}
                />
              }
            />
          );
        }}
      >
        {children}
      </ThemedLayoutV2>
    </>
  );
};
