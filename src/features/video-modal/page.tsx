"use client";

import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import useModal from "@shared/state/modal";
import { Column, Row } from "@shared/index";
import ModalClose from "./close";

const VideoModal = () => {
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
      } fixed overflow-auto z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 backdrop-blur`}
    >
      <Column className="modalContent" onClick={(e) => e.stopPropagation()}>
        <Row className="w-full justify-end">
          <ModalClose />
        </Row>
        <video
          className="h-full"
          poster={src}
          preload={"auto"}
          crossOrigin={"anonymous"}
          controls={true}
          disablePictureInPicture={true}
          ref={videoRef}
        />
      </Column>
    </Column>
  );
};

export default VideoModal;
