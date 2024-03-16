"use client";

import { useInView } from "react-intersection-observer";
import { Column, Label, Row } from "@shared/index";
import Image from "next/image";
import React, { Fragment } from "react";
import GalleryTitle from "./title";
import GalleryPlay from "@features/play/page";
import { motion } from "framer-motion";

interface IGallery extends React.ObjectHTMLAttributes<HTMLImageElement> {
  header: string;
  description: string[];
  detailDescription: string[];
  inPlay?: boolean;
  playRef?: React.ForwardedRef<HTMLDivElement>;
  label: string;
  srcSet: string[];
}

const Gallery = React.forwardRef<HTMLImageElement, IGallery>(
  (
    {
      className,
      children,
      header,
      description,
      detailDescription,
      label,
      srcSet,
    },
    ref
  ) => {
    const [obView, inView, viewEntry] = useInView({
      triggerOnce: false,
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    });
    const [obPlay, inPlay, playEntry] = useInView({
      triggerOnce: false,
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    });

    let cleanView = false;

    if (playEntry?.intersectionRatio) {
      cleanView = playEntry.intersectionRatio === 1;
    }

    let gridClass = "two-grid";
    if(srcSet.length == 3) {
      gridClass = "three-grid";
    }
    else if(srcSet.length == 4) {
      gridClass = "four-grid";
    }

    return (
      <Fragment>
        <GalleryTitle description={header} inView={inView} />
        <Column className={className}>
          <Column className="relative w-full h-full">
            <Label className="typography-site-highlights-headline typography-site-highlights-headline-top z-10 text-left">
              {description[0].split("\n").map((str,idx) => (
                <Fragment key={`${str}-${idx}`}>
                  {str}
                  <br />
                </Fragment>
              ))}
            </Label>

            <Column className={gridClass}>
              {srcSet.map((src, idx) => {
                return idx == 0 ? (
                  <Image
                    key={`${src}-${idx}`}
                    ref={obView}
                    className="rounded-3xl grid-item"
                    width={1920}
                    height={800}
                    style={{
                      width: "100%",
                      height: "40vh",
                    }}
                    aria-label={label}
                    alt={label}
                    src={src}
                    priority
                  />
                ) : (
                  <Image
                  key={`${src}-${idx}`}
                    ref={obPlay}
                    className="rounded-3xl grid-item"
                    width={1920}
                    height={800}
                    style={{
                      width: "100%",
                      height: "40vh",
                    }}
                    aria-label={label}
                    alt={label}
                    src={src}
                    priority
                  />
                );
              })}
            </Column>

            <Row className="w-full px-8">
              {detailDescription.map((str) => (
                <Row key={str} className="w-full  whitespace-pre-wrap">
                  <motion.p
                    className="typography-site-highlights-headline z-10 text-left p-8"
                    initial={{
                      opacity: 0,
                      y: "-15%",
                    }}
                    animate={{
                      opacity: cleanView ? 1 : 0,
                      y: cleanView ? 0 : "-15%",
                    }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    {str}
                  </motion.p>
                </Row>
              ))}
            </Row>
          </Column>

          <GalleryPlay srcSet={srcSet} inPlay={inView} />
        </Column>
      </Fragment>
    );
  }
);
Gallery.displayName = "Gallery";
export default Gallery;
