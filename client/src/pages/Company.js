import { motion } from 'framer-motion'

function Company() {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div>
                <div className="container flex justify-center mx-auto pt-16">
                    <div>
                        <p className="text-blue text-lg text-center font-normal pb-3">BUILDING TEAM</p>
                        <h1 className="xl:text-4xl text-3xl text-center text-pink font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
                    </div>
                </div>
                <div className="w-full bg-cream px-10 pt-10">
                    <div className="container mx-auto">
                        <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded-2xl overflow-hidden shadow-md bg-dark">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://res.cloudinary.com/cosmic-records/image/upload/c_thumb,w_200,g_face/v1635544052/cosmic%20records/IMAG0007_yrlg4t.jpg" alt className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <div className="font-bold text-3xl text-green text-center pb-1">Josh Nolan</div>
                                        <p className="text-blue text-sm text-center">Owner Operator</p>
                                        <p className="text-center text-green text-base pt-3 font-normal">"You don't want to get mixed up with a guy like me. I'm a loner, Dottie. A rebel."</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="https://github.com/Nolan1979" rel="noreferrer" target="_blank" className="mx-5">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded-2xl overflow-hidden shadow-md bg-dark">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://res.cloudinary.com/cosmic-records/image/upload/v1635545909/cosmic%20records/6244A078-38A8-4081-A536-51169BFCE1BF_1_105_c_iydwml.jpg" alt className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <div className="font-bold text-3xl text-green text-center pb-1">Bradley Boyd</div>
                                        <p className="text-blue text-sm text-center">Developer/Designer</p>
                                        <p className="text-center text-green text-base pt-3 font-normal">With emphasis on innovation and technology we pride ourselves in product design and development.</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="https://github.com/bboyd146" rel="noreferrer" target="_blank" className="mx-5">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded-2xl overflow-hidden shadow-md bg-dark">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://res.cloudinary.com/cosmic-records/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1635548562/cosmic%20records/Image_from_iOS_u3udjd.jpg" alt className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <div className="font-bold text-3xl text-green text-center pb-1">Osvaldo Zavaleta</div>
                                        <p className="text-blue text-sm text-center">Developer/Designer</p>
                                        <p className="text-center text-green text-base pt-3 font-normal">Product designer with interests in immersive computing and emerging technologies. Able to take ideas and give them a life.</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="https://github.com/zavaletaosv" rel="noreferrer" target="_blank" className="mx-5">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}




export default Company;