import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'



const Navbar = () => {

    const { logOut, user, loading } = useContext(AuthContext)

    // toggle functionality
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")))


    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))

        const localTheme = localStorage.getItem("theme")


        document.querySelector("html").setAttribute("data-theme", JSON.parse(localTheme))

        if(JSON.parse(localStorage.getItem("theme")) == "dark"){
            document.querySelector("body").setAttribute("style" , "color:white")
        }
        else{
            document.querySelector("body").setAttribute("style" , "color:black")
        }

        
 


    }, [theme])


    const handleToggle = (e) => {
        console.log(e.target.checked)

        if(e.target.checked){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }

    }

    // console.log(user.photoURL)

    // handle LogOut

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('LogOut is successfull')
            })
    }




    const navLinks = <>

        <li className="font-semibold mr-2 " > <NavLink

            style={({ isActive }) => {
                return {

                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "#565264" : "",
                    color: isActive && "white"


                }

            }}

            to={'/'}> Home </NavLink> </li>

        <li className="font-semibold mr-2"> <NavLink

            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "#565264" : "",
                    color: isActive && "white"

                }

            }}


            to={'/craftsAll'}> All Art & Craft Items </NavLink></li>

        <li className="font-semibold mr-2"> <NavLink


            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "#565264" : "",
                    color: isActive && "white"
                }

            }}


            to={'/craftsAdd'}> Add Craft Item </NavLink></li>

        <li className="font-semibold mr-2"> <NavLink

            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "#565264" : "",
                    color: isActive && "white"
                }

            }}


            to={`/myCraftsList/${user?.email}`}> My Art & Craft List </NavLink></li>

        <li className="font-semibold mr-2"> <NavLink

            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "#565264" : "",
                    color: isActive && "white"
                }

            }}

            to={'/register'}> Register </NavLink></li>
        {/* <li> <NavLink to={'/login'}> Login </NavLink></li> */}

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52 space-y-2 ">

                        {navLinks}

                    </ul>
                </div>
                <a className="btn btn-ghost text-sm font-bold lg:text-xl bg-gradient-to-r from-[#5c566e] via-[#54b226] to-[#494d58] text-transparent bg-clip-text"> JuteWoody Crafts </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">

                    {navLinks}

                </ul>
            </div>
            <div className="navbar-end">

                <label className="swap swap-rotate mr-2">

                    {/* this hidden checkbox controls the state */}
                    <input onChange={handleToggle} type="checkbox" className="theme-controller" value="dark" />

                    {/* sun icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>



                {
                    user ?
                        <div className="flex flex-row gap-4 items-center">


                            <a data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName || user?.reloadUserInfo?.providerUserInfo[0]?.screenName} >
                                <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="userImage" />
                            </a>


                            <button onClick={handleLogOut} className="btn bg-[#565264] hover:bg-[#393644] text-white "> LogOut </button>
                        </div>

                        :
                        <div>


                            {
                                loading ? <span className="loading loading-spinner loading-lg"></span>
                                    :
                                    <Link to={'/login'}>
                                        <button className="btn bg-[#565264] text-white hover:bg-[#393644]">
                                            Login
                                        </button>
                                    </Link>
                            }



                        </div>

                }

                <Tooltip id="my-tooltip" />




            </div>
        </div>
    );
};

export default Navbar;