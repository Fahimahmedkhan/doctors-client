import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { RiContactsFill } from 'react-icons/ri';
import { MdMeetingRoom } from 'react-icons/md';
import { FiLogIn, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li><Link to='/' className='btn btn-ghost normal-case mx-1'><FaHome />Home</Link></li>
        <li><Link className='btn btn-ghost normal-case mx-1'><MdMeetingRoom />Appointment</Link></li>
        <li><Link className='btn btn-ghost normal-case mx-1'><RiContactsFill />Contact Us</Link></li>
        <li><Link className='btn btn-ghost normal-case mx-1'><FiLogIn />Login</Link></li>
    </React.Fragment>

    return (
        <div className="navbar justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-400 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 px-4">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;