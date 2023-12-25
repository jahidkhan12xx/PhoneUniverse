


import { Swiper , SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube, EffectCards, EffectCreative } from 'swiper/modules';

import "swiper/swiper-bundle.css"

// import 'swiper/swiper-bundle'


const Banner = () => {
    return (
        <div className=' pt-16'>
            <Swiper
             modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay,EffectCube,EffectCards, EffectCreative]}
             effect={"cube"}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide><div className=" h-[90vh] bg-cover" style={{ backgroundImage: `url(https://i.ibb.co/S3XH2Ht/Apple-Event-2023-i-Phone-15-availability.jpg)` }}>
      {/* Overlay with background color */}
      
    </div></SwiperSlide>
    <SwiperSlide><div className=" h-[90vh] bg-cover" style={{ backgroundImage: `url(https://i.ibb.co/pZd06WP/A70-Newsroom.jpg)` }}>
      {/* Overlay with background color */}
      
    </div></SwiperSlide>
    <SwiperSlide><div className=" h-[90vh] bg-cover" style={{ backgroundImage: `url(https://i.ibb.co/M1Zj2qh/MOTOROLA-EDGE-40-PRO.png)` }}>
      {/* Overlay with background color */}
     
    </div></SwiperSlide>
    <SwiperSlide><div className=" h-[90vh] bg-cover" style={{ backgroundImage: `url(https://i.ibb.co/1XswyqL/maxresdefault.jpg)` }}>
      {/* Overlay with background color */}
     
    </div></SwiperSlide>
        ...
      </Swiper>
        </div>
    );
};

export default Banner;