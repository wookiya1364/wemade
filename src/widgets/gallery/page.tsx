import { Column, Label } from "@shared/index";
import Image from "next/image";
import React from "react";

const Gallery = React.forwardRef<HTMLImageElement, TGallery>(
  (
    { className, children, description, label, srcSet, playRef, ...props },
    ref
  ) => {
    return (
      <Column>
        <Column className="relative">
          <Label className="typography-site-highlights-headline typography-site-highlights-headline-top">
            {description}
          </Label>
          <Image
            ref={ref}
            className="rounded-3xl"
            aria-label={label}
            alt={label}
            src={srcSet}
            width={1500}
            height={1500}
          />
          <Column className="relative h-[20vh] top-[-35vh]" ref={playRef} />
        </Column>
        {children}
      </Column>
    );
  }
);

export default Gallery;
