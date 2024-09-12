


const BlogsDetails = ({user}) => {
    
    const {img, title, para, details} = user

    return (
        <div>

            <div className=" transition duration-300 ease-in-out hover:scale-110 card bg-base-100 w-[400px] h-[500px] shadow-xl">
              <figure>
                <img className=" h-[300px] w-[400px]"
                  src={img}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-blue-600 ">{title}</h2>
                <p className=" text-pink-600 font-thin"> {para} </p>
                <p className=" font-thin"> {details} </p>
                
              </div>
            </div>
            
        </div>
    );
};

export default BlogsDetails;