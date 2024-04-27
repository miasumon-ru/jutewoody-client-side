
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// imported images

import juteEarings from '../../assets/jute_earrings.jpeg'
import juteBag from '../../assets/jute_bags.jpeg'
import juteHanging from '../../assets/jute_hangings.jpeg'
// import woodDesk from '../../assets/wood_desk.jpg'
import woodNecklace from '../../assets/wood_necklace.jpeg'
import woodSpoon from '../../assets/wood_spoon.jpeg'




const Slider = () => {
    return (


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
            <SwiperSlide className=''>

                <div>
                    <img src={juteEarings} alt="" />
                </div>

            </SwiperSlide>

            <SwiperSlide>
                <div>
                    <img src={juteHanging} alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div>
                    <img src={juteBag} alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div>
                    <img src={woodNecklace} alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div>
                    <img src={woodSpoon} alt="" />
                </div>
            </SwiperSlide>

            {/* <SwiperSlide>
                <div>
                    <img src={woodDesk} alt="" />
                </div>
            </SwiperSlide> */}

            {/* <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>



    );
};

export default Slider;