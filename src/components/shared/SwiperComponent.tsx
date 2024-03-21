import { Swiper } from "swiper/react"
import { SwiperProps } from "../../interfaces"

import 'swiper/swiper-bundle.css'

const SwiperComponent: React.FC<SwiperProps> = ({children, options, className}) => {
  return (
    <Swiper {...options} className={className}>
      {children}
    </Swiper>
  )
}

export default SwiperComponent