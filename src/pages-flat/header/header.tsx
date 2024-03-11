"use client";

import { Row } from "@shared/index";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";

const MenuButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Row
      className={`my-0 mr-0 ml-auto justify-between`}
      onClick={onClick}
    >
      <svg
        className="cursor-pointer field-fill-color"
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
      >
        <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
      </svg>
    </Row>
  );
};

export default function Header() {
  let lastScrollY = 0;
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isVisible = scrollTop < lastScrollY || scrollTop <= 0;
      setIsHeaderVisible(isVisible); // 스크롤이 맨 위에 도달하면 헤더를 보이게 함
      lastScrollY = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Row
      ref={headerRef}
      as="header"
      className={`
      w-full py-[0.6rem] px-6 overflow-auto
      sticky top-0 bottom-0 left-0 right-0 z-[5] bg-[var(--background-color)]
      header show`}
    >
      <Row>
        <Link href={"/"} className="font-bold text-[2rem]" aria-label="menu">
          <Image
            alt=""
            src="https://cache.wemixplay.com/WEMIXPLAY-RENEWAL/assets/images/header/logo-wemixplay.svg"
            width={150}
            height={50}
          ></Image>
        </Link>
      </Row>
      <Row className="my-0 mr-0 ml-auto justify-around ">
        {/* <LinkWrapper links={links} /> */}
      </Row>
      <MenuButton onClick={toggleSidebar} />
    </Row>
  );
}
