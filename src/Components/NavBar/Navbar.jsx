import { NavLink } from "react-router-dom";


const Navbar = () => {

    const nav = <>
    <li>
    <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " bg-white text-[#163020] rounded-none hover:bg-white hover:text-[#163020]" : " hover:bg-white hover:text-[#163020] rounded-none ml-3"
  }
>
  Home
</NavLink>
    </li>
      <li>
      <NavLink
  to="/phones"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " bg-white text-[#163020] rounded-none hover:bg-white hover:text-[#163020]" : " hover:bg-white hover:text-[#163020] rounded-none ml-3"
  }
>
  Phones
</NavLink>
      </li>
      <li><NavLink
  to="/cart"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " bg-white text-[#163020] rounded-none hover:bg-white hover:text-[#163020]" : " hover:bg-white hover:text-[#163020] rounded-none ml-3"
  }
>
  Cart
</NavLink></li>
      </>
    return (
        <div>
            <div className="navbar md:px-48  text-white font-primary bg-[#163020]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu text-xl menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {nav}
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl">Phone Universe</a>
  </div>
  <div className="navbar-center hidden text-2xl lg:flex">
    <ul className="menu menu-horizontal text-xl px-1">
      {nav}
    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;