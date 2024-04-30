
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter'

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

import { Slide  } from "react-awesome-reveal";




const Slider = () => {


    return (


        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 30000,
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
                    <img className='rounded-lg' src={juteEarings} alt="" />
                </div>

                <div className='absolute'>


                    <p className=' text-2xl md:text-6xl text-gray-200 font-bold '>

                        

                        <Slide>
                            <p> Explore The JuteWoody </p>
                        </Slide >

                        {''} <br />

                        <span className='text-green-200 font-bold'>

                            <Typewriter
                                words={["Sustainable", "Eco-Friendly", "Organic", "Charming", 'Rustic']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}


                            />

                        </span>
                    </p>

                    <Link to={"/craftsAll"}>
                        <button className='btn mt-10 '> View All </button>
                    </Link>
                </div>

            </SwiperSlide>

            <SwiperSlide className='relative'>

                <div>
                    <img className='rounded-lg' src={juteBag} alt="" />
                </div>

                <div className='absolute'>
                    <p className=' text-2xl md:text-6xl text-gray-200 font-bold '>
                        Explore The JuteWoody {''} <br />

                        <span className='text-green-200 font-bold'>

                            <Typewriter
                                words={["Sustainable", "Eco-Friendly", "Organic", "Charming", 'Rustic']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}


                            />

                        </span>
                    </p>


                    <Link to={"/craftsAll"}>
                        <button className='btn mt-10 '> View All </button>
                    </Link>
                </div>

            </SwiperSlide>

            <SwiperSlide className='relative'>

                <div>
                    <img className='rounded-lg' src={juteHanging} alt="" />
                </div>

                <div className='absolute'>
                    <p className=' text-2xl md:text-6xl text-gray-200 font-bold '>
                        Explore The JuteWoody {''} <br />

                        <span className='text-green-200 font-bold'>

                            <Typewriter
                                words={["Sustainable", "Eco-Friendly", "Organic", "Charming", 'Rustic']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}


                            />

                        </span>
                    </p>


                    <Link to={"/craftsAll"}>
                        <button className='btn mt-10 '> View All </button>
                    </Link>
                </div>

            </SwiperSlide>

            <SwiperSlide className='relative'>

                <div>
                    <img className='rounded-lg' src={woodNecklace} alt="" />
                </div>

                <div className='absolute'>

                    <p className=' text-2xl md:text-6xl text-gray-200 font-bold '>
                        Explore The JuteWoody {''} <br />

                        <span className='text-green-200 font-bold'>

                            <Typewriter
                                words={["Sustainable", "Eco-Friendly", "Organic", "Charming", 'Rustic']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}


                            />

                        </span>
                    </p>


                    <Link to={"/craftsAll"}>
                        <button className='btn mt-10 '> View All </button>
                    </Link>
                </div>

            </SwiperSlide>

            <SwiperSlide className='relative'>

                <div>
                    <img className='rounded-lg' src={woodSpoon} alt="" />
                </div>

                <div className='absolute'>
                    <p className=' text-2xl md:text-6xl text-gray-200 font-bold '>
                        Explore The JuteWoody {''} <br />

                        <span className='text-green-200 font-bold'>

                            <Typewriter
                                words={["Sustainable", "Eco-Friendly", "Organic", "Charming", 'Rustic']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}


                            />

                        </span>
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