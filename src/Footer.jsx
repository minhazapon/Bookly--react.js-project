


const Footer = () => {
    return (
        <div className=" mt-20">


            <div className=" bg-pink-50 p-20 flex justify-center">
             <div className=" grid  md:grid-cols-4 gap-10 ">
             <div>
                <div className=" flex items-center">
                <img className=" h-[70px]" src="https://cdn-icons-png.flaticon.com/128/207/207114.png" alt="" />
                <a className=" font-mono font-semibold text-5xl">ook<span className="  text-[#ad2828] ">ly</span></a>
                </div>
                <p className=" font-mono mt-5">A bookstore is a store <br></br>that sells books,<br></br> and where<br></br> people can buy them.<br></br> A used bookstore</p>
                <div className=" mt-5  flex items-center gap-5 ">
                    <img className=" h-[30px]" src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="" />
                    <img className=" h-[30px]" src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt="" />
                    <img className=" h-[30px]" src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="" />
                    <img className=" h-[30px]" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
                    <img className=" h-[30px]" src="https://cdn-icons-png.flaticon.com/128/5968/5968852.png" alt="" />
                </div>
             </div>
             <div>
                <p className=" text-2xl font-thin">Quick Links</p>
                <div className=" mt-2">
                    <p className=" font-thin">Home</p>
                    <p className=" mt-1 font-thin">About</p>
                    <p className=" mt-1 font-thin">Shop</p>
                    <p className=" mt-1 font-thin">Blogs</p>
                    <p className=" mt-1 font-thin">Contacts</p>
                </div>
             </div>
             <div>
                <p className=" text-2xl font-thin">Help & Info Help</p>
                <div className=" mt-2">
                    <p className=" font-thin">Track Your Order</p>
                    <p className=" mt-1 font-thin">Returns Policies</p>
                    <p className=" mt-1 font-thin">Shipping + Delivery</p>
                    <p className=" mt-1 font-thin">Contact Us</p>
                    <p className=" mt-1 font-thin">Faqs</p>
                </div>
             </div>
             <div>
                <p className=" text-2xl font-thin">Contact Us</p>
                <div className=" mt-2">
                    <p className=" font-thin">Do you have any queries or<br></br> suggestions?<br></br> <span><a className="link link-secondary">yourinfo@gmail.com</a></span></p>
                    <p className=" mt-1 font-thin">If you need support? Just give<br></br> us a call.<span><a className="link link-accent">+55 111 222 333 44</a></span></p>
                </div>
             </div>
             </div>
            </div>
            <hr></hr>
            <footer className="footer footer-center  bg-pink-50 text-base-content p-4">
              <aside>
                <div className=" flex-col md:flex-row lg:flex-row flex items-center justify-center gap-20">
                    <div className="  -ml-28 flex items-center gap-1">
                        <p className=" font-thin">We ship with:</p>
                        <img className="" src="https://demo.templatesjungle.com/bookly/images/dhl.png" alt="" />
                        <img className="" src="https://demo.templatesjungle.com/bookly/images/shippingcard.png" alt="" />
                    </div>
                    <div className=" flex items-center gap-1">
                        <p className=" font-thin">Payment options:</p>
                        <img className="" src="https://demo.templatesjungle.com/bookly/images/visa.jpg" alt="" />
                        <img className="" src="https://demo.templatesjungle.com/bookly/images/mastercard.jpg" alt="" />
                        <img className="" src="https://demo.templatesjungle.com/bookly/images/paypal.jpg" alt="" />
                    </div>
                    <div>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Minhazul abedin apon</p>
                    </div>
                </div>
              </aside>
            </footer>


            
        </div>
    );
};

export default Footer;