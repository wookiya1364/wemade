"use client";

import { Row } from "@shared/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <Row as="header" className="header show">
      <Row>
        <Link href={"/pages-flat/main"} className="font-bold text-[2rem]" aria-label="menu">
          <Image
            alt=""
            src="https://cache.wemixplay.com/WEMIXPLAY-RENEWAL/assets/images/header/logo-wemixplay.svg"
            style={{
              width: "auto"
            }}
            width={150}
            height={50}
            priority
          ></Image>
        </Link>
      </Row>
      <Row className="my-0 mr-0 ml-auto justify-around ">
      </Row>
    </Row>
  );
}
