import { Row } from "@shared/index";
import React, { Fragment } from "react";
import { motion } from "framer-motion";

export default function GalleryTitle({
  inView,
  description,
}: Readonly<TGalleryTitle>) {
  return (
    <Row className="w-full">
      <motion.h2
        className="typography-site-headline mb-5"
        initial={{ opacity: 0, transform: "translateY(30px)" }}
        animate={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0px)" : "translateY(30px)",
        }}
        transition={{ duration: 0.7 }}
      >
        {description.split("\n").map((str) => (
          <Fragment key={str}>
            {str}
            <br/>
          </Fragment>
        ))}
      </motion.h2>
    </Row>
  );
}
