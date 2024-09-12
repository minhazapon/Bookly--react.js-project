



const BlogsBanner = () => {
    return (
        <div className=" mb-10 mt-10 ml-5 mr-5">


            <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10">


              <div>
                <img className=" h-[400px]" src="https://cdn-icons-gif.flaticon.com/12747/12747824.gif" alt="" />
              </div>

              <div>
                <p className=" font-mono text-5xl text-[#00CCDD] font-bold text-center ">BLOGS</p>
                <p className=" mt-5 text-center font-mono">A blog is a powerful platform for sharing ideas,<br></br> stories, and information. Whether you're writing about<br></br> personal experiences, giving advice, or discussing <br></br>current trends, blogs allow for creative expression <br></br>and connection with a global audience.</p>
                <div className=" flex justify-center">
                 <a href="#_" class=" mt-5  relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#00CCDD] rounded-full shadow-md group">
                 <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#00CCDD] group-hover:translate-x-0 ease">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                 </span>
                 <span class="absolute flex items-center justify-center w-full h-full text-[#00CCDD] font-mono transition-all duration-300 transform group-hover:translate-x-full ease">OUR BLOGS</span>
                 <span class="relative invisible font-mono ">OUR BLOGS</span>
                 </a>
                </div>
              </div>



            </div>
            
        </div>
    );
};

export default BlogsBanner;