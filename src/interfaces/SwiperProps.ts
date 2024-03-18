import { ReactNode } from "react";
import { SwiperOptions } from "swiper/types";

export interface SwiperProps {
  children: ReactNode;
  options?: SwiperOptions;
  className?: string;
}