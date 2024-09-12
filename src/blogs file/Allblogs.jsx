import { useEffect, useState } from "react";
import BlogsDetails from "./BlogsDetails";



const Allblogs = () => {


    const [user, setUser] = useState([])


    useEffect( ()=>{
     fetch('blogs.json')
     .then(res =>res.json())
     .then(data =>setUser(data))
    } , [])


    return (
        <div className=" mt-20 mb-10 ml-5 mr-5">

            <div className=" flex-col md:flex-row lg:flex-row flex justify-center gap-10">

            
            {/* --------------------search and text group------------------------------------ */}




            <div className=" flex justify-center">


               <div>

               <div className=" flex items-center gap-2 border-[1px] rounded-xl border-gray-400 h-[60px] w-[300px] p-2 ">
                 <input placeholder="Search" className=" p-2" type="search" name="search" id="" />
                 <img className=" h-[50px]" src="https://cdn-icons-gif.flaticon.com/15164/15164884.gif" alt="" />
               </div>

               <div className=" mt-10">
                <p className=" text-4xl font-mono">Categories</p>
                <p className=" mt-2 text-2xl font-thin">All</p>
                <p className=" mt-2 text-2xl font-thin">Phones</p>
                <p className=" mt-2 text-2xl font-thin">Accessories</p>
                <p className=" mt-2 text-2xl font-thin">Tablets</p>
                <p className=" mt-2 text-2xl font-thin">Watches</p>
               </div>

               <div className=" mt-10">
                <p className=" text-4xl font-mono">Tags</p>
                <p className=" mt-2 text-2xl font-thin">White</p>
                <p className=" mt-2 text-2xl font-thin">Cheap</p>
                <p className=" mt-2 text-2xl font-thin">Mobile</p>
                <p className=" mt-2 text-2xl font-thin">Modern</p>
               </div>

               <div className=" mt-10">
                <p className=" text-4xl font-mono">Social Links</p>
                <p className=" mt-2 text-2xl font-thin">Facebook</p>
                <p className=" mt-2 text-2xl font-thin">Instagram</p>
                <p className=" mt-2 text-2xl font-thin">Twitter</p>
                <p className=" mt-2 text-2xl font-thin">Youtube</p>
                <p className=" mt-2 text-2xl font-thin">Pinterest</p>
               </div>

               </div>


            </div>



            {/* --------------------search and text group------------------------------------ */}

            {/* -------------------------------------------------------------------------------------- */}
             

             {/* -----------------------blogs card------------------------- */}


              <div className=" flex justify-center">

              <div className=" grid  md:grid-cols-2 gap-3">



                 {
                  
                    user.map( user => <BlogsDetails user={user} ></BlogsDetails> )

                 }




              </div>

              </div>



             {/* -----------------------blogs card------------------------- */}


            </div>
            
        </div>
    );
};

export default Allblogs;