"use client";

import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import useModal from "@shared/state/modal";
import { Column, Row } from "@shared/index";
import ModalClose from "./close";
import { VideoComponent } from "@shared/atom/video";
import Image from "next/image";

const Picture = ({ src = "/assets/phone.png" }: { src?: string }) => {
  return (
    <Column className="w-full h-full">
      <Column className="h-full">
        <Column className="w-full h-full relative">
          <Image
            className="relative rounded-3xl"
            alt=""
            src={src ? src : "/assets/phone.png"}
            width={1080}
            height={500}
            style={{
              width: "100%",
              height: "60%",
            }}
          />
        </Column>
      </Column>
    </Column>
  );
};
const Modal = () => {
  const { open, src, m3u8 } = useModal();
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const hls = new Hls();
    const body = document.querySelector("body");

    if (Hls.isSupported()) {
      if (videoRef.current) {
        hls.loadSource(m3u8);
        hls.attachMedia(videoRef.current!);
      }
    }

    if (open) {
      // videoRef.current?.play();
      body?.classList.add("no-scroll");
    } else {
      videoRef.current?.pause();
      body?.classList.remove("no-scroll");
    }

    return () => {
      body?.classList.remove("no-scroll");
    };
  }, [m3u8, open]);
  
  return (
    <Column
      className={`${
        open ? "modalBackdrop" : "modalBackdropOut"
      } fixed overflow-auto z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 backdrop-blur w-full`}
    >
      <Column
        className="modalContent w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Row className="w-full justify-end">
          <ModalClose />
        </Row>
        {m3u8 !== "" ? (
          <VideoComponent poster={src} ref={videoRef} />
        ) : (
          <Picture src={src} />
        )}
      </Column>
    </Column>
  );
};

export default Modal;
