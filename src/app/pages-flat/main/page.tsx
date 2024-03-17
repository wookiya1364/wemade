import NightCrow from "@widgets/detail/nightcrow";
import Highlight from "@widgets/highlight/page";
import React, { Fragment } from "react";
import Modal from "@features/modal/page";
import EveryFarm from "@widgets/detail/everyfarm";
import Icarus from "@widgets/detail/icarus";
import { Gap } from "@shared/atom/gap";
import Token from "@widgets/token/page";

export default async function Main() {
  return (
    <Fragment>
      <Gap height="!h-[50px]"/>
      <Highlight />
      <Gap height="!h-[30vh]"/>
      <NightCrow />
      <Gap />
      <EveryFarm />
      <Gap />
      <Icarus />
      <Gap />
      <Token />
      <Gap height="!h-[50px]"/>
      <Modal />
    </Fragment>
  );
}
