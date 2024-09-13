import {Link} from 'react-router-dom'


const Store = () => {
    return (
        <div className="  mb-10 mt-20 ml-5 mr-5">

            <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10">



             <div>
                <img className=" h-[400px] w-[500px] rounded-xl" src="https://demo.templatesjungle.com/bookly/images/single-image-about.jpg" alt="" />
             </div>



             <div>
              <p className=" text-4xl font-mono">Best Bookstore of all time</p>
              <p className=" mt-5 font-thin ">"Welcome to [Your Bookstore Name], your gateway <br></br>to a world of stories, knowledge,<br></br> and inspiration. Whether you're a passionate reader, a <br></br>student in search of essential resources, or someone looking for<br></br> a thoughtful gift, our carefully curated selection<br></br> has something for everyone.<br></br> From timeless classics to the latest bestsellers, children's <br></br>books to thought-provoking non-fiction, we pride ourselves on<br></br> offering a diverse range of titles to suit all tastes.</p>

              <Link to="/shop" >

              <a href="#_" class=" mt-5  relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#ad2828] rounded-full shadow-md group">
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ad2828] group-hover:translate-x-0 ease">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-[#ad2828] font-mono transition-all duration-300 transform group-hover:translate-x-full ease">Go To Shop</span>
              <span class="relative invisible font-mono ">Go To Shop</span>
              </a>
              
              </Link>
              

             </div>







            </div>
            
        </div>
    );
};

export default Store;