"use client";

import Link from "next/link";
import React from "react";

import style from "./navlinks.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ items }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      <Link
        href={items.path}
        className={`${style.container} ${
          pathName === items.path && style.active
        }`}
      >
        {" "}
        {items.title}
      </Link>
    </div>
  );
};

export default NavLink;
