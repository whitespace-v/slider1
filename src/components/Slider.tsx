import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import letter from '../assets/letter.svg'
import {carData} from "../data";
import classes from '../styles/Slider.module.scss'
import {Transition} from "react-transition-group";
import {BsArrowRight} from "react-icons/bs";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import {AnimatePresence, motion} from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import {itemAnimation} from "../animations";
import useWindowSize from "../hooks/useWindowSize";
const Slider = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [current, setCurrent] = useState<number>(0)
    const [swiperInstance, setSwiperInstance] = useState<any>()

    const middle = useIntersectionObserver(containerRef,
        {
            rootMargin: '-50%',
            freezeOnceVisible: true
        })
    const middleVisible = !!middle?.isIntersecting
    const {width} = useWindowSize()

    return (
        <div className={classes['Slider']}>
            <AnimatePresence initial={false}>
                <div className={classes['Slider__title']}>
                    {middleVisible &&
                        <motion.div className={classes['Slider__title-text']}
                                    viewport={{once: true}}
                                    initial={{x: -100, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{duration: 1}}
                        >
                            Best offers

                        </motion.div>
                    }
                    {middleVisible &&
                        <motion.div className={classes['Slider__title-subtext']}
                                    viewport={{once: true}}
                                    initial={{x: -100, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{duration: 1, delay: 0.7}}
                        >
                            Choose your car with US
                        </motion.div>
                    }
                </div>
            </AnimatePresence>
            <AnimatePresence>
                <motion.div
                    ref={containerRef}
                    viewport={{once: true}}
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{duration: 1}}
                >
                    <div className={classes['Slider__plate']}>
                        <div className={classes['Slider__plate-left']}
                             style={{backgroundImage: `url(${letter})`}}
                        >
                            <div className={classes['Slider__plate-left-title']}>
                                <div className={classes['Slider__plate-left-title-name']}>
                                    <b>{carData[current].name}</b>
                                </div>
                                <div className={classes['Slider__plate-left-title-price']}>
                                    от <b>{carData[current].price}</b>
                                </div>
                            </div>
                            <div className={classes['Slider__plate-left-button']}>
                                Перейти в каталог <BsArrowRight/>
                            </div>
                        </div>
                        <div className={classes['Slider__plate-right']}>
                            {width < 600 &&
                                <div className={classes['Slider__plate-more']}>
                                    Еще +
                                </div>
                            }
                            {width > 600 &&
                                <motion.div className={classes['Slider__plate-control']}
                                            initial={'hidden'} whileInView={'visible'} custom={1} variants={itemAnimation}
                                >
                                    <div className={classes['Slider__plate-control-prev']}
                                         onClick={() => swiperInstance.slidePrev()}
                                    >
                                        <SlArrowLeft/>
                                    </div>
                                    <div className={classes['Slider__plate-control-next']}
                                         onClick={() => swiperInstance.slideNext()}
                                    >
                                        <SlArrowRight/>
                                    </div>
                                </motion.div>
                            }
                        </div>

                    </div>
                    <div className={classes['Slider-container']}>
                        <Swiper
                            onRealIndexChange={(element) => setCurrent(element.activeIndex)}
                            centeredSlides={true}
                            initialSlide={1}
                            onSwiper={(swiper) => setSwiperInstance(swiper)}
                            modules={[Navigation]}
                            //width of the container in css must be adapted to project's settings!
                            // then breakpoints will be flexible
                            breakpoints={{
                                300: {
                                    slidesPerView: 1
                                },
                                600:  {
                                    slidesPerView: 3,
                                    spaceBetween: 100
                                },
                                800: {
                                    slidesPerView: 3,
                                    spaceBetween: 80
                                }
                            }}
                        >
                            {carData.map((i,idx) =>
                                <SwiperSlide className={classes['Slider__item']}>
                                    <div className={classes['Slider__item-content']}>
                                        <Transition in={idx===current} timeout={500}>
                                            { state =>
                                                <div className={classes['Slider__item-content-car'] + ' ' + classes[state]}
                                                     style={{backgroundImage: `url(${i.image})`}}
                                                />
                                            }
                                        </Transition>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </motion.div>
            </AnimatePresence>


        </div>
    );
};

export default Slider;