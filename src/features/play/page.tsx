import React, { RefObject } from "react";
import { motion } from "framer-motion";
import { PlayButton } from "./button";

type TGalleryPlay = {
  inPlay: boolean;
  progressRef?: RefObject<SVGSVGElement>;
  detailDescription?: string[];
  srcSet: string[];
  width?: string;
};

export default function GalleryPlay({
  inPlay,
  detailDescription,
  srcSet,
  width = "248px",
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
        <PlayButton width={width} detailDescription={detailDescription} srcSet={srcSet} inPlay={inPlay} />
      </motion.div>
    </motion.div>
  );
}
