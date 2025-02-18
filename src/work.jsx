import React from "react";
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import img1 from './assets/slide1.jpg'
import img2 from './assets/slide2.jpg'
import img3 from './assets/slide3.jpg'
import img4 from './assets/slide4.jpg'
import img5 from './assets/slide5.jpg'
import { Navigation, Pagination, Scrollbar, A11y,} from 'swiper/modules';  
import { EffectFade } from 'swiper/modules';
import Cursor from "./cursor"
import Icon from "./assets/icon.png"
import {Link} from 'react-router-dom'

// import './work.css'


function Work() {
  return (
    <div className="main">
       <div className="ABbackground">
         <Link to="/"> <img src={Icon} className="icon" alt="" /> </Link> 
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y , EffectFade]}
        spaceBetween={50}
        slidesPerView={1.5}
        navigation
        effect="Fade"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <Link to = "/inswork"><img src={img1} className="slider" alt="" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to = "/inswork"> <img src={img2} className="slider" alt="" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to = "/inswork"><img src={img3} className="slider" alt="" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to = "/inswork"> <img src={img4} className="slider" alt="" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to = "/inswork"> <img src={img5} className="slider" alt="" /></Link>
        </SwiperSlide>
      </Swiper>
      <Cursor />
    </div>
  )
}

export default Work;