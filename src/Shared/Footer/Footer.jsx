import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-base-300">
            <footer className="grid md:grid-cols-3 lg:grid-cols-3  text-base-content p-10 gap-10">
                <nav>
                    {/* <h6 className="footer-title">Social</h6> */}
                    <Link to="/" className="">
                        <img className="w-[100px] h-[50px]" src="/logo.png" alt="" />
                    </Link>
                    <div className="grid grid-flow-col gap-4">
                        <div className="space-y-3">
                            <h4>HRM is the largest Eco Product importer
                                and Distributor in Bangladesh and now holds
                                the leading position in the ecosystem industry.</h4>
                            <div className="flex gap-5">
                                <FaFacebook className="text-3xl"></FaFacebook>
                                <FaInstagram className="text-3xl"></FaInstagram>
                                <FaWhatsappSquare className="text-3xl"></FaWhatsappSquare>
                            </div>
                        </div>

                    </div>
                </nav>
                <nav className="">
                    <h6 className="footer-title">Services</h6>
                    <div className="flex flex-col gap-2 ">
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>

                </nav>
                <nav className="">
                    <h6 className="footer-title">Company</h6>
                    <div className="flex flex-col gap-2 ">
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>

                </nav>


            </footer>
            <div className="text-center mb-[52px] md:mb-0 ">
                <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;