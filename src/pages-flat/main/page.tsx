import Detail from "@widgets/detail/page";
import Highlight from "@widgets/highlight/page";
import React, { Fragment } from "react";
import { Gap } from "@shared/atom/gap";
import VideoModal from "@features/video-modal/page";

export default function Main() {

  return (
    <Fragment>
      <Highlight />
      <Detail />
      <VideoModal/>
    </Fragment>
  );
}
