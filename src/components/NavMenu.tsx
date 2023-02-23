import { HomeOutlined, FundOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Link from "next/link";
import React from "react";

type Props = {};

const NavMenu = (props: Props) => {
  return (
    <Menu theme="dark">
      <Menu.Item icon={<HomeOutlined />}>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item icon={<FundOutlined />}>
        <Link href="/cryptocurrencies">Cryptocurrencies</Link>
      </Menu.Item>
      {/* <Menu.Item icon={<MoneyCollectOutlined />}>
              <Link href={"/exchanges"}>Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
              <Link href={"/news"}>News</Link>
            </Menu.Item> */}
    </Menu>
  );
};

export default NavMenu;
