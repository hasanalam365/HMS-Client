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
                                <a
                                    href="https://wa.me/+14036941173"
                                    target="_blank"
                                    rel="noopener noreferrer"

                                    className="hover:text-orange-600 hidden md:block lg:block"
                                >
                                    <FaWhatsappSquare className="text-3xl text-green-600 bg-white " />
                                </a>
                            </div>
                        </div>

                    </div>
                </nav>
                <nav className="">
                    <h6 className="footer-title">Services</h6>
                    <div className="flex flex-col gap-2 ">
                        <a className="link link-hover">
                            <Link to='/brands'>Brands</Link>
                        </a>
                        <a className="link link-hover">Blogs</a>
                        <a className="link link-hover">Categories</a>
                        <a className="link link-hover">Service Center</a>
                        <a className="link link-hover">return policy</a>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button  onClick={()=>document.getElementById('my_modal_5').showModal()}>return policy</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <h3 className="text-lg font-bold">📦 Shipping & Delivery Policy</h3>
                                <div className="py-4">
                               
Delivery Time:
We aim to deliver your order within 2 to 5 business days depending on your location.

Shipping Charges:

Inside Dhaka: 10 USD

Outside Dhaka: 120 USD
Free shipping on orders over 5,000 USD.

Order Processing:
Orders are processed within 24 hours after confirmation. You will receive a tracking ID once your order is shipped.
<h3 className="text-lg font-bold mt-2">🔁 Return & Replacement Policy</h3>

7-Day Return Policy:
You can return your product within 7 days of delivery if:

The product is damaged, defective, or not as described

You received a wrong item

<h3 className="text-lg font-bold mt-2">Return Conditions:</h3>


Product must be unused, in original condition, and with all original packaging and accessories.

Return request must be made within 7 days of receiving the product.

Refunds or replacements will be processed after we receive and inspect the returned product.

<h3 className="text-lg font-bold mt-2">Non-Returnable Items:</h3>


Software, gift cards, or items with physical damage not reported within 24 hours.

Any item that shows signs of use or physical damage after delivery.

<h3 className="text-lg font-bold mt-2">💰 Refund Policy</h3>

Refunds will be processed to the original payment method within 7-10 business days.

For Cash on Delivery (COD) orders, refunds will be sent via mobile banking or bank transfer.

                                   <p  className="mt-2"></p> 
                                    📞 Need Help?
                                    <br />
For any questions or return requests, please contact our support team at:
📧 support@yourtechstore.com
📞 01234-567890 (10 AM – 8 PM)
    </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
                        
                    </div>

                </nav>
                <nav className="">
                    <h6 className="footer-title">Company</h6>
                    <div className="flex flex-col gap-2 ">
                        <a className="link link-hover">About us</a>
                        <a
                            href="https://wa.me/+14036941173"
                            target="_blank"
                            rel="noopener noreferrer"

                            className="link link-hover"
                        >
                            Support us
                        </a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Baby kit</a>
                    </div>
                    

                </nav>


            </footer>
            <div className="text-center mb-[52px] md:mb-0 ">
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;