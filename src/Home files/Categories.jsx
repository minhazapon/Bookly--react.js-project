


const Categories = () => {

    return (
        <div className=" mt-20 mb-10 ml-5 mr-5">



            <div>
                <p className=" text-6xl font-semibold -mb-12 ml-3">Categories</p>
            </div>

            <div>
             <div className="">
                <div className=" grid  md:grid-cols-3 gap-10">

                <div>

                <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
                    <img src="https://demo.templatesjungle.com/bookly/images/category1.jpg"  alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Romance</h3>
                </article>
                
                </div>   


                <div>

                <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
                    <img src="https://demo.templatesjungle.com/bookly/images/category2.jpg"  alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 class="z-10 mt-3 text-3xl font-bold text-white">LifeStyle</h3>
                </article>
                
                </div>   


                <div>

                <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
                    <img src="https://demo.templatesjungle.com/bookly/images/category3.jpg"  alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Recipe</h3>
                </article>
                
                </div>   

          
            

                </div>
             </div>




            </div>
            
        </div>
    );
};

export default Categories;