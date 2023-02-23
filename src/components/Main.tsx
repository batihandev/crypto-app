"use client";
import store from "@/redux/store";
import { Layout, Space, Typography } from "antd";
import Link from "next/link";
import React from "react";
import { Provider } from "react-redux";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <div className="main">
        <Layout>
          <div className="routes">{children}</div>
        </Layout>
      </div>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Cryptoverse <br />
          All rights reserved
        </Typography.Title>
        <Space className="text-white">
          <Link href={"/"}>Home</Link>
          <Link href={"/exchanges"}>Exchanges</Link>
          <Link href={"/news"}>News</Link>
        </Space>
      </div>
    </Provider>
  );
};

export default Main;
