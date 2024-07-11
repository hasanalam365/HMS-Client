import { FaUser } from "react-icons/fa6";
import { MdKey } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Register = () => {

    const { signUpUser, signOutUser, user } = useAuth()
    const [openPassword, setOpenPassword] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(user)

    const axiosPublic = useAxiosPublic()

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        signUpUser(email, password)
            .then(async (result) => {

                if (result.user) {

                    toast("Register Successfully!")


                }

                signOutUser()
                navigate("/login")
            })
            .catch(() => {
                toast.error("User already exists")
            })
    }



    return (
        <div className=" bg-base-300 min-h-screen p-8">
            <div className="w-[95%] md:w-1/2 lg:w-[40%] mx-auto ">

                <div className="card bg-base-100   ">
                    <h3 className="text-2xl font-semibold text-center mt-2">Sign Up</h3>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="input input-bordered flex items-center gap-2">
                                <FaUser></FaUser>
                                <input type="email" className="grow"
                                    name="email" placeholder="Email" />

                            </label>

                        </div>
                        <div className="form-control">
                            <label className="input input-bordered flex items-center gap-2">
                                <MdKey ></MdKey >
                                <input type={`${openPassword ? 'text' : 'password'}`} className="grow"
                                    name="password" placeholder="Password" />
                                {
                                    !openPassword ? <button onClick={() => setOpenPassword(true)}>
                                        <FaRegEye></FaRegEye>
                                    </button>
                                        :
                                        <button onClick={() => setOpenPassword(false)}>
                                            <FaEyeSlash></FaEyeSlash>
                                        </button>
                                }

                            </label>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Sign Up</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    {/* <button onClick={handleGoogleLogin} className="border-2 w-3/4 md:w-3/4 lg:w-3/4 mx-auto rounded-lg p-2 mb-3">
                        <div className="flex gap-3 items-center justify-center ">
                            <FcGoogle className="text-2xl"></FcGoogle>
                            <h5 className="text-lg">Continue with Google</h5>
                        </div>
                    </button> */}
                    <div className=" w-3/4 md:w-3/4 lg:w-3/4 mx-auto rounded-lg p-2 mb-3">
                        <div className="flex gap-1 items-center justify-center ">

                            <h5 className="">Don't have any account ?</h5>
                            <span> Please</span>
                            <Link to="/login" className="text-blue-600">Login</Link>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Register;