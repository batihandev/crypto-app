"use client";
import { Button, Menu, Typography, Avatar } from "antd";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  FundOutlined,
  BulbOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";
import Link from "next/link";
import React from "react";

type Props = {};

export const Navbar = (props: Props) => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon.src} size="large" />
        <Typography.Title level={2} className="logo">
          <Link href={"/"}>Cryptoverse</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container"></Button> */}
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link href={"/"}>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link href={"/cryptocurrencies"}>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link href={"/exchanges"}>Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link href={"/news"}>News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
