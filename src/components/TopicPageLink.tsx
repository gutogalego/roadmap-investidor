import React from "react";
import type { ReactNode } from "react";
import Link from "next/link";

interface TopicPageLinkProps {
  link: string;
  children?: ReactNode;
}

const TopicPageLink = (props: TopicPageLinkProps) => {
  return (
    <Link
      className="flex max-w-xs flex-col flex-nowrap items-center justify-center gap-4 rounded-xl bg-white/10 p-10 text-white hover:bg-white/20"
      href={props.link}
    >
      <h3 className="text-2xl font-bold text-center">{props.children}</h3>
    </Link>
  );
};

export default TopicPageLink;