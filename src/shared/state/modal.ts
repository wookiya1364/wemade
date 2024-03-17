import { create } from "zustand";

type TModal = {
  open: boolean;
  setOpenToggle: (toggle: boolean) => void;
  src: string;
  setSrc: (src: string) => void;
  m3u8: string;
  setM3u8: (m3u8: string) => void;
  description: string;
  setDescription: (description: string) => void;
};

const useModal = create<TModal>((set) => ({
  open: false,
  setOpenToggle: (data) => set(() => ({ open: data })),
  src: "",
  setSrc: (data) => set(() => ({ src: data })),
  m3u8: "",
  setM3u8: (data) => set(() => ({ m3u8: data })),
  description: "",
  setDescription: (data) => set(() => ({ description: data })),
}));

export default useModal;
