import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Index() {
    return (
        <>
        <div className="xl:mx-auto xl:container ">
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
            <div className="flex flex-col-reverse lg:flex-row items-center m-20 justify-center">
                {/* <div className="w-full lg:w-1/2 md:py-9 py-6">
                    <img src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/luxe2.png" alt="bag" className="lg:w-full h-full object-cover object-center w-full" />
                </div> */}
                <div className="lg:w-1/2 lg:pl-12 lg:pr-24">
                    <p className="text-xl leading-none font-semibold text-gray-600 pb-2">Coming Soon!</p>
                    <p className="md:text-3xl lg:text-4xl text-3xl font-logo lg:leading-9 text-indigo-600 lg:pb-6 md:pb-4 pb-2">Bargain Bin</p>
                    <p className="text-xl leading-5 font-semibold text-pink md:pb-10 pb-8">Check out our Bargain Bin!</p>
                    <div className="md:block flex items-center justify-center">
                        <button className="lg:w-auto w-full border border-gray-800 hover:text-gray-50 hover:bg-pink focus:outline-none lg:px-10 px-7 lg:py-4 py-3 text-lg font-bold leading-none text-indigo-600 rounded-2xl">Cheap S**t!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div className="2xl:mx-auto 2xl:container flex justify-center">
            <div className="2xl:px-20 px-6 py-12 w-full lg:w-4/5">
                {/* Carousel for Small-Sized Screen */}
                <CarouselProvider className="relative block sm:hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider>
                            <Slide index={0}>
                                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-logo text-pink">Mr. Oizo - Stade 2</h1>
                                        <img src="https://res.cloudinary.com/cosmic-records/image/upload/v1635301245/cosmic%20records/mr_oizo_stade_lg_ziqtjf.jpg" alt="album cover" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-logo text-pink">Mr. Oizo - Stade 2</h1>
                                        <img src="https://res.cloudinary.com/cosmic-records/image/upload/v1635301245/cosmic%20records/mr_oizo_stade_lg_ziqtjf.jpg" alt="album cover" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-logo text-pink">Blue Hawaii - Untogether</h1>
                                        <img src="https://res.cloudinary.com/cosmic-records/image/upload/v1635300996/cosmic%20records/blue_hawaii_bwuzbb.jpg" alt="chairs" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-logo text-pink">Blue Hawaii - Untogether</h1>
                                        <img src="https://res.cloudinary.com/cosmic-records/image/upload/v1635300996/cosmic%20records/blue_hawaii_bwuzbb.jpg" alt="chairs" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-logo text-pink">Dabrye - Instrmntl</h1>
                                        <img src="https://res.cloudinary.com/cosmic-records/image/upload/v1635300996/cosmic%20records/dabrye_instrmntl_b2ee5h.jpg" alt="chair" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-logo text-pink">Dabrye - Instrmntl</h1>
                                        <img src="https://res.cloudinary.com/cosmic-records/image/upload/v1635300996/cosmic%20records/dabrye_instrmntl_b2ee5h.jpg" alt="chair" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for Medium and Large-Sized Screen */}
                <CarouselProvider className="relative hidden sm:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true} currentSlide={1}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider className="carousel__sliderLarge">
                            <Slide className="carousel__inner-slideLarge" index={0}>
                                <div className="gallery-cell w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-logo text-pink ">Mr. Oizo - Stade 2</h1>
                                        <img src="https://res.cloudinary.com/cosmic-records/image/upload/v1635301245/cosmic%20records/mr_oizo_stade_lg_ziqtjf.jpg" alt="sitting area" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-pink">Mr. Oizo - Stade 2</h1>
                                        <img src="https://res.cloudinary.com/cosmic-records/image/upload/v1635301245/cosmic%20records/mr_oizo_stade_lg_ziqtjf.jpg" alt="sitting area" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={1}>
                                <div className="gallery-cell w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-logo text-pink">Blue Hawaii - Untogether</h1>
                                        <img src="https://res.cloudinary.com/cosmic-records/image/upload/v1635300996/cosmic%20records/blue_hawaii_bwuzbb.jpg" alt="chairs" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-logo text-pink">Blue Hawaii - Untogether</h1>
                                        <img src="https://res.cloudinary.com/cosmic-records/image/upload/v1635300996/cosmic%20records/blue_hawaii_bwuzbb.jpg" alt="chairs" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={2}>
                                <div className="gallery-cell w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-logo text-pink">Dabrye - Instrmntl</h1>
                                        <img src="https://res.cloudinary.com/cosmic-records/image/upload/v1635300996/cosmic%20records/dabrye_instrmntl_b2ee5h.jpg" alt="chair" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-logo text-pink">Dabrye - Instrmntl</h1>
                                        <img src="https://res.cloudinary.com/cosmic-records/image/upload/v1635300996/cosmic%20records/dabrye_instrmntl_b2ee5h.jpg" alt="chair" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>

            <style>
                {`
                    .gallery-cell {
                        height: 386px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
            </style>
        </div>
        </>
    );
}
