import { Outlet } from "react-router-dom";
import DashboardNav from "../Dashboard/Dashboard/DashboardNav";
import { useState } from "react";

const DashboardLayout = () => {
    const [isOpenNav, setIsOpenNav] = useState(true)

    return (
        <div className="flex flex-col md:flex-row">
            <div className=" ">
                <DashboardNav isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav}></DashboardNav>
            </div>

            <div className={`${isOpenNav && 'hidden'}  w-full px-0 md:px-12`}>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashboardLayout;