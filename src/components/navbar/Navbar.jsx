import React from "react";
import Links from "./links/Links";
import Link from "next/link";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={` ${style.container}`}>
      <Link href={"/"} className={style.logo}>
        Logo
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
