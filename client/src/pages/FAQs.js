import React, { useState } from "react";
import { motion } from 'framer-motion'

const Faq1 = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    return (
        <motion.div exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        >
        <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
            <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-purple-900">Frequently Asked Questions</h2>
            <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
                <div className=" ">
                    <p className=" font-normal text-base leading-6 text-purple-900 lg:w-8/12 md:w-9/12 ">Here are few of the most frequently asked questions by our valueable customers</p>
                </div>
            </div>
            <div className=" flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
                <div className=" md:w-5/12 lg:w-4/12 w-full ">
                    <img src="https://res.cloudinary.com/cosmic-records/image/upload/ar_1:1,c_fill,e_art:hokusai,g_auto,h_500,w_500/v1635346851/cosmic%20records/Screen_Shot_2021-10-27_at_10.00.24_AM_ggdvjg.png" alt="Img of question marks" className="w-full md:block hidden rounded-3xl" />
                    <img src="https://res.cloudinary.com/cosmic-records/image/upload/ar_1:1,c_fill,e_art:hokusai,g_auto,h_500,w_500/v1635346851/cosmic%20records/Screen_Shot_2021-10-27_at_10.00.24_AM_ggdvjg.png" alt="Img of question marks" className="w-full md:hidden block rounded-3xl" />
                </div>
                <div className=" md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
                    {/* <!-- Shipping Section --> */}
                    <div>
                        <div className=" flex justify-between items-center cursor-pointer">
                            <h3 className=" font-semibold text-xl leading-5 text-purple-900">Shipping</h3>
                            <button aria-label="too" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-900   " onClick={() => setShow(!show)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={show ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#d4115d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#d4115d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={"font-normal text-base leading-6 text-purple-900 mt-4 w-11/12 " + (show ? "block" : "hidden")}>We are covering every major country worldwide.<br></br> The shipment leaves from US as it is our headquarter.<br></br><br></br>Shipping and Payment Terms<br></br>
Accepted Payment Methods: PayPal, All major credit cards<br></br><br></br>

PAYMENT IS EXPECTED WITHIN FIVE DAYS UNLESS PRIOR ARRANGEMENT IS MADE.<br></br><br></br> POSTAGE RATES: <br></br>Buyer pays shipping.<br></br><br></br> Please note that as of January 17th 2016 postage rates for shipping outside of the USA have increased significantly. <br></br><br></br>We combine shipping for multiple items <br></br><br></br>USA <br></br>Cassettes $3 / $0.50 each additional <br></br>CDs $3 / $0.50 each additional <br></br>7"s $3.50 / $0.50each additional <br></br>LPs $4.50 plus $1 each additional <br></br><br></br>INTERNATIONAL RATES VARY BY WEIGHT <br></br><br></br>AVERAGE WEIGHT (Including packaging) <br></br>Cassette 3 oz <br></br>Compact Disc 4 oz <br></br>7" Record 6 oz <br></br>12" Record 20 oz <br></br><br></br>CANADA <br></br>1 oz up to 8 oz $10 <br></br>9 oz up to 32 oz $16 <br></br>36 oz up to 48 oz $25<br></br> 52 oz up to 64 oz $36 
</p>
                    </div>

                    <hr className=" my-7 bg-gray-200" />

                    {/* <!-- Returns Section --> */}

                    <div>
                        <div className=" flex justify-between items-center cursor-pointer">
                            <h3 className=" font-semibold text-xl leading-5 text-purple-900">Returns</h3>
                            <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-900  " onClick={() => setShow2(!show2)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={show2 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#d4115d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#d4115d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={"font-normal text-base leading-6 text-purple-900 mt-4 w-11/12 " + (show2 ? "block" : "hidden")}>If you would like to make a return, take a look at our policies below. We want to make sure you’re completely happy with your purchase. If there’s anything we can do to improve your experience, please contact us at <br></br><br></br><a href = "mailto: cosmicjanitorhtx@gmail.com" id="linkId">cosmicjanitorhtx@gmail.com</a><br></br><br></br>
                        We’ll accept return requests for items that are unopened, unused, with the original tags still intact. The product(s) must be in their original packaging, if applicable, in the same condition it was received.<br></br><br></br>
                        If you wish to return your item, we must receive your request within 30 days of the date you received your item.</p>
                    </div>

                    <hr className=" my-7 bg-gray-200" />

                    {/* <!-- Exchange Section --> */}

                    <div>
                        <div className=" flex justify-between items-center cursor-pointer">
                            <h3 className=" font-semibold text-xl leading-5 text-purple-900">Exchange</h3>
                            <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-900  " onClick={() => setShow3(!show3)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={show3 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#d4115d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#d4115d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={"font-normal text-base leading-6 text-purple-900 mt-4 w-11/12 " + (show3 ? "block" : "hidden")}>In the unlikely event that you receive a damaged or defective item, we’re happy to exchange the item for a new one.<br></br><br></br> Please email <a href = "mailto: cosmicjanitorhtx@gmail.com" id="linkId">cosmicjanitorhtx@gmail.com</a> within 30 days of receiving your product to begin the process.<br></br><br></br>
                        If the item is marked “final sale”, it does not qualify for a return, or exchange, and cannot be refunded.</p>
                    </div>

                    <hr className=" my-7 bg-gray-200" />

                    {/* Refund Section */}

                    <div>
                        <div className=" flex justify-between items-center cursor-pointer">
                            <h3 className=" font-semibold text-xl leading-5 text-purple-900">Refunds</h3>
                            <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-900  " onClick={() => setShow4(!show4)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={show4 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#d4115d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#d4115d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={"font-normal text-base leading-6 text-purple-900 mt-4 w-11/12 " + (show4 ? "blcok" : "hidden")}>Once we receive your returned item, our team will review your request and inspect the item. We will send you an email to confirm that we’ve received your item and are processing your request. We’ll follow up with another email once the request has been processed to let you know if your return was approved.<br></br><br></br>
                        If approved, the money will be refunded to your original method of payment within two weeks. All payment companies are different in the amount of time it takes to confirm a payment, so it will likely take a minimum of a few days for the refund to show up in your bank statement.</p>
                    </div>

                    <hr className=" my-7 bg-gray-200" />
                </div>
            </div>
        </div>
        </motion.div>
    );
};

export default Faq1;