"use client";
import Link from "next/link";
import React from "react";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink: React.FC<Props> = ({ path, text }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${style.link} ${pathname === path && style["active-link"]}`}
      href={path}
    >
      {text}
    </Link>
  );
};
