


const CartDetails = ({cart}) => {
    
    const { img, title, name, price } = cart

    return (
        <div>

            <div>
                <div className="  border-[1px] border-gray-400 p-3 rounded-xl ">
                    <img className=" rounded-xl h-[200px] w-[150px]" src={img} alt="" />
                    <p className=" mt-3  font-thin">{title}</p>
                    <div>
                        <p className="  mt-3">{name}</p>
                        <div className="rating rating-xs">
                          <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                          <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className=" text-pink-600 font-semibold mt-3  text-2xl">{price}</p>
                    <div className=" ">
                    <div className=" flex justify-center">
                    <a href="#_" class=" mt-5  relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#00CCDD] rounded-full shadow-md group">
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#00CCDD] group-hover:translate-x-0 ease">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="absolute flex items-center justify-center w-full h-full text-[#00CCDD] font-mono transition-all duration-300 transform group-hover:translate-x-full ease">Buy Books</span>
                        <span class="relative invisible font-mono ">Buy Books</span>
                        </a>
                    </div>
                   
                    </div>   
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CartDetails;