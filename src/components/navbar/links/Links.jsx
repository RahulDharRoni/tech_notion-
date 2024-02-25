import Link from "next/link";
import React from "react";

import style from "./links.module.css";
import NavLink from "./navLink/NavLink";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Shop",
    path: "/shop",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
  },
];

const Links = () => {
  const session = true;
  const isAdmin = true;
  return (
    <div className={style.links}>
      {links.map((link) => (
        <NavLink key={link.title} items={link} />
      ))}
      {session ? (
        <>
          {isAdmin && (
            <NavLink
              items={{
                title: "Admin",
                path: "/admin",
              }}
            />
          )}
          <form>
            <button className={style.logout}>Logout</button>
          </form>
        </>
      ) : (
        <>
          <NavLink
            items={{
              title: "Login",
              path: "/login",
            }}
          />
        </>
      )}
    </div>
  );
};

export default Links;
