"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/settings", label: "Settings" },
];

const GlobalNav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className=' p-2  rounded  flex gap-16 bg-slate-800'>
        {links.map(({ href, label }) => (
          <li
            key={label}
            className={`hover:opacity-50 ${
              href === pathname ? "underline" : ""
            }`}
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GlobalNav;
