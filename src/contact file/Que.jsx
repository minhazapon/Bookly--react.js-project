import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useForm } from "react-hook-form"


const Que = () => {

    const notifySuccess = () => toast.success("Contact SuccessFully");
    const notifyError = () => toast.error("Contact Failed");
  
    const onSubmit = async () => {
     
      
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e87151e8-7baa-471d-b58a-0bd71fe1cd67");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        notifySuccess();
        event.target.reset();
      } else {
        notifyError();
        setResult(data.message);
      }
    };
  
  
      const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm()
  
        const onForm = (data) => console.log(data)

    


    return (
        <div className=" mb-10 mt-10 ml-5 mr-5  ">

            <div className=" flex-col md:flex-row lg:flex-row flex justify-center gap-10">


             <div className=" flex justify-center">

             <div>
                <p className=" text-5xl font-mono">Contact info</p>
                <p className=" text-xl font-thin mt-5 ">Contact with Us and Join With Bookly</p>
                <div className=" mt-5 flex items-center gap-10 ">

                <div>
                <p className=" text-2xl font-bold ">Office</p>
                <div className=" mt-2">
                    <p className=" font-thin">730 Glenstone Ave 65802,<br></br> Springfield, US</p>
                    <p className=" mt-1 font-thin">+123 987 321</p>
                    <p className=" mt-1 font-thin">+123 123 654</p>
                    <p className=" mt-1 font-thin">info@yourinfo.com</p>
                </div>
                </div>

                <div>
                <p className=" text-2xl font-bold">Management
                 </p>
                <div className=" mt-2">
                    <p className=" font-thin">730 Glenstone Ave 65802,<br></br> Springfield, US</p>
                    <p className=" mt-1 font-thin">+123 987 321</p>
                    <p className=" mt-1 font-thin">+123 123 654</p>
                    <p className=" mt-1 font-thin">info@yourinfo.com</p>
                </div>
                </div>
                </div>
             </div>


             </div>
             

             {/* ---------------------------------------------- */}


             <div>

              <p className=" text-5xl font-mono" >Any questions?</p>
              <p className=" text-xl font-thin mt-5">Use the form below to get in touch with us.</p>

            
              <div className=" mt-10">


                   <form onSubmit={handleSubmit(onForm, onSubmit ) }>
                    <div>
                    <div className=" flex items-center gap-5">
                        <input placeholder="Enter Your Name Here"  required className=" p-2 rounded-lg border-[1px] border-gray-500 h-[50px] w-[200px]" name="name" type="text" {...register("name", { required: true })} />
                        {errors.text && <span>This field is required</span>}
                        <input placeholder="Enter Your Email Here" required className=" p-2 rounded-lg border-[1px] border-gray-500 h-[50px] w-[200px]"  type="email" name="email" {...register("email", { required: true })} id="" />
                        {errors.text && <span>This field is required</span>}
                    </div>
                    <div>
                        <input placeholder="Enter Your Number Here" required className=" mt-5 p-2 rounded-lg border-[1px] border-gray-500 h-[50px] w-[420px]" type="number" {...register("number", { required: true })} name="number" id="" />
                        {errors.text && <span>This field is required</span>}
                    </div>
                    <div>
                        <input placeholder="Enter Your Subject Here" required className=" mt-5 p-2 rounded-lg border-[1px] border-gray-500 h-[50px] w-[420px]" name="subject" {...register("subject", { required: true })} type="text" />
                        {errors.text && <span>This field is required</span>}
                    </div>
                    <div>
                        <textarea placeholder="Enter Your Message Here" required className=" mt-5 p-2 rounded-lg border-[1px] border-gray-500 h-[50px] w-[420px]"  name="message" {...register("message", { required: true })} id=""></textarea>
                        {errors.text && <span>This field is required</span>}
                    </div>
                    {/* <button>
                    <a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-black rounded-lg group">
                    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#00CCDD] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span class="relative w-[342px]">Submit</span>
                    </a>
                    </button> */}
                    <button className=' btn '>submit</button>
                    <ToastContainer></ToastContainer>
                    
                    </div>
                    </form>
                    </div>
                   </div>


            </div>
            
        </div>
    );
};

export default Que;



{/* <a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-black rounded-lg group">
                              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#00CCDD] rounded-full group-hover:w-56 group-hover:h-56"></span>
                              <span class="absolute inset-0  w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                              <span class="relative">Submit</span>
                              </a> */}