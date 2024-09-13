
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import {Link} from 'react-router-dom'



// import required modules
import { Navigation } from 'swiper/modules';




const Banner = () => {
    return (
        <div className=" mb-10 ">

            <div className=' bg-no-repeat bg-cover '

            style={{
                backgroundImage: "url(https://img.freepik.com/premium-photo/pink-blue-colored-background-with-rainbow-colored-background_946021-90541.jpg?w=826)",
              }}
            
            >
             <div>              
             <>
               <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                 <SwiperSlide>
                   <div>
                     <div className=' flex-col md:flex-row lg:flex-row flex justify-center gap-5 items-center'>
                        <div>
                            <p className=' font-mono text-5xl font-semibold'>The Fine Print<br></br> Book Collection</p>
                            <p className=' mt-3 font-mono'>Best Offer Save 30% Grab It Now</p>
                            <Link to="/shop" >
                            <a  class=" mt-5  relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#ad2828] rounded-full shadow-md group">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ad2828] group-hover:translate-x-0 ease">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full text-[#ad2828] font-mono transition-all duration-300 transform group-hover:translate-x-full ease">Shop Collection</span>
                            <span class="relative invisible font-mono ">Shop Collection</span>
                            </a>
                            
                            </Link>
                            
                        </div>

                        <div>
                            <img className=' h-[500px]' src="https://demo.templatesjungle.com/bookly/images/banner-image2.png" alt="" />
                        </div>
                     </div>
                   </div>
                 </SwiperSlide>
                 <SwiperSlide>
                 <div>
                     <div className=' flex-col md:flex-row lg:flex-row flex justify-center gap-5 items-center'>
                        <div>
                            <p className=' font-mono text-5xl font-semibold'>How innovation<br></br> Works</p>
                            <p className=' mt-3 font-mono'>Discount Available Grab It Now</p>
                            <a href="#_" class=" mt-5  relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#ad2828] rounded-full shadow-md group">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ad2828] group-hover:translate-x-0 ease">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full text-[#ad2828] font-mono transition-all duration-300 transform group-hover:translate-x-full ease">Shop Products</span>
                            <span class="relative invisible font-mono ">Shop Products</span>
                            </a>
                        </div>

                        <div>
                            <img className=' h-[500px]' src="https://demo.templatesjungle.com/bookly/images/banner-image1.png" alt="" />
                        </div>
                     </div>
                   </div>

                 </SwiperSlide>
                 <SwiperSlide>

                 <div>
                     <div className=' flex-col md:flex-row lg:flex-row flex justify-center gap-5 items-center'>
                        <div>
                            <p className=' font-mono text-5xl font-semibold'>Your Heart Is<br></br> The Sea</p>
                            <p className=' mt-3 font-mono'>Limited Stocks Available Grab It Now</p>
                            <a href="#_" class=" mt-5  relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#ad2828] rounded-full shadow-md group">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ad2828] group-hover:translate-x-0 ease">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full text-[#ad2828] font-mono transition-all duration-300 transform group-hover:translate-x-full ease">Shop Collection</span>
                            <span class="relative invisible font-mono ">Shop Collection</span>
                            </a>
                        </div>

                        <div>
                            <img className=' h-[500px]' src="https://demo.templatesjungle.com/bookly/images/banner-image.png" alt="" />
                        </div>
                     </div>
                   </div>

                 </SwiperSlide>
                
               </Swiper>
             </>


             </div>


            </div>
            
        </div>
    );
};

export default Banner;