import React, { RefObject } from "react";
import { motion } from "framer-motion";
import { PlayRightButton } from "./play-right";
import { PlayLeftButton } from "./play-left";
import { Row } from "@shared/index";

type TVideoGalleryPlay = {
  inPlay: boolean;
  progressRef?: RefObject<SVGSVGElement>;
  gallerys: TVideoGallery[];
  timer?: number;
};

export default function VideoGalleryPlay({
  inPlay,
  progressRef,
  gallerys,
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
    <motion.div className="sticky w-full h-[10vh] top-0 bottom-0 z-10 my-0 mx-auto">
      <motion.div
        className="circle-wrapper"
        variants={circleVariants}
        initial="initial"
        animate="animate"
      > 
        <Row className="w-full justify-center h-full">
          <PlayLeftButton gallerys={gallerys} inPlay={inPlay} />
          <PlayRightButton timer={timer} progressRef={progressRef} inPlay={inPlay} />
        </Row>
      </motion.div>
    </motion.div>
  );
}
