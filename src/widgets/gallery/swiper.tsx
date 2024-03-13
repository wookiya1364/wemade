import { Label, Row } from "@shared/index";
import React from "react";

export default function Swiper() {
  return (
    <Label as="span" className="icons" style={{ opacity: 1 }}>
      <Row className="absolute">
        <svg
          className="svg-icon play-icon reverse-fill-color h-[56px] absolute"
          viewBox="0 0 56 56"
        >
          <path d="M20.8,36V20c0-1.6,1-2.5,2.3-2.5c0.7,0,1.1,0.1,1.7,0.5l13.4,7.7c1.2,0.7,1.8,1.2,1.8,2.3 c0,1.1-0.6,1.6-1.8,2.3L24.8,38c-0.6,0.4-1,0.5-1.7,0.5C21.8,38.5,20.8,37.6,20.8,36"></path>
        </svg>
        <svg
          className="svg-icon pause-icon reverse-fill-color h-[56px] absolute"
          viewBox="0 0 56 56"
        >
          <path d="M23.9,38.5h-2.3c-1.3,0-2.3-1-2.3-2.2V19.7c0-1.3,1.1-2.3,2.3-2.2h2.3c1.3,0,2.3,1,2.3,2.2v16.5 C26.2,37.5,25.2,38.5,23.9,38.5 M34.4,38.5c1.3,0,2.3-1,2.3-2.2V19.7c0-1.3-1.1-2.3-2.3-2.2h-2.3c-1.3,0-2.3,1-2.3,2.2v16.5 c0,1.3,1.1,2.3,2.3,2.2H34.4z"></path>
        </svg>
        <svg
          className="svg-icon replay-icon reverse-fill-color h-[56px] absolute"
          viewBox="0 0 56 56"
        >
          <path d="M37.3,26.7c-1,0.1-1.8,1-1.8,2c0,4.1-3.4,7.4-7.5,7.4c-4.1,0-7.4-3.4-7.4-7.5c0-4.1,3.3-7.4,7.5-7.4l0.1,0l0.2,0l0.5,0 l-2.2,2.2c-0.8,0.8-0.8,2.1,0,2.9c0.7,0.7,1.9,0.8,2.7,0.2l0.2-0.2l5.3-5.3c0.7-0.7,0.8-1.9,0.2-2.7l-0.2-0.2l-5.3-5.3 c-0.8-0.8-2.1-0.8-2.8,0c0,0,0,0,0,0c-0.7,0.7-0.8,1.9-0.1,2.7l0.1,0.2l1.4,1.4l-0.5,0c-6.4,0.2-11.3,5.6-11.1,11.9 S22,40.5,28.4,40.2c6.2-0.2,11.1-5.3,11.1-11.5c0-1-0.8-1.9-1.8-2l-0.2,0L37.3,26.7z"></path>
        </svg>
      </Row>
    </Label>
  );
}
