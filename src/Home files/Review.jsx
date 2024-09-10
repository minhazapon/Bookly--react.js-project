


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';



const Review = () => {

    return (
        <div className=" mb-10 mt-10 ">

            <div className=''>






            <div className=' bg-no-repeat bg-cover p-32 '

                style={{
                    backgroundImage: "url(https://img.freepik.com/premium-photo/pink-blue-colored-background-with-rainbow-colored-background_946021-90541.jpg?w=826)",
                  }}
                
                >
                <div>
                    <p  className=' text-center text-4xl font-mono mb-10'>Customers reviews</p>
                </div>
                 <div>              
                 <>
                   <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    
                     <SwiperSlide>
                        
                        <div className=' flex justify-center'>

                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
                        	<div className="flex justify-between p-4">
                        		<div className="flex space-x-4">
                        			<div>
                        				<img src="https://img.freepik.com/free-photo/waist-up-shot-serious-unshaven-young-man-gets-knowledge-from-scientific-book-wears-spectacles-good-vision-being-diligent-pupil_273609-24124.jpg?t=st=1725962801~exp=1725966401~hmac=2435cef803645adb4d6c597705e734f350e1e945a89db4ebc9376adfe43d2dbd&w=740" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                        			</div>
                        			<div>
                        				<h4 className="font-bold">Leroy Jenkins</h4>
                        				<span className="text-xs text-gray-400">2 days ago</span>
                        			</div>
                        		</div>
                        		<div className="flex items-center space-x-2 text-yellow-500">
                        			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        			</svg>
                        			<span className="text-xl font-bold">4.5</span>
                        		</div>
                        	</div>
                        	<div className="p-4 space-y-2 text-sm text-gray-400">
                        		<p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                        		<p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                        	</div>
                        </div>

                        </div>
                        
                     </SwiperSlide>
                     <SwiperSlide>
                    
                     <div className=' flex justify-center'>

                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
                            <div className="flex justify-between p-4">
                                <div className="flex space-x-4">
                                    <div>
                                        <img src="https://img.freepik.com/free-photo/portrait-smiling-male-student-holding-books_171337-9123.jpg?t=st=1725962951~exp=1725966551~hmac=6b0ec2cfb00b84fe580ce4d9e6cd07f846dd834bd9b00b9183ce72b712187d6b&w=740" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">John</h4>
                                        <span className="text-xs text-gray-400">2 days ago</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 text-yellow-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                    </svg>
                                    <span className="text-xl font-bold">4.5</span>
                                </div>
                            </div>
                            <div className="p-4 space-y-2 text-sm text-gray-400">
                                <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                                <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                            </div>
                        </div>
                        </div>
                
                     </SwiperSlide>
                     <SwiperSlide>
                    
                     <div className=' flex justify-center'>

                    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="https://img.freepik.com/free-photo/man-reading-book-white-background_1368-4241.jpg?t=st=1725963013~exp=1725966613~hmac=8a9e8fb927ef849629fa80f4234d0ebeec90972c3065d61c918fdff6a3e9339c&w=740" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Thomas</h4>
                                    <span className="text-xs text-gray-400">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                </svg>
                                <span className="text-xl font-bold">4.5</span>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm text-gray-400">
                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                            <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                        </div>
                    </div>
                    </div>
                
                     </SwiperSlide>
                    
                     <SwiperSlide>
                    
                     <div className=' flex justify-center'>

                    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="https://img.freepik.com/free-photo/man-reading-book-indoors-front-view_23-2149887838.jpg?t=st=1725963147~exp=1725966747~hmac=9fc9f31f4810982ea5585acbfadf618d45f0c772010bbc3703e6e5344a0e29ef&w=360" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Deo</h4>
                                    <span className="text-xs text-gray-400">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                </svg>
                                <span className="text-xl font-bold">4.5</span>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm text-gray-400">
                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                            <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                        </div>
                    </div>
                    </div>
                
                     </SwiperSlide>
                    
                     <SwiperSlide>
                 
                
                     <div className=' flex justify-center'>

                    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="https://img.freepik.com/free-photo/student-smiling-while-doing-homework_1149-394.jpg?t=st=1725963050~exp=1725966650~hmac=6985f0c7e1b7e00f86cf729c8134c1a5bb6b9ef9297872ea98ad4cc4aa5f3568&w=740" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Rock</h4>
                                    <span className="text-xs text-gray-400">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                </svg>
                                <span className="text-xl font-bold">4.5</span>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm text-gray-400">
                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                            <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                        </div>
                    </div>
                    </div>
                
                     </SwiperSlide>
                    
                     <SwiperSlide>
                   
                     <div className=' flex justify-center'>

                    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="https://img.freepik.com/premium-photo/man-with-beard-is-holding-book-his-hands_1262781-61843.jpg?w=740" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Loren Jo</h4>
                                    <span className="text-xs text-gray-400">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                </svg>
                                <span className="text-xl font-bold">4.5</span>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm text-gray-400">
                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                            <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                        </div>
                    </div>
                    </div>
                
                     </SwiperSlide>
                    
                   </Swiper>
                 </>
                
                
                 </div>


             </div>

            </div>
            
        </div>
    );
};

export default Review;