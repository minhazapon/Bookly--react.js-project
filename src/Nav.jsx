
 

import { NavLink } from "react-router-dom";

   


const Nav = () => {


    const navbar = <>
      
      <div className=" flex-col md:flex-row lg:flex-row flex items-center gap-10">

        <div className=" flex-col md:flex-row lg:flex-row  flex items-center gap-1">

          <li className=" font-mono" ><NavLink to='/' >HOME</NavLink></li>
          <li className=" font-mono" ><NavLink to='/about' >ABOUT</NavLink></li>
          <li className=" font-mono" ><NavLink to='/shop' >SHOP</NavLink></li>
          <li className=" font-mono" ><NavLink to='/blogs' >BLOGS</NavLink></li>
          <li className=" font-mono" ><NavLink to='/contact' >CONTACT</NavLink></li>

        </div>


        <div className=" flex-col md:flex-row lg:flex-row  flex items-start gap-2">
        <li><NavLink to='/search' ><img className=" h-[50px]" src="https://cdn-icons-gif.flaticon.com/16678/16678185.gif" alt="" /></NavLink></li>
        <li><NavLink to='/search' ><img className=" h-[50px]" src="https://cdn-icons-gif.flaticon.com/8717/8717910.gif" alt="" /></NavLink></li>
        <li><NavLink to='/search' ><img className=" h-[50px]" src="https://cdn-icons-gif.flaticon.com/9937/9937590.gif" alt="" /></NavLink></li>
        <li><NavLink to='/search' ><img className=" h-[50px]" src="https://cdn-icons-gif.flaticon.com/15576/15576198.gif" alt="" /></NavLink></li>
        </div>

      </div>
      
    
            
            
            
    </>

    



    return (
        <div>

            <div className="navbar bg-base-100 p-5  shadow-md ">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {navbar}

                  </ul>
                </div>
                <div className=" flex items-center">
                <img className=" h-[70px]" src="https://cdn-icons-png.flaticon.com/128/207/207114.png" alt="" />
                <a className=" font-mono font-semibold text-5xl">ook<span className="  text-[#ad2828] ">ly</span></a>
                </div>
                
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navbar}
                </ul>
              </div>
              
            </div>
            
        </div>


    );
};

export default Nav;