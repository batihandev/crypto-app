import Image from "next/image";
import Link from "next/link";
import React from "react";
import icon from "../images/cryptocurrency.png";
type Props = {};

const NavLogo = (props: Props) => {
  return (
    <>
      <Link className="logo-link" href="/">
        <Image src={icon.src} alt="icon" width={40} height={40} />
        Cryptoverse
      </Link>
    </>
  );
};

export default NavLogo;
