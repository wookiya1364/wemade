import NightCrow from "@widgets/detail/nightcrow";
import Highlight from "@widgets/highlight/page";
import React, { Fragment } from "react";
import Modal from "@features/modal/page";
import EveryFarm from "@widgets/detail/everyfarm";
import Icarus from "@widgets/detail/icarus";
import { Gap } from "@shared/atom/gap";

export default function Main() {

  return (
    <Fragment>
      <Gap size="h-[30vh]"/>
      <Highlight />
      <Gap size="h-[30vh]"/>
      <NightCrow />
      <Gap size="h-[30vh]"/>
      <EveryFarm/>
      <Gap size="h-[30vh]"/>
      <Icarus/>
      <Gap size="h-[30vh]"/>
      <Modal/>
    </Fragment>
  );
}
