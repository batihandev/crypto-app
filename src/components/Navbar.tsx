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
import React, { useState, useEffect } from "react";

type Props = {};

export const Navbar = (props: Props) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(1000);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="navbar-fixed">
        <div className="logo-container">
          <Avatar src={icon.src} size="large" />
          <Typography.Title level={2} className="logo">
            <Link href={"/"}>Cryptoverse</Link>
          </Typography.Title>
          <Button
            onClick={() => setActiveMenu(!activeMenu)}
            className="menu-control-container"
          >
            <MenuOutlined />
          </Button>
        </div>
        {activeMenu && (
          <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />}>
              <Link href={"/"}>Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
              <Link href={"/cryptocurrencies"}>Cryptocurrencies</Link>
            </Menu.Item>
            {/* <Menu.Item icon={<MoneyCollectOutlined />}>
              <Link href={"/exchanges"}>Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
              <Link href={"/news"}>News</Link>
            </Menu.Item> */}
          </Menu>
        )}
      </div>
    </div>
  );
};
