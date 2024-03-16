"use client";

import { useInView } from "react-intersection-observer";
import { Column, Label } from "@shared/index";
import Image from "next/image";
import React, { Fragment, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";

import useGalleryStore from "@shared/state/gallery";
import VideoGalleryTitle from "./title";
import VideoGalleryPlay from "@features/video-play/page";

interface IGallery extends React.ObjectHTMLAttributes<HTMLImageElement> {
  header: string;
  description: string[];
  inPlay?: boolean;
  playRef?: React.ForwardedRef<HTMLDivElement>;
  label: string;
  m3u8Set: string[];
  srcSet: string[];
}

const VideoGallery = React.forwardRef<HTMLImageElement, IGallery>(
  ({ className, children, header, description, label, m3u8Set, srcSet }, ref) => {
    const [obView, inView] = useInView({ triggerOnce: false, threshold: 0.2 }); // 화면의 20%가 보일 때 애니메이션이 실행되도록 설정
    const [obPlay, inPlay] = useInView({ triggerOnce: false, threshold: 1 }); // 화면의 100%가 보일 때 애니메이션이 실행되도록 설정
    const [timer, setTimer] = useState(3);
    const progressRef = useRef<SVGSVGElement>(null);
    const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
      progressRef.current?.style.setProperty("--progress", `${1 - progress}`);
      setTimer(Math.ceil(time / 1000 - progress));
    };
    const isList = srcSet.length > 1;
    const { setSwiper } = useGalleryStore();

    return (
      <Fragment>
        <VideoGalleryTitle description={header} inView={inView} />
        <Column className={className}>
          <Column className="relative w-full h-full">
            <Swiper
              onSwiper={(swiper) => setSwiper(swiper)}
              spaceBetween={30}
              effect={"fade"}
              centeredSlides={true}
              autoplay={{
                delay: 1000 * 5,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectFade]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="rounded-lg w-full"
            >
              {srcSet?.map((src: string, idx: number) => {
                return (
                  <SwiperSlide key={src} className="w-full h-full">
                    <Label className="typography-site-highlights-headline typography-site-highlights-headline-top z-10 text-left">
                      {description[idx].split("\n").map((str) => (
                        <Fragment key={`${str}-${idx}`}>
                          {str}
                          <br />
                        </Fragment>
                      ))}
                    </Label>
                    <Image
                      ref={obView}
                      className="rounded-3xl"
                      width={1500}
                      height={1500}
                      style={{
                        width: "100%",
                        height: "100vh",
                      }}
                      aria-label={label}
                      alt={label}
                      src={src}
                      priority
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Column className="absolute h-[60%] top-[20%]" ref={obPlay} />
          </Column>

          {isList ? (
            <VideoGalleryPlay
              m3u8Set={m3u8Set}
              srcSet={srcSet}
              progressRef={progressRef}
              inPlay={inPlay}
              timer={timer}
            />
          ) : null}
        </Column>
      </Fragment>
    );
  }
);
VideoGallery.displayName = "VideoGallery";
export default VideoGallery;
