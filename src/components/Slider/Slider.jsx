
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
import { Link } from 'react-router-dom';




const Slider = () => {
    return (


        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 250000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide className='relative' >

                <div>
                    <img src={juteEarings} alt="" />
                </div>

                <div className='absolute'>
                    <p className=' text-2xl md:text-6xl text-gray-200 font-bold '>
                        Explore the Rustic <br /> Charm of JuteWoody
                    </p>

                    <Link to={"/craftsAll"}>
                        <button className='btn mt-10 '> View All </button>
                    </Link>
                </div>

            </SwiperSlide>

            <SwiperSlide className='relative'>

                <div>
                    <img src={juteBag} alt="" />
                </div>

                <div className='absolute'>
                    <p className=' text-2xl md:text-6xl text-gray-200 font-bold '>
                        Explore the Rustic <br /> Charm of JuteWoody
                    </p>

                    <Link to={"/craftsAll"}>
                        <button className='btn mt-10 '> View All </button>
                    </Link>
                </div>

            </SwiperSlide>

            <SwiperSlide className='relative'>

                <div>
                    <img src={juteHanging} alt="" />
                </div>

                <div className='absolute'>
                    <p className=' text-2xl md:text-6xl text-gray-200 font-bold '>
                        Explore the Rustic <br /> Charm of JuteWoody
                    </p>

                    <Link to={"/craftsAll"}>
                        <button className='btn mt-10 '> View All </button>
                    </Link>
                </div>

            </SwiperSlide>

            <SwiperSlide className='relative'>

                <div>
                    <img src={woodNecklace} alt="" />
                </div>

                <div className='absolute'>
                    <p className=' text-2xl md:text-6xl text-gray-300 font-bold '>
                        Explore the Rustic <br /> Charm of JuteWoody
                    </p>

                    <Link to={"/craftsAll"}>
                        <button className='btn mt-10 '> View All </button>
                    </Link>
                </div>

            </SwiperSlide>

            <SwiperSlide className='relative'>

                <div>
                    <img src={woodSpoon} alt="" />
                </div>

                <div className='absolute'>
                    <p className=' text-2xl md:text-6xl text-gray-200 font-bold '>
                        Explore the Rustic <br /> Charm of JuteWoody
                    </p>

                    <Link to={"/craftsAll"}>
                        <button className='btn mt-10 '> View All </button>
                    </Link>
                </div>

            </SwiperSlide>


        </Swiper>



    );
};

export default Slider;