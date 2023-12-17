"use client";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
interface Props {
  items: {
    name: string;
    link?: string;
  }[];
}
export default function Breadcrumbs(Props: Props) {
  const { items } = Props;
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-x-2 text-sm font-medium text-secondary dark:text-white">
      {items.map((item: any, index: number) => {
        return (
          <div
            className="afterarrow flex h-7 items-center text-primary dark:text-white"
            key={index}
          >
            <Link
              href={`https://generateforfrontend.com` + item.link}
              className={`${
                item.link === pathname
                  ? "inline-block w-36 overflow-hidden text-ellipsis whitespace-nowrap rounded-small bg-green_light px-2 py-1 dark:text-primary sm:w-full"
                  : "whitespace-nowrap"
              } `}
            >
              {item.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
