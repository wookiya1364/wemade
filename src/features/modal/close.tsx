"use client";

import { Button } from "@shared/index";
import useModal from "@shared/state/modal";
import React, { useEffect } from "react";

export default function ModalClose() {
  const { setOpenToggle } = useModal();
  useEffect(() => {
    const handleKeyDown = (e: { key: string; }) => {
      if(e.key === "Escape") {
        setOpenToggle(false);
      }
    };

    document.body.addEventListener("keydown", handleKeyDown);
  
    return () => document.body.removeEventListener("keydown", handleKeyDown);

  }, [setOpenToggle])
  
  return (
    <Button
      className="mb-4"
      onClick={() => {
        setOpenToggle(false);
      }}
    >
      <span className="modalClose justify-center">
        <svg
          className="reverse-fill-color w-[20px] h-[20px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z"></path>
        </svg>
      </span>
    </Button>
  );
}
