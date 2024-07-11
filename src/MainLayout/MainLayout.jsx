import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";
import { useState } from "react";
import 'animate.css/animate.css'

import CheckOutBOxCart from "../Shared/CheckOutBOxCart";

const MainLayout = () => {

    const [openCart, setOpenCart] = useState(false)




    return (
        <div>
            <div className="container mx-auto relative">
                <div className="">
                    <Navber setOpenCart={setOpenCart} openCart={openCart}></Navber>
                </div>

                <div className="  ">
                    {openCart && <CheckOutBOxCart setOpenCart={setOpenCart} openCart={openCart}></CheckOutBOxCart>}
                </div>

                <div className="min-h-[calc(100vh-334px)]">
                    <Outlet></Outlet>
                </div>

            </div>
            <div className="h-[268px]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;