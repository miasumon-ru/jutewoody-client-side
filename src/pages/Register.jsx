import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Helmet } from "react-helmet";





const Register = () => {

    // from AuthProvider


    const { createUser, profileUpdate, logOut } = useContext(AuthContext)

    // from react hook form

    const {
        register,
        handleSubmit

    } = useForm()

    //   hook

    const navigate = useNavigate()


    //  handleRegister

    const handleRegister = (data, e) => {

        const { name, email, photoURL, password } = data

        console.log(name, email, photoURL, password)

        // password validation
        if (!/[A-Z]/.test(password)) {
            return toast.error(" At least one uppercase letter is needed in the password field ")
        }
        else if (!/[a-z]/.test(password)) {
            return toast.error("At least one lower case letter is needed in the password field")
        }
        else if (password.length < 6) {
            return toast.error("Password must be at least 6 characters")
        }

        // create User
        createUser(email, password)
            .then(result => {

                console.log(result.user)

                profileUpdate({
                    displayName: name,
                    photoURL: photoURL
                })

                toast.success("  Successful Registration and Please Login ")



                // reset the form

                console.log(e.target.reset())


                // logOut after registration

                logOut()
                    .then(() => {
                        console.log('LogOut is successfull')
                    })

                // navigate to Login Page after successful Login


                setTimeout(() => {
                    navigate('/login')
                }, 3000)









            })
            .catch(error => {

                if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                    toast.error("You have aleady used this email")
                }
                console.log(error.message)
            })





    }

    return (
        <div className="hero min-h-screen">

            <Helmet>
                <title> Register | JuteWoody </title>
            </Helmet>

            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-10">Register Now</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm border  bg-base-100">
                    <form onSubmit={handleSubmit(handleRegister)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name")} placeholder="Your Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} placeholder="Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photoURL")} placeholder="Photo URL" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password")} placeholder="password" className="input input-bordered" required />

                        </div>

                        <div className="form-control mt-6">

                            <button className="btn  bg-[#565264] hover:bg-[#393644] text-white  ">Register</button>

                            {/* <input className="btn btn-primary"  type="Submit" /> */}
                        </div>

                        <div className="text-center mt-2">
                            <p className="font-semibold" > Already have an account ? </p>
                            <p className="font-semibold">Please <span className="underline text-xl ml-2"> <Link to={'/login'}> Login </Link> </span> </p>
                        </div>
                    </form>

                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Register;