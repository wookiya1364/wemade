import React, { RefObject } from "react";
import { motion } from "framer-motion";
import { Label, Row } from "@shared/index";

export const PlayRightButton = ({
  inPlay,
  progressRef,
  timer,
}: {
  inPlay: boolean;
  progressRef?: RefObject<SVGSVGElement>;
  timer?: number;
}) => {
  return (
    <motion.div
      className="play-button-background right-circle"
      initial={{ opacity: 0, x: 0 }}
      animate={{
        opacity: inPlay ? 1 : 0,
        x: inPlay ? "80px" : 0,
      }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <Row className="autoplay-progress" slot="container-end">
        <Label>{timer}</Label>
        <svg viewBox="0 0 48 48" ref={progressRef}>
          <circle cx="24" cy="24" r="20" />
        </svg>
      </Row>
    </motion.div>
  );
};
