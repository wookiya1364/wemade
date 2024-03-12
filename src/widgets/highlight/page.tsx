"use client";

import React, { Fragment } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Column, Row } from "@shared/index";

export default function Highlight() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5, // 화면의 50%가 보일 때 애니메이션이 실행되도록 설정
  });
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <Fragment>
      <Column as="section" className="wrapper">
        <motion.div
          className="container"
          style={{
            scale,
          }}
        >
          <motion.div
            className="item"
            style={{
              scaleY: scrollYProgress,
            }}
          />
        </motion.div>
      </Column>

      <Row className="h-[1500px]"></Row>
      <motion.h2
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {"일단 핵심부터"}
      </motion.h2>
    </Fragment>
  );
}
