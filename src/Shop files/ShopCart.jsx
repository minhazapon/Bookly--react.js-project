import { useEffect, useState } from "react";
import CartDetails from "./CartDetails";



const ShopCart = () => {

    const [cart, setCart] = useState([])

    useEffect( ()=>{
      
      fetch('shop.json')
      .then(res =>res.json())
      .then(data =>setCart(data))
 

    } , [])


    return (
        <div className=" mb-10 mt-20 ml-5 mr-5">

            <div className=" flex-col md:flex-row lg:flex-row flex justify-center gap-10">


            <div className=" flex justify-center">
            <div className="">
            <div className=" flex justify-center items-center gap-2 border-[1px] rounded-xl border-gray-400 h-[60px] w-[300px] p-2 ">
              <input placeholder="Search" className=" border-white p-2" type="search" name="search" id="" />
              <img className=" h-[50px]" src="https://cdn-icons-gif.flaticon.com/15164/15164884.gif" alt="" />
            </div>
            <div className=" mt-10">
             <p className=" text-4xl font-mono">Categories</p>
             <p className=" mt-2 text-2xl font-thin">All</p>
             <p className=" mt-2 text-2xl font-thin">Romance</p>
             <p className=" mt-2 text-2xl font-thin">Recipie</p>
             <p className=" mt-2 text-2xl font-thin">Sci-Fi</p>
             <p className=" mt-2 text-2xl font-thin">Lifestyle</p>
            </div>
            <div className=" mt-10">
             <p className=" text-4xl font-mono">Tags</p>
             <p className=" mt-2 text-2xl font-thin">Sci-Fi</p>
             <p className=" mt-2 text-2xl font-thin">Revenge</p>
             <p className=" mt-2 text-2xl font-thin">Zombie</p>
             <p className=" mt-2 text-2xl font-thin">Vampire</p>
            </div>
            <div className=" mt-10">
             <p className=" text-4xl font-mono">authur</p>
             <p className=" mt-2 text-2xl font-thin">Hanna Clark</p>
             <p className=" mt-2 text-2xl font-thin">Albert E. Beth</p>
             <p className=" mt-2 text-2xl font-thin">D.K John</p>
            </div>
            <div className=" mt-10">
             <p className=" text-4xl font-mono">Filter by<br></br> price</p>
             <p className=" mt-2 text-2xl font-thin">Less than $10</p>
             <p className=" mt-2 text-2xl font-thin">$10- $20</p>
             <p className=" mt-2 text-2xl font-thin">$20- $30</p>
             <p className=" mt-2 text-2xl font-thin">$30- $40</p>
             <p className=" mt-2 text-2xl font-thin">$40- $50</p>
            </div>
            </div>
            </div>
            

            {/* --------------------------------------------------------------- */}


            <div className=" flex justify-center">
                <div className=" grid  md:grid-cols-4 lg:col-span-3 gap-5">




                   {

                      cart.map( cart=> <CartDetails cart={cart} ></CartDetails> )


                   }




                </div>
            </div>







            </div>
            
        </div>
    );
};

export default ShopCart;