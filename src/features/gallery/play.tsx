import React, { RefObject } from "react";
import { motion } from "framer-motion";
import { PlayRightButton } from "./play-right";
import { PlayLeftButton } from "./play-left";

type TGalleryPlay = {
  inPlay: boolean;
  progressRef?: RefObject<SVGSVGElement>;
  srcSet: string[];
  timer: number;
};

export default function GalleryPlay({
  inPlay,
  progressRef,
  srcSet,
  timer,
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
        <PlayLeftButton srcSet={srcSet} inPlay={inPlay} />
        <PlayRightButton timer={timer} progressRef={progressRef} inPlay={inPlay} />
      </motion.div>
    </motion.div>
  );
}
