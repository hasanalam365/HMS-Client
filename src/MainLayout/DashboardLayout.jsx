import { Outlet } from "react-router-dom";
import DashboardNav from "../Dashboard/Dashboard/DashboardNav";

const DashboardLayout = () => {
    return (
        <div className="md:flex md:gap-10">
            <div className="hidden md:block">
                <DashboardNav></DashboardNav>
            </div>

            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashboardLayout;