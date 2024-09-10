



const Books = () => {
    return (
        <div className=" mb-10 mt-20 ml-5 mr-5 ">

            <div>


              <div className="   ">

                 <div className=" grid  md:grid-cols-4  gap-5  ">

                  
                  <div className=" border-[1px] border-gray-400  rounded-xl ">
                  <div className="flex flex-col w-[140px] p-6 space-y-4 sm:p-10   text-black">
                        	<h2 className="text-2xl font-mono">Featured</h2>
                        	<ul className="flex flex-col divide-y divide-gray-700">
                        		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        			<div className="flex w-full space-x-2 sm:space-x-4">
                        				<img className="flex-shrink-0 object-cover w-30 h-20 dark:border- rounded outline-none sm:h-32 bg-gray-500" src="https://demo.templatesjungle.com/bookly/images/product-item2.png" alt="Polaroid camera" />
                        				<div className="flex flex-col justify-between w-full pb-4">
                        					<div className="flex justify-between w-full pb-2 space-x-2">
                        						<div className="space-y-1">
                        							<h3 className="text-lg font-semibold leading-snug sm:pr-8">Echoes of the Ancients</h3>
                        							<p className="text-sm text-gray-400">Top Seller</p>
                        						</div>
                        						<div className="text-right">
                        							<p className="text-lg font-semibold">599.99€</p>
                        							<p className="text-sm line-through text-gray-600">750.50€</p>
                        						</div>
                        					</div>
                                            <div>
                                              <p className=" font-mono">Lauren Asher</p>
                                              <div className=" mt-2 rating">
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input
                                                 type="radio"
                                                 name="rating-2"
                                                 className="mask mask-star-2 bg-orange-400"
                                                 defaultChecked />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                             </div>

                                            </div>
                        					
                        				</div>
                        			</div>
                        		</li>
                        		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        			<div className="flex w-full space-x-2 sm:space-x-4">
                        				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src="https://demo.templatesjungle.com/bookly/images/product-item1.png" />
                        				<div className="flex flex-col justify-between w-full pb-4">
                        					<div className="flex justify-between w-full pb-2 space-x-2">
                        						<div className="space-y-1">
                        							<h3 className="text-lg font-semibold leading-snug sm:pr-8">The Midnight Garden</h3>
                        							<p className="text-sm text-gray-400">Top Seller</p>
                        						</div>
                        						<div className="text-right">
                        							<p className="text-lg font-semibold">999.95€</p>
                        							<p className="text-sm line-through text-gray-600">1509€</p>
                        						</div>
                        					</div>
                                            <div>
                                              <p className=" font-mono">Lauren Asher</p>
                                              <div className=" mt-2 rating">
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input
                                                 type="radio"
                                                 name="rating-2"
                                                 className="mask mask-star-2 bg-orange-400"
                                                 defaultChecked />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                             </div>

                                            </div>
                        					
                        				</div>
                        			</div>
                        		</li>
                        		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        			<div className="flex w-full space-x-2 sm:space-x-4">
                        				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src="https://demo.templatesjungle.com/bookly/images/product-item3.png" />
                        				<div className="flex flex-col justify-between w-full pb-4">
                        					<div className="flex justify-between w-full pb-2 space-x-2">
                        						<div className="space-y-1">
                        							<h3 className="text-lg font-semibold leading-snug sm:pr-8">Shadow of the Serpent</h3>
                        							<p className="text-sm text-gray-400">Top Seller</p>
                        						</div>
                        						<div className="text-right">
                        							<p className="text-lg font-semibold">888.99€</p>
                        							<p className="text-sm line-through text-gray-600">1500.99€</p>
                        						</div>
                        					</div>
                                            <div>
                                              <p className=" font-mono">Lauren Asher</p>
                                              <div className=" mt-2 rating">
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input
                                                 type="radio"
                                                 name="rating-2"
                                                 className="mask mask-star-2 bg-orange-400"
                                                 defaultChecked />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                             </div>

                                            </div>
                        					
                        				</div>
                        			</div>
                        		</li>
                        	</ul>
                        </div>
                  </div>

                  {/* ------------------------------------------------- */}


                  <div className=" border-[1px] border-gray-400  rounded-xl  ">
                  <div className="flex flex-col w-[140px] p-6 space-y-4 sm:p-10   text-black">
                        	<h2 className="text-2xl font-mono">Latest items
                            </h2>
                        	<ul className="flex flex-col divide-y divide-gray-700">
                        		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        			<div className="flex w-full space-x-2 sm:space-x-4">
                        				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src="https://demo.templatesjungle.com/bookly/images/product-item2.png" alt="Polaroid camera" />
                        				<div className="flex flex-col justify-between w-full pb-4">
                        					<div className="flex justify-between w-full pb-2 space-x-2">
                        						<div className="space-y-1">
                        							<h3 className="text-lg font-semibold leading-snug sm:pr-8">Echoes of the Ancients</h3>
                        							<p className="text-sm text-gray-400">Top Seller</p>
                        						</div>
                        						<div className="text-right">
                        							<p className="text-lg font-semibold">599.99€</p>
                        							<p className="text-sm line-through text-gray-600">750.50€</p>
                        						</div>
                        					</div>
                                            <div>
                                              <p className=" font-mono">Lauren Asher</p>
                                              <div className=" mt-2 rating">
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input
                                                 type="radio"
                                                 name="rating-2"
                                                 className="mask mask-star-2 bg-orange-400"
                                                 defaultChecked />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                             </div>

                                            </div>
                        					
                        				</div>
                        			</div>
                        		</li>
                        		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        			<div className="flex w-full space-x-2 sm:space-x-4">
                        				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src="https://demo.templatesjungle.com/bookly/images/product-item1.png" />
                        				<div className="flex flex-col justify-between w-full pb-4">
                        					<div className="flex justify-between w-full pb-2 space-x-2">
                        						<div className="space-y-1">
                        							<h3 className="text-lg font-semibold leading-snug sm:pr-8">The Midnight Garden</h3>
                        							<p className="text-sm text-gray-400">Top Seller</p>
                        						</div>
                        						<div className="text-right">
                        							<p className="text-lg font-semibold">999.95€</p>
                        							<p className="text-sm line-through text-gray-600">1509€</p>
                        						</div>
                        					</div>
                                            <div>
                                              <p className=" font-mono">Lauren Asher</p>
                                              <div className=" mt-2 rating">
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input
                                                 type="radio"
                                                 name="rating-2"
                                                 className="mask mask-star-2 bg-orange-400"
                                                 defaultChecked />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                             </div>

                                            </div>
                        					
                        				</div>
                        			</div>
                        		</li>
                        		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        			<div className="flex w-full space-x-2 sm:space-x-4">
                        				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src="https://demo.templatesjungle.com/bookly/images/product-item3.png" />
                        				<div className="flex flex-col justify-between w-full pb-4">
                        					<div className="flex justify-between w-full pb-2 space-x-2">
                        						<div className="space-y-1">
                        							<h3 className="text-lg font-semibold leading-snug sm:pr-8">Shadow of the Serpent</h3>
                        							<p className="text-sm text-gray-400">Top Seller</p>
                        						</div>
                        						<div className="text-right">
                        							<p className="text-lg font-semibold">888.99€</p>
                        							<p className="text-sm line-through text-gray-600">1500.99€</p>
                        						</div>
                        					</div>
                                            <div>
                                              <p className=" font-mono">Lauren Asher</p>
                                              <div className=" mt-2 rating">
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input
                                                 type="radio"
                                                 name="rating-2"
                                                 className="mask mask-star-2 bg-orange-400"
                                                 defaultChecked />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                             </div>

                                            </div>
                        					
                        				</div>
                        			</div>
                        		</li>
                        	</ul>
                        </div>
                  </div>

                  {/* ------------------------------------------------- */}


                  <div className=" border-[1px] border-gray-400  rounded-xl  ">
                  <div className="flex flex-col w-[140px] p-6 space-y-4 sm:p-10   text-black">
                        	<h2 className="text-2xl font-mono">Best reviewed</h2>
                        	<ul className="flex flex-col divide-y divide-gray-700">
                        		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        			<div className="flex w-full space-x-2 sm:space-x-4">
                        				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src="https://demo.templatesjungle.com/bookly/images/product-item2.png" alt="Polaroid camera" />
                        				<div className="flex flex-col justify-between w-full pb-4">
                        					<div className="flex justify-between w-full pb-2 space-x-2">
                        						<div className="space-y-1">
                        							<h3 className="text-lg font-semibold leading-snug sm:pr-8">Echoes of the Ancients</h3>
                        							<p className="text-sm text-gray-400">Top Seller</p>
                        						</div>
                        						<div className="text-right">
                        							<p className="text-lg font-semibold">599.99€</p>
                        							<p className="text-sm line-through text-gray-600">750.50€</p>
                        						</div>
                        					</div>
                                            <div>
                                              <p className=" font-mono">Lauren Asher</p>
                                              <div className=" mt-2 rating">
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input
                                                 type="radio"
                                                 name="rating-2"
                                                 className="mask mask-star-2 bg-orange-400"
                                                 defaultChecked />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                             </div>

                                            </div>
                        					
                        				</div>
                        			</div>
                        		</li>
                        		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        			<div className="flex w-full space-x-2 sm:space-x-4">
                        				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src="https://demo.templatesjungle.com/bookly/images/product-item1.png" />
                        				<div className="flex flex-col justify-between w-full pb-4">
                        					<div className="flex justify-between w-full pb-2 space-x-2">
                        						<div className="space-y-1">
                        							<h3 className="text-lg font-semibold leading-snug sm:pr-8">The Midnight Garden</h3>
                        							<p className="text-sm text-gray-400">Top Seller</p>
                        						</div>
                        						<div className="text-right">
                        							<p className="text-lg font-semibold">999.95€</p>
                        							<p className="text-sm line-through text-gray-600">1509€</p>
                        						</div>
                        					</div>
                                            <div>
                                              <p className=" font-mono">Lauren Asher</p>
                                              <div className=" mt-2 rating">
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input
                                                 type="radio"
                                                 name="rating-2"
                                                 className="mask mask-star-2 bg-orange-400"
                                                 defaultChecked />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                             </div>

                                            </div>
                        					
                        				</div>
                        			</div>
                        		</li>
                        		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        			<div className="flex w-full space-x-2 sm:space-x-4">
                        				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src="https://demo.templatesjungle.com/bookly/images/product-item3.png" />
                        				<div className="flex flex-col justify-between w-full pb-4">
                        					<div className="flex justify-between w-full pb-2 space-x-2">
                        						<div className="space-y-1">
                        							<h3 className="text-lg font-semibold leading-snug sm:pr-8">Shadow of the Serpent</h3>
                        							<p className="text-sm text-gray-400">Top Seller</p>
                        						</div>
                        						<div className="text-right">
                        							<p className="text-lg font-semibold">888.99€</p>
                        							<p className="text-sm line-through text-gray-600">1500.99€</p>
                        						</div>
                        					</div>
                                            <div>
                                              <p className=" font-mono">Lauren Asher</p>
                                              <div className=" mt-2 rating">
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input
                                                 type="radio"
                                                 name="rating-2"
                                                 className="mask mask-star-2 bg-orange-400"
                                                 defaultChecked />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                             </div>

                                            </div>
                        					
                        				</div>
                        			</div>
                        		</li>
                        	</ul>
                        </div>
                  </div>

                  {/* ------------------------------------------------- */}




                  <div className=" border-[1px] border-gray-400  rounded-xl  ">
                  <div className="flex flex-col w-[140px] p-6 space-y-4 sm:p-10   text-black">
                        	<h2 className="text-2xl font-mono">On sale</h2>
                        	<ul className="flex flex-col divide-y divide-gray-700">
                        		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        			<div className="flex w-full space-x-2 sm:space-x-4">
                        				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src="https://demo.templatesjungle.com/bookly/images/product-item2.png" alt="Polaroid camera" />
                        				<div className="flex flex-col justify-between w-full pb-4">
                        					<div className="flex justify-between w-full pb-2 space-x-2">
                        						<div className="space-y-1">
                        							<h3 className="text-lg font-semibold leading-snug sm:pr-8">Echoes of the Ancients</h3>
                        							<p className="text-sm text-gray-400">Top Seller</p>
                        						</div>
                        						<div className="text-right">
                        							<p className="text-lg font-semibold">599.99€</p>
                        							<p className="text-sm line-through text-gray-600">750.50€</p>
                        						</div>
                        					</div>
                                            <div>
                                              <p className=" font-mono">Lauren Asher</p>
                                              <div className=" mt-2 rating">
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input
                                                 type="radio"
                                                 name="rating-2"
                                                 className="mask mask-star-2 bg-orange-400"
                                                 defaultChecked />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                             </div>

                                            </div>
                        					
                        				</div>
                        			</div>
                        		</li>
                        		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        			<div className="flex w-full space-x-2 sm:space-x-4">
                        				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src="https://demo.templatesjungle.com/bookly/images/product-item1.png" />
                        				<div className="flex flex-col justify-between w-full pb-4">
                        					<div className="flex justify-between w-full pb-2 space-x-2">
                        						<div className="space-y-1">
                        							<h3 className="text-lg font-semibold leading-snug sm:pr-8">The Midnight Garden</h3>
                        							<p className="text-sm text-gray-400">Top Seller</p>
                        						</div>
                        						<div className="text-right">
                        							<p className="text-lg font-semibold">999.95€</p>
                        							<p className="text-sm line-through text-gray-600">1509€</p>
                        						</div>
                        					</div>
                                            <div>
                                              <p className=" font-mono">Lauren Asher</p>
                                              <div className=" mt-2 rating">
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input
                                                 type="radio"
                                                 name="rating-2"
                                                 className="mask mask-star-2 bg-orange-400"
                                                 defaultChecked />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                             </div>

                                            </div>
                        					
                        				</div>
                        			</div>
                        		</li>
                        		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        			<div className="flex w-full space-x-2 sm:space-x-4">
                        				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src="https://demo.templatesjungle.com/bookly/images/product-item3.png" />
                        				<div className="flex flex-col justify-between w-full pb-4">
                        					<div className="flex justify-between w-full pb-2 space-x-2">
                        						<div className="space-y-1">
                        							<h3 className="text-lg font-semibold leading-snug sm:pr-8">Shadow of the Serpent</h3>
                        							<p className="text-sm text-gray-400">Top Seller</p>
                        						</div>
                        						<div className="text-right">
                        							<p className="text-lg font-semibold">888.99€</p>
                        							<p className="text-sm line-through text-gray-600">1500.99€</p>
                        						</div>
                        					</div>
                                            <div>
                                              <p className=" font-mono">Lauren Asher</p>
                                              <div className=" mt-2 rating">
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input
                                                 type="radio"
                                                 name="rating-2"
                                                 className="mask mask-star-2 bg-orange-400"
                                                 defaultChecked />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                             </div>

                                            </div>
                        					
                        				</div>
                        			</div>
                        		</li>
                        	</ul>
                        </div>
                  </div>

                  {/* ------------------------------------------------- */}
                  {/* ------------------------------------------------- */}



                 </div>

              </div>



            </div>
            
        </div>
    );
};

export default Books;