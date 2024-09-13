


const ShopBanner = () => {


    return (
        <div className=" mb-10 mt-10 ml-5 mr-5">

            <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10">

               <div>
                  <img className=" h-[500px]" src="https://cdn-icons-gif.flaticon.com/10606/10606591.gif" alt="" />
               </div>

               <div>
                <p className=" font-mono text-5xl text-[#00CCDD] font-bold text-center ">SHOP</p>
                <p className=" mt-5 text-center font-mono">"Welcome to our shop, where <br></br>quality meets convenience! Whether you’re looking <br></br>for the latest trends, everyday essentials<br></br>, or unique, handcrafted items,<br></br> we’ve got you covered. </p>
                <div className=" flex justify-center">
                 <a href="#_" class=" mt-5  relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#00CCDD] rounded-full shadow-md group">
                 <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#00CCDD] group-hover:translate-x-0 ease">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                 </span>
                 <span class="absolute flex items-center justify-center w-full h-full text-[#00CCDD] font-mono transition-all duration-300 transform group-hover:translate-x-full ease">SHOP DETAILS</span>
                 <span class="relative invisible font-mono ">SHOP DETAILS</span>
                 </a>
                </div>
              </div>



            </div>
            
        </div>
    );
};

export default ShopBanner;