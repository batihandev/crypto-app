"use client";
import { Navbar } from "@/components";
import { Layout, Space, Typography } from "antd";
import Link from "next/link";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="app">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="main">
            <Layout>
              <div className="routes">{children}</div>
            </Layout>
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
          </div>
        </div>
      </body>
    </html>
  );
}
