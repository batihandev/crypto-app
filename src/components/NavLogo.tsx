import { MenuOutlined } from "@ant-design/icons";
import { Avatar, Typography, Button } from "antd";
import Link from "next/link";
import React from "react";
import icon from "../images/cryptocurrency.png";
type Props = {};

const NavLogo = (props: Props) => {
  return (
    <>
      <Avatar src={icon.src} size="large" />
      <Typography.Title level={2} className="logo">
        <Link href="/">Cryptoverse</Link>
      </Typography.Title>
    </>
  );
};

export default NavLogo;
