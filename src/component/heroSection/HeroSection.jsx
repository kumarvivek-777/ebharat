import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function HeroSection() {
  const images = [
    "https://im.uniqlo.com/global-cms/spa/res6d71e8bff04f09b2042bda93dfe27536fr.jpg",
    "https://im.uniqlo.com/global-cms/spa/res6357830420e721c9119e9bd39a3d2d68fr.jpg",
    "https://im.uniqlo.com/global-cms/spa/res9b9191bc74125667866734606d9d0a19fr.jpg",
    "https://im.uniqlo.com/global-cms/spa/resc04a51be668fcb5acee9c1a86a5c8f85fr.jpg",
    "https://im.uniqlo.com/global-cms/spa/rescdecf882d81b642688c011b006633d7cfr.jpg",
    
  ];

  return (
    <div style={{ width: '100%', height: 'auto' }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`slide-${index}`} style={{ width: '100%', height: '600px', objectFit: '' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSection;
