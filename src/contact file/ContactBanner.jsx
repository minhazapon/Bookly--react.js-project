import Marquee from "react-fast-marquee";



const ContactBanner = () => {
    return (
        <div className=" mt-10 mb-10 ml-5 mr-5">
           
           <Marquee>

           <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10">
              <div>
                <img className=" h-[400px]" src="https://cdn-icons-gif.flaticon.com/17569/17569446.gif" alt="" />
              </div>
              <div>
                <p className=" font-mono text-6xl text-[#00CCDD]  font-semibold">Contact With Us</p>
              </div>
            </div>

           </Marquee>
           
            
        </div>
    );
};

export default ContactBanner;