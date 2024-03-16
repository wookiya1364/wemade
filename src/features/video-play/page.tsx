import React, { RefObject } from "react";
import { motion } from "framer-motion";
import { PlayRightButton } from "./play-right";
import { PlayLeftButton } from "./play-left";

type TVideoGalleryPlay = {
  inPlay: boolean;
  progressRef?: RefObject<SVGSVGElement>;
  m3u8Set?: string[];
  srcSet: string[];
  timer?: number;
};

export default function VideoGalleryPlay({
  inPlay,
  progressRef,
  m3u8Set,
  srcSet,
  timer,
}: TVideoGalleryPlay) {
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
        <PlayLeftButton m3u8Set={m3u8Set} srcSet={srcSet} inPlay={inPlay} />
        <PlayRightButton timer={timer} progressRef={progressRef} inPlay={inPlay} />
      </motion.div>
    </motion.div>
  );
}
