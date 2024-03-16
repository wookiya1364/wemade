import { create } from "zustand";
import { SwiperClass } from "swiper/react";

type TGalleryStore = {
  swiper: SwiperClass | undefined;
  setSwiper: (swiper: SwiperClass) => any;
  play: boolean;
  setPlayToggle: (toggle: boolean) => void;
};

const useGalleryStore = create<TGalleryStore>((set) => ({
  swiper: undefined,
  setSwiper: (swiper) => set((state) => ({ swiper })),
  play: false,
  setPlayToggle: () => set((state) => ({ play: !state.play })),
}));

export default useGalleryStore;
