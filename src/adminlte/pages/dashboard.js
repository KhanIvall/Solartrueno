import React from "react";
import NavBarPrincipal from "./components/navbar";
import SideMenu from "./components/sidemenu";
import Footer from "./components/footer";
import Bienvenida from "./components/bienvenida";

function DashboardHome(){
    return(
        <div>
            <NavBarPrincipal />
            <SideMenu/>
            <Bienvenida/>
            <Footer/>
        </div>
    );
}

export default DashboardHome;