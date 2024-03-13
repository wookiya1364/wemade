import Detail from "@widgets/detail/page";
import WidgetGameSwiper from "@widgets/game/swiper/page";
import Highlight from "@widgets/highlight/page";
import React, { Fragment } from "react";

export default function Main() {
  return (
    <Fragment>
      {/* <WidgetGameSwiper></WidgetGameSwiper> */}
      <Highlight/>
      <Detail/>
    </Fragment>
  );
}
