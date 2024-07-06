import { FaUser } from "react-icons/fa6";
import { MdKey } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {

    const [openPassword, setOpenPassword] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
    }

    return (
        <div className=" bg-base-300 min-h-screen">
            <div className="w-[95%] md:w-3/4 lg:w-1/2 mx-auto ">

                <div className="card bg-base-100   ">
                    <h3 className="text-2xl font-semibold text-center mt-2"> Login</h3>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;