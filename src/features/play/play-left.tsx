"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useModal from "@shared/state/modal";

export const PlayLeftButton = ({
  inPlay,
  m3u8Set,
  srcSet,
  width = "168px",
}: {
  inPlay: boolean;
  m3u8Set?: string[];
  srcSet: string[];
  width?: string;
}) => {
  const { setOpenToggle, setSrc, setM3u8 } = useModal();
  return (
    <motion.div
      className="play-button-background left-circle p-2 justify-center"
      initial={{
        opacity: 0,
        x: 0,
      }}
      animate={{
        opacity: inPlay ? 1 : 0,
        x: inPlay ? "5%" : 0,
        width: width,
      }}
      transition={{ duration: 0.3, delay: 0.8 }}
    >
      {srcSet.map((src, idx) => {
        return (
          <Image
            onClick={(e) => {
              setM3u8("");
              if(m3u8Set) {
                setM3u8(m3u8Set[idx]);
              }
              setSrc(src);
              setOpenToggle(true);
            }}
            key={src}
            aria-colindex={idx}
            className="rounded-3xl cursor-pointer h-full"
            aria-label={""}
            alt={""}
            src={src}
            width={35}
            height={35}
            priority
          />
        );
      })}
    </motion.div>
  );
};
