"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useModal from "@shared/state/modal";

export const PlayLeftButton = ({
  inPlay,
  srcSet,
}: {
  inPlay: boolean;
  srcSet: string[];
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
        x: inPlay ? "-55%" : 0,
        width: "168px",
      }}
      transition={{ duration: 0.3, delay: 0.8 }}
    >
      {srcSet.map((src, idx) => {
        return (
          <Image
            onClick={(e) => {
              const m3u8 = src.replace("assets", "videos").replace("png", "m3u8").replace("jpeg", "m3u8");
              setM3u8(m3u8);
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
