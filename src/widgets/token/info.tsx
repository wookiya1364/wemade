import React from "react";
import { Column, Label, Row } from "@shared/index";
import useTokenInfo from "@features/token-info/hooks/useTokenInfo";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

export default function TokenInfo() {
  const { data, error, isPending } = useTokenInfo();
  const [obPlay, inPlay] = useInView({ triggerOnce: false, threshold: 0.2 });
  const detailDescription = `재미있는 게임을 즐기면\nP&E(Play and Earn)\n생태계에 빠져들거에요.`;

  return (
    <Column>
      <Row className="w-full px-8">
        <Column className="w-full  whitespace-pre-wrap">
          {detailDescription.split("\n").map((str) => {
            return (
              <motion.p
                key={str}
                className={`typography-site-highlights-headline z-10 text-left p-3 max-sm:!text-[18px]`}
                initial={{
                  opacity: 0,
                  y: "-15%",
                }}
                animate={{
                  opacity: inPlay ? 1 : 0,
                  y: inPlay ? 0 : "-15%",
                }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {str}
              </motion.p>
            );
          })}
          <br />
        </Column>
      </Row>
      <Column className="w-full h-full max-w-[670px]" ref={obPlay}>
        {data?.map((token) => {
          return (
            <Row
              className="w-[200px] border rounded-2xl justify-around px-[15px] py-[3px]"
              key={token.name}
            >
              <Image alt={token.name} src={token.src} width={30} height={30} />
                <Row
                  className="w-full justify-between ml-[5px]"
                  key={token.name}
                >
              <Link target="_blank" href={token.href} className="w-full flex justify-between text-amber-700">
                  <Label>{token.name}</Label>
                  <Label>{token.price}</Label>
              </Link>
                </Row>
            </Row>
          );
        })}
      </Column>
    </Column>
  );
}
