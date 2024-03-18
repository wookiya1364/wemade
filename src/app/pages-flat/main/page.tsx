import NightCrow from "@widgets/detail/nightcrow";
import Highlight from "@widgets/highlight/page";
import React from "react";
import Modal from "@features/modal/page";
import EveryFarm from "@widgets/detail/everyfarm";
import Icarus from "@widgets/detail/icarus";
import { Gap } from "@shared/atom/gap";
import Token from "@widgets/token/page";
import { Column } from "@shared/index";

export default async function Main() {
  return (
    <Column as="article" className="w-full">
      <Gap height="!h-[50px]"/>
      <Highlight />
      <Gap height="!h-[30vh]"/>
      <Gap />
      <NightCrow />
      <Gap />
      <EveryFarm />
      <Gap />
      <Icarus />
      <Gap />
      <Token />
      <Gap height="!h-[50px]"/>
      <Modal />
    </Column>
  );
}
