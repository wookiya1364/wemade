import { cn } from "@shared/cn";
import { Row } from "@shared/index";
import React from "react";
import { motion } from "framer-motion";
import { MultilineLabel } from "@shared/atom/multiline-label";

export default function GalleryTitle({
  inView,
  description,
  className,
}: Readonly<TGalleryTitle>) {

  return (
    <Row className="w-full">
      <motion.h2
        className={cn("typography-site-headline mb-5 !text-[80px] max-sm:!text-[28px]", className)}
        initial={{ opacity: 0, transform: "translateY(30px)" }}
        animate={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0px)" : "translateY(30px)",
        }}
        transition={{ duration: 0.7 }}
      >
        <MultilineLabel description={description} />
      </motion.h2>
    </Row>
  );
}
