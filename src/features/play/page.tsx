import React, { RefObject } from "react";
import { motion } from "framer-motion";
import { PlayLeftButton } from "./play-left";

type TGalleryPlay = {
  inPlay: boolean;
  progressRef?: RefObject<SVGSVGElement>;
  m3u8Set?: string[];
  srcSet: string[];
};

export default function GalleryPlay({
  inPlay,
  m3u8Set,
  srcSet,
}: TGalleryPlay) {
  const circleVariants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div className="sticky h-[10vh] top-0 bottom-0 z-10">
      <motion.div
        className="circle-wrapper"
        variants={circleVariants}
        initial="initial"
        animate="animate"
      >
        <PlayLeftButton width="248px" m3u8Set={m3u8Set} srcSet={srcSet} inPlay={inPlay} />
      </motion.div>
    </motion.div>
  );
}