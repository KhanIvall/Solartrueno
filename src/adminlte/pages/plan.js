import React from 'react';
import NavBarPrincipal from './components/navbar';
import SideMenu from './components/sidemenu';
import Footer from "./components/footer";
import DetallePlan from "./components/plan_details";

function Plan(){
    return(
        <div>
            <NavBarPrincipal />
            <SideMenu/>
            <DetallePlan/>
            <Footer/>
        </div>
    );
}

export default Plan;