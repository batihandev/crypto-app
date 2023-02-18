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
    </div>
  );
};
export default Navbar;
