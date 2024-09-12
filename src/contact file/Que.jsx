


const Que = () => {


    return (
        <div className=" mb-10 mt-10 ml-5 mr-5  ">

            <div className=" flex-col md:flex-row lg:flex-row flex justify-center gap-10">



             <div>
                <p className=" text-5xl font-mono">Contact info</p>
                <p className=" text-xl font-thin mt-5 ">Contact with Us and Join With Bookly</p>
                <div className=" mt-5 flex items-center gap-10 ">

                <div>
                <p className=" text-2xl font-bold ">Office</p>
                <div className=" mt-2">
                    <p className=" font-thin">730 Glenstone Ave 65802,<br></br> Springfield, US</p>
                    <p className=" mt-1 font-thin">+123 987 321</p>
                    <p className=" mt-1 font-thin">+123 123 654</p>
                    <p className=" mt-1 font-thin">info@yourinfo.com</p>
                </div>
                </div>

                <div>
                <p className=" text-2xl font-bold">Management
                 </p>
                <div className=" mt-2">
                    <p className=" font-thin">730 Glenstone Ave 65802,<br></br> Springfield, US</p>
                    <p className=" mt-1 font-thin">+123 987 321</p>
                    <p className=" mt-1 font-thin">+123 123 654</p>
                    <p className=" mt-1 font-thin">info@yourinfo.com</p>
                </div>
                </div>
                </div>
             </div>

             {/* ---------------------------------------------- */}


             <div>

              <p className=" text-5xl font-mono" >Any questions?</p>
              <p className=" text-xl font-thin mt-5">Use the form below to get in touch with us.</p>

            
              <div className=" mt-10">


                   <form>

                    <div>

                    <div className=" flex items-center gap-5">
                        <input placeholder="Enter Your Name Here" className=" p-2 rounded-lg border-[1px] border-gray-500 h-[50px] w-[200px]" name="name" type="text" />
                        <input placeholder="Enter Your Email Here" className=" p-2 rounded-lg border-[1px] border-gray-500 h-[50px] w-[200px]"  type="email" name="email" id="" />
                    </div>
                    
                    <div>
                        <input placeholder="Enter Your Number Here" className=" mt-5 p-2 rounded-lg border-[1px] border-gray-500 h-[50px] w-[420px]" type="number" name="number" id="" />
                    </div>
                    
                    <div>
                        <input placeholder="Enter Your Subject Here" className=" mt-5 p-2 rounded-lg border-[1px] border-gray-500 h-[50px] w-[420px]" name="subject" type="text" />
                    </div>
                    
                    <div>
                        <textarea placeholder="Enter Your Message Here" className=" mt-5 p-2 rounded-lg border-[1px] border-gray-500 h-[50px] w-[420px]"  name="message" id=""></textarea>
                    </div>
                    
                    <button>
                    <a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-black rounded-lg group">
                    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#00CCDD] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span class="relative w-[342px]">Submit</span>
                    </a>
                    </button>
                    
                    </div>



                    </form>

                    </div>
             
        
                   </div>


            </div>
            
        </div>
    );
};

export default Que;



{/* <a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-black rounded-lg group">
                              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#00CCDD] rounded-full group-hover:w-56 group-hover:h-56"></span>
                              <span class="absolute inset-0  w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                              <span class="relative">Submit</span>
                              </a> */}