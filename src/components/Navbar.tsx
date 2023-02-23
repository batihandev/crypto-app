"use client";
import { Button, Typography, Avatar } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import NavMenu from "./NavMenu";
import NavLogo from "./NavLogo";

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
          <NavLogo />
          <Button
            onClick={() => setActiveMenu(!activeMenu)}
            className="menu-control-container"
          >
            <MenuOutlined />
          </Button>
        </div>
        {activeMenu && <NavMenu />}
      </div>
    </div>
  );
};
