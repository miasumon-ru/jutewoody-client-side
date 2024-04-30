import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../providers/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { Helmet } from "react-helmet";



const Login = () => {

    // from AuthProvider

    const { signIn, loginWithGoogle, loginWithGithub } = useContext(AuthContext)



    // from react hook form

    const {
        register,
        handleSubmit

    } = useForm()

    //   handle Login

    const handleLogin = (data, e) => {

        const { email, password } = data

        console.log(email, password)

        // signIn

        signIn(email, password)
            .then(result => {
                console.log(result.user)

                toast.success("Login is successful")

                e.target.reset()
            })
            .catch(() => {

                toast.error("Please provide correct Email and Password")

            })

    }

    // handle Google Login

    const handleGoogleLogin = () => {

        loginWithGoogle()
            .then(result => {
                console.log(result.user)

                toast.success("Login is successful")
            })
            .catch(error => {
                console.log(error.message)
            })




    }

    // handle github login

    const handleGithubLogin = () => {
        loginWithGithub()
            .then(result => {
                console.log(result.user)
                toast.success("Login is successful")
            })
            .catch(error => {
                console.log(error.message)
            })
    }



    return (
        <div className="hero min-h-screen  ">

            <Helmet>
                <title> Login | JuteWoody </title>
            </Helmet>

            <div className="hero-content flex-col  ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-10">Login now</h1>


                </div>
                <div className="card shrink-0 w-full max-w-sm border bg-base-100">

                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password")} placeholder="Password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#565264] hover:bg-[#393644] text-white  ">Login</button>
                        </div>

                        <div className="my-6">



                            <p onClick={handleGoogleLogin} className="btn bg-[#f8f7f4] hover:bg-[#efebde] mb-2 w-full"> <FaGoogle className="text-xl mr-2" /> Sign In with Google  </p>

                            <p onClick={handleGithubLogin} className="btn bg-[#f8f7f4] hover:bg-[#efebde] w-full"> <FaGithub className="text-xl mr-2" /> Sign In with Github  </p>

                        </div>

                        <div className="text-center">
                            <p className="font-semibold" > Do not have an account ? </p>
                            <p className="font-semibold" > Please <span className="text-xl font bold underline ml-2" > <Link to={'/register'}> Register </Link> </span> </p>
                        </div>
                    </form>

                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Login;