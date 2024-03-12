"use client";

import useGame from "@features/game/hooks/useGame";
import { Column, Label, Row } from "@shared/index";
import Image from "next/image";
import React, { useRef } from "react";
import WidgetGameSwiperTitle from "./title";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

const SkeletonWidgetGameSwiper = () => {
  return (
    <Row as="article" className="w-full h-[500px]">
      <Row className="w-full h-full skeleton_loading" />
    </Row>
  );
};

/**
 * 게임 이미지 뒤에 크기가 더 큰 이미지를 Blur 처리한 배경 컴포넌트
 * @param {game:TGame} game 데이터 객체
 * @returns Blur 처리한 배경 컴포넌트
 */
const BlurImage = ({ game }: { game: TGame }) => {
  return (
    <Label
      as="span"
      key={`${game.message}-${game.title}`}
      className="banner-blur"
    >
      <Image
        alt={game?.message}
        src={game?.img}
        quality={1}
        className="banner-blur"
        loading="lazy"
        width={1900}
        height={1000}
      />
    </Label>
  );
};

export default function WidgetGameSwiper() {
  const { data: games, isPending, error } = useGame();
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    progressCircle.current?.style.setProperty("--progress", `${1 - progress}`);
    progressContent.current!.textContent = `${Math.ceil(time / 1000)}`;
  };

  if (isPending) return <SkeletonWidgetGameSwiper />;

  return (
    <Row as="article" className="w-full h-[500px]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 1000 * 30,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="rounded-lg"
      >
        {games?.map((game) => {
          return (
            <Column key={`${game.message}-${game.title}`}>
              <SwiperSlide key={`${game.message}-${game.title}`}>
                <Column>
                  <BlurImage
                    key={`${game.message}-${game.title}`}
                    game={game}
                  />
                  <Image
                    alt={game?.message}
                    src={game?.img}
                    quality={100}
                    className="object-cover swiper-img"
                    width={1900}
                    height={1000}
                    priority
                  />
                  <WidgetGameSwiperTitle title={game.title} />
                </Column>
                <Label>{game?.message}</Label>
              </SwiperSlide>
            </Column>
          );
        })}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </Row>
  );
}
