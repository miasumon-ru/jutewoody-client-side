import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../providers/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Login = () => {

    // from AuthProvider

    const {signIn} = useContext(AuthContext)

    

    // from react hook form

    const {
        register,
        handleSubmit

      } = useForm()

    //   handle Login

    const handleLogin = (data, e) => {

        const {email, password} = data

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


    return (
        <div className="hero min-h-screen  ">
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
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <div>
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