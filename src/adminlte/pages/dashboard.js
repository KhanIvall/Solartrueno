import React from "react";
import NavBarPrincipal from "./components/navbar";
import SideMenu from "./components/sidemenu";
import Footer from "./components/footer"

function DashboardHome(){
    return(
        <div>
            <NavBarPrincipal />
            <SideMenu/>

            <Footer/>
        </div>
    );
}

export default DashboardHome;