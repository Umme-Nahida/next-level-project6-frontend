import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";


const ComponentLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar></Navbar>
            <div className="grow-1">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ComponentLayout;