



const Books = () => {
    return (
        <div className=" mb-10 mt-10 ml-5 mr-5 ">

			<div className="  flex-col md:flex-row lg:flex-row flex justify-center items-center gap-5 ">

             
			 <div className=" transition duration-300 ease-in-out hover:scale-110  border-[1px]  border-gray-300 p-5 rounded-xl ">
			   <div>
			   	<p className=" text-3xl font-thin mb-5">Featured</p>
			   </div>
			   <div>
			   <div className=" flex  items-center gap-5">
				<div>
					<img className=" h-[100px] w-[80px]" src="https://demo.templatesjungle.com/bookly/images/product-item2.png" alt="" />
				</div>
				<div>
					<p className=" font-thin text-xl ">Echoes of the<br></br> Ancients</p>
					<div className=" flex items-center gap-2">
                    <p>Lauren Asher</p>
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
					</div>
					<p className=" font-thin text-xl">$800</p>
				</div>
			   </div>
			   <p className=" mt-5 bg-gray-400 h-[1px] w-[250px]"></p>
			   </div>
			   <div>
			   <div className=" mt-5 flex  items-center gap-5">
				<div>
					<img className=" h-[100px] w-[80px]" src="https://demo.templatesjungle.com/bookly/images/product-item1.png" alt="" />
				</div>
				<div>
					<p className=" font-thin text-xl ">The Midnight<br></br> Garden</p>
					<div className=" flex items-center gap-2">
                    <p>Lauren Asher</p>
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
					</div>
					<p className=" font-thin text-xl">$800</p>
				</div>
			   </div>
			   <p className=" mt-5 bg-gray-400 h-[1px] w-[250px]"></p>
			   </div>
			   <div>
			   <div className=" mt-5 flex  items-center gap-5">
				<div>
					<img className=" h-[100px] w-[80px]" src="https://demo.templatesjungle.com/bookly/images/product-item3.png" alt="" />
				</div>
				<div>
					<p className=" font-thin text-xl ">Shadow of <br></br>the Serpent</p>
					<div className=" flex items-center gap-2">
                    <p>Lauren Asher</p>
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
					</div>
					<p className=" font-thin text-xl">$800</p>
				</div>
			   </div>
			   </div>
			 </div>



            {/* ---------------------------1---------------------------------------- */}



			<div className=" transition duration-300 ease-in-out hover:scale-110 border-[1px] border-gray-300 p-5 rounded-xl ">
			   <div>
			   	<p className=" text-3xl font-thin mb-5">Latest items</p>
			   </div>
			   <div>
			   <div className=" flex  items-center gap-5">
				<div>
					<img className=" h-[100px] w-[80px]" src="https://demo.templatesjungle.com/bookly/images/product-item4.png" alt="" />
				</div>
				<div>
					<p className=" font-thin text-xl ">Whispering<br></br> Winds</p>
					<div className=" flex items-center gap-2">
                    <p>Lauren Asher</p>
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
					</div>
					<p className=" font-thin text-xl">$800</p>
				</div>
			   </div>
			   <p className=" mt-5 bg-gray-400 h-[1px] w-[250px]"></p>
			   </div>
			   <div>
			   <div className=" mt-5 flex  items-center gap-5">
				<div>
					<img className=" h-[100px] w-[80px]" src="https://demo.templatesjungle.com/bookly/images/product-item5.png" alt="" />
				</div>
				<div>
					<p className=" font-thin text-xl ">The Forgotten<br></br> Realm</p>
					<div className=" flex items-center gap-2">
                    <p>Lauren Asher</p>
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
					</div>
					<p className=" font-thin text-xl">$800</p>
				</div>
			   </div>
			   <p className=" mt-5 bg-gray-400 h-[1px] w-[250px]"></p>
			   </div>
			   <div>
			   <div className=" mt-5 flex  items-center gap-5">
				<div>
					<img className=" h-[100px] w-[80px]" src="https://demo.templatesjungle.com/bookly/images/product-item6.png" alt="" />
				</div>
				<div>
					<p className=" font-thin text-xl ">Moonlit Secrets</p>
					<div className=" flex items-center gap-2">
                    <p>Lauren Asher</p>
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
					</div>
					<p className=" font-thin text-xl">$800</p>
				</div>
			   </div>
			   </div>
			 </div>
            


			{/* ---------------2-------------------- */}






			<div className=" transition duration-300 ease-in-out hover:scale-110  border-[1px] border-gray-300 p-5  rounded-xl ">
			   <div>
			   	<p className=" text-3xl font-thin mb-5">Best reviewed</p>
			   </div>
			   <div>
			   <div className=" flex  items-center gap-5">
				<div>
					<img className=" h-[100px] w-[80px]" src="https://demo.templatesjungle.com/bookly/images/product-item7.png" alt="" />
				</div>
				<div>
					<p className=" font-thin text-xl ">The Crystal Key</p>
					<div className=" flex items-center gap-2">
                    <p>Lauren Asher</p>
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
					</div>
					<p className=" font-thin text-xl">$800</p>
				</div>
			   </div>
			   <p className=" mt-5 bg-gray-400 h-[1px] w-[250px]"></p>
			   </div>
			   <div>
			   <div className=" mt-5 flex  items-center gap-5">
				<div>
					<img className=" h-[100px] w-[80px]" src="https://demo.templatesjungle.com/bookly/images/product-item8.png" alt="" />
				</div>
				<div>
					<p className=" font-thin text-xl ">Starlight Sonata</p>
					<div className=" flex items-center gap-2">
                    <p>Lauren Asher</p>
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
					</div>
					<p className=" font-thin text-xl">$800</p>
				</div>
			   </div>
			   <p className=" mt-5 bg-gray-400 h-[1px] w-[250px]"></p>
			   </div>
			   <div>
			   <div className=" mt-5 flex  items-center gap-5">
				<div>
					<img className=" h-[100px] w-[80px]" src="https://demo.templatesjungle.com/bookly/images/product-item9.png" alt="" />
				</div>
				<div>
					<p className=" font-thin text-xl ">Tales of the<br></br> Enchanted Forest</p>
					<div className=" flex items-center gap-2">
                    <p>Lauren Asher</p>
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
					</div>
					<p className=" font-thin text-xl">$800</p>
				</div>
			   </div>
			   </div>
			 </div>
            

			{/* -------------3------------------------ */}



			<div className=" transition duration-300 ease-in-out hover:scale-110 border-[1px] border-gray-300 p-5 rounded-xl ">
			   <div>
			   	<p className=" text-3xl font-thin mb-5">On sale</p>
			   </div>
			   <div>
			   <div className=" flex  items-center gap-5">
				<div>
					<img className=" h-[100px] w-[80px]" src="https://demo.templatesjungle.com/bookly/images/product-item10.png" alt="" />
				</div>
				<div>
					<p className=" font-thin text-xl ">The Phoenix<br></br> Chronicles</p>
					<div className=" flex items-center gap-2">
                    <p>Lauren Asher</p>
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
					</div>
					<p className=" font-thin text-xl">$800</p>
				</div>
			   </div>
			   <p className=" mt-5 bg-gray-400 h-[1px] w-[250px]"></p>
			   </div>
			   <div>
			   <div className=" mt-5 flex  items-center gap-5">
				<div>
					<img className=" h-[100px] w-[80px]" src="https://demo.templatesjungle.com/bookly/images/product-item11.png" alt="" />
				</div>
				<div>
					<p className=" font-thin text-xl ">Dreams of Avalon</p>
					<div className=" flex items-center gap-2">
                    <p>Lauren Asher</p>
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
					</div>
					<p className=" font-thin text-xl">$800</p>
				</div>
			   </div>
			   <p className=" mt-5 bg-gray-400 h-[1px] w-[250px]"></p>
			   </div>
			   <div>
			   <div className=" mt-5 flex  items-center gap-5">
				<div>
					<img className=" h-[100px] w-[80px]" src="https://demo.templatesjungle.com/bookly/images/product-item12.png" alt="" />
				</div>
				<div>
					<p className=" font-thin text-xl ">Legends of the<br></br> Dragon Isles</p>
					<div className=" flex items-center gap-2">
                    <p>Lauren Asher</p>
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
					</div>
					<p className=" font-thin text-xl">$800</p>
				</div>
			   </div>
			   </div>
			 </div>
             


			{/* ----------------------4------------------------ */}













			</div>

           
            
        </div>
    );
};

export default Books;