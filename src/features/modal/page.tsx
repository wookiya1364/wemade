"use client";

import React, { Fragment, useEffect, useRef } from "react";
import Hls from "hls.js";
import useModal from "@shared/state/modal";
import { Column, Row } from "@shared/index";
import ModalClose from "./close";
import { VideoComponent } from "@shared/atom/video";
import Image from "next/image";
import { MultilineLabel } from "@shared/atom/multiline-label";

const Picture = ({
  src = "/assets/phone.png",
  description,
}: {
  src?: string;
  description?: string;
}) => {
  return (
    <Column className="w-full h-screen">
      <Column className="h-full">
        <Column className="w-full h-full relative">
          <Image
            className="relative rounded-3xl mb-4"
            alt=""
            src={src ? src : "/assets/phone.png"}
            width={1080}
            height={500}
            style={{}}
            objectFit="cover"
          />
          <Column className="w-full h-full items-start px-12">
            <MultilineLabel description={description}></MultilineLabel>
          </Column>
        </Column>
      </Column>
    </Column>
  );
};

const Modal = () => {
  const { open, src, m3u8, description } = useModal();
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
    <Fragment>
      {src ? (
        <Column
          className={`${
            open ? "modalBackdrop" : "modalBackdropOut"
          } fixed overflow-auto z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 backdrop-blur w-full`}
        >
          <Column className="modalContent w-full">
            <Row className="w-full justify-end">
              <ModalClose />
            </Row>
            {m3u8 !== "" ? (
              <VideoComponent poster={src} ref={videoRef} />
            ) : (
              <Picture src={src} description={description} />
            )}
          </Column>
        </Column>
      ) : null}
    </Fragment>
  );
};

export default Modal;
