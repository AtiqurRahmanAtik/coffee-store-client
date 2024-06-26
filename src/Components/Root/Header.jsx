import { Link, NavLink } from "react-router-dom";


const Header = () => {

    const Links = <>
    
    <NavLink to='/'> <li><a className="text-2xl font-normal"> Home</a></li> </NavLink> 
    
   <NavLink to='/addcoffee'> <li><a className="text-2xl font-normal">Add Coffee</a></li> </NavLink> 
   <NavLink to='/updatecoffee'> <li><a className="text-2xl font-normal"> Update Coffee</a></li> </NavLink> 

   <NavLink to='/user'> <li><a className="text-2xl font-normal"> Coffee User</a></li> </NavLink> 


       
     
    </>
    return (
      
            <div className="navbar bg-teal-400">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      
      {Links}
      </ul>
    </div>
    <Link to='/' className="btn btn-primary text-xl ">Coffee Store</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      {Links}
    </ul>
  </div>


  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
       

       <Link to='/singIn'> <li><a>SingIn</a></li></Link>
      <Link to='/singUp'>  <li><a>SingUp</a></li></Link>
      </ul>
    </div>


</div>
        
    );
};

export default Header;