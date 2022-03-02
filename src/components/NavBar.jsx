import React from "react";
import Logo from "./Logo";
import { Link, Outlet } from "react-router-dom";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
const NavBar = ({brand}) => {
  return (
    <main>
        
      <nav className="flex justify-between items-center h-18 bg-[#374151] text-stone-50 relative shadow-sm px-4">
          <Logo />
      <Link to="/"  >{brand} </Link>
        <Link to="/user">User </Link>
        <Link to="/about">About </Link>
        
        
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default NavBar;
