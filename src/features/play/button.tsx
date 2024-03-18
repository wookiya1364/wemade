"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useModal from "@shared/state/modal";
import { Row } from "@shared/index";

export const PlayButton = ({
  inPlay,
  gallerys,
  width = "168px",
}: {
  inPlay: boolean;
  gallerys: TGallery[];
  width?: string;
}) => {
  
  const { setOpenToggle, setSrc, setM3u8, setDescription } = useModal();
  
  if(gallerys === undefined) return <></>;

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
      {gallerys.map((gallery, idx) => {
        return (
          <Row key={`${gallery.src}-${idx}`} className="img-round-circle">
            <Image
              onClick={(e) => {
                if (gallery.description) {
                  setDescription(
                    gallery.description.toString().replaceAll("\n,", "\n")
                  );
                }
                setM3u8("");
                setSrc(gallery.src);
                setOpenToggle(true);
              }}
              aria-colindex={idx}
              className="rounded-3xl cursor-pointer h-full"
              aria-label={""}
              alt={""}
              src={gallery.src}
              width={35}
              height={35}
              priority
            />
          </Row>
        );
      })}
    </motion.div>
  );
};
