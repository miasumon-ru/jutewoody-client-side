import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'



const Navbar = () => {

    const { logOut, user } = useContext(AuthContext)

    // console.log(user.photoURL)

    // handle LogOut

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('LogOut is successfull')
            })
    }

    const navLinks = <>

        <li> <NavLink to={'/'}> Home </NavLink></li>
        <li> <NavLink to={'/craftsAll'}> All Art & Craft Items </NavLink></li>
        <li> <NavLink to={'/craftsAdd'}> Add Craft Item </NavLink></li>
        <li> <NavLink to={'/myCraftsList'}> My Art & Craft List </NavLink></li>
        {/* <li> <NavLink to={'/login'}> Login </NavLink></li> */}
        <li> <NavLink to={'/register'}> Register </NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {navLinks}

                    </ul>
                </div>
                <a className="btn btn-ghost text-sm lg:text-xl"> JuteWoody Crafts </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navLinks}

                </ul>
            </div>
            <div className="navbar-end">



                {
                    user ? <div className="flex flex-row gap-4 items-center">


                        <a data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName || user?.reloadUserInfo?.providerUserInfo[0]?.screenName }>
                        <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="userImage" />
                        </a>


                        


                        <button onClick={handleLogOut} className="btn btn-primary"> LogOut </button>
                    </div>

                        :
                        <button className="btn btn-primary"> <Link to={'/login'}> Login </Link> </button>
                }

                <Tooltip id="my-tooltip" />




            </div>
        </div>
    );
};

export default Navbar;