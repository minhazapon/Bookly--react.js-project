
import {Link} from 'react-router-dom'

const Post = () => {
    return (
        <div className=" mt-20 mb-10 ml-5 mr-5">

            <div>


            <div className=' ml-10 mr-10 flex items-center justify-between '>
                <p className=' text-3xl  font-mono'>Latest posts</p>

				<Link to="/blogs" >
				<div>
                 <a href="#_" class=" mt-5  relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#ad2828] rounded-full shadow-md group">
                 <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ad2828] group-hover:translate-x-0 ease">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                 </span>
                 <span class="absolute flex items-center justify-center w-full h-full text-[#ad2828] font-mono transition-all duration-300 transform group-hover:translate-x-full ease">View All</span>
                 <span class="relative invisible font-mono ">View All</span>
                 </a>
                </div>     
				</Link>         
                       
             </div>
              


              {/* -----------blogs parts--------------------- */}
             <div className=" "
             
             >


                <section className="py-6 sm:py-12  text-gray-100">
            	<div className="container p-6 mx-auto space-y-8">
            		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            			<article className=" transition duration-300 ease-in-out hover:scale-110 flex flex-col  text-black border-[1px] border-gray-400 p-5">
            				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
            					<img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://demo.templatesjungle.com/bookly/images/post-item1.jpg" />
            				</a>
            				<div className="flex flex-col flex-1 p-6">
            					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
            					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-[#ad2828]">Books</a>
            					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">10 Must-Read Books of the Year: Our Top Picks!</h3>
            					<h3 className="flex-1 py-2 text-lg  font-mono leading-snug">Dive into the world of cutting-edge technology with our latest blog post, where we highlight five essential gadge.</h3>
            					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
            						<span>June 1, 2020</span>
            						<span>2.1K views</span>
            					</div>
            				</div>
            			</article>
            			<article className=" transition duration-300 ease-in-out hover:scale-110 flex flex-col  text-black border-[1px] border-gray-400 p-5">
            				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
            					<img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://demo.templatesjungle.com/bookly/images/post-item2.jpg" />
            				</a>
            				<div className="flex flex-col flex-1 p-6">
            					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
            					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-[#ad2828]">Books</a>
            					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">The Fascinating Realm of Science Fiction</h3>
            					<h3 className="flex-1 py-2 text-lg  font-mono leading-snug">Explore the intersection of technology and sustainability in our latest blog post. Learn about the innovative</h3>
            					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
            						<span>June 1, 2020</span>
            						<span>2.1K views</span>
            					</div>
            				</div>
            			</article>
            			<article className=" transition duration-300 ease-in-out hover:scale-110 flex flex-col  text-black border-[1px] border-gray-400 p-5">
            				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
            					<img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://demo.templatesjungle.com/bookly/images/post-item3.jpg" />
            				</a>
            				<div className="flex flex-col flex-1 p-6">
            					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
            					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-[#ad2828]">Books</a>
            					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Finding Love in the Pages of a Book</h3>
            					<h3 className="flex-1 py-2 text-lg  font-mono leading-snug">Stay ahead of the curve with our insightful look into the rapidly evolving landscape of wearable technology. </h3>
            					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
            						<span>June 1, 2020</span>
            						<span>2.1K views</span>
            					</div>
            				</div>
            			</article>
            			<article className=" transition duration-300 ease-in-out hover:scale-110 flex flex-col  text-black border-[1px] border-gray-400 p-5">
            				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
            					<img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://demo.templatesjungle.com/bookly/images/post-item4.jpg" />
            				</a>
            				<div className="flex flex-col flex-1 p-6">
            					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
            					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-[#ad2828]">Books</a>
            					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Reading for Mental Health: How Books Can Heal and Inspire</h3>
            					<h3 className="flex-1 py-2 text-lg  font-mono leading-snug">In today's remote work environment, productivity is key. Discover the top apps and tools that can help you stay </h3>
            					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
            						<span>June 1, 2020</span>
            						<span>2.1K views</span>
            					</div>
            				</div>
            			</article>
            		</div>
            	</div>
            </section>
            
        
             </div>

            </div>
            
        </div>
    );
};

export default Post;