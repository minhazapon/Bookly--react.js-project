import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';




const Discount = () => {

    const [value, setValue] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => setValue(new Date()), 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);



    return (
        <div className=" mt-20 mb-10 ml-5 mr-5">

            <div className=' bg-no-repeat bg-cover p-10 rounded-xl ' 
             style={{
                backgroundImage: "url(https://img.freepik.com/premium-photo/pink-blue-colored-background-with-rainbow-colored-background_946021-90541.jpg?w=826)",
              }}
            >

            <div className=' flex-col md:flex-row lg:flex-row flex justify-center items-center gap-32'>

              
                    <div>
                      <img className=" h-[400px]" src="https://demo.templatesjungle.com/bookly/images/banner-image3.png" alt="" />
                    </div>
                    
                    
                    <div>
                    
                     <p className=" text-6xl  font-mono">30% Discount<br></br> on all items.<br></br> Hurry Up !!!</p>
                      <div className=' mt-5'>
                       <p className=' mb-3 font-mono'>Current Offer time:</p>
                       <Clock value={value} />
                      </div> 
                    
                      <div>
                       <a href="#_" class=" mt-5  relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#ad2828] rounded-full shadow-md group">
                       <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ad2828] group-hover:translate-x-0 ease">
                       <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                       </span>
                       <span class="absolute flex items-center justify-center w-full h-full text-[#ad2828] font-mono transition-all duration-300 transform group-hover:translate-x-full ease">Shop Collection</span>
                       <span class="relative invisible font-mono ">Shop Collection</span>
                       </a>
                      </div>     
                    
                    
                    </div>
                                        
                    </div>

                     </div>

            
        </div>
    );
};

export default Discount;