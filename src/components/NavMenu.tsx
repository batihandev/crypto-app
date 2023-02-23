import { HomeOutlined, FundOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Link from "next/link";
import React from "react";

type Props = {};

const NavMenu = (props: Props) => {
  return (
    <div className="menu">
      <Link className="menu-link" href="/">
        <HomeOutlined /> Home
      </Link>
      <Link className="menu-link" href="/cryptocurrencies">
        <FundOutlined /> Cryptocurrencies
      </Link>
      {/* <Menu.Item icon={<MoneyCollectOutlined />}>
              <Link href={"/exchanges"}>Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
              <Link href={"/news"}>News</Link>
            </Menu.Item> */}
    </div>
  );
};

export default NavMenu;
