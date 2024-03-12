import { Column, Label } from "@shared/index";
import React from "react";

export default function WidgetGameSwiperTitle({
  title,
}: Readonly<TGameTitle>) {
  return (
    <Column className="w-full overflow-auto">
      <Label>{title}</Label>
    </Column>
  );
}
