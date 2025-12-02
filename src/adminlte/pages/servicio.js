import React from 'react';
import NavBarPrincipal from './components/navbar';
import SideMenu from './components/sidemenu';
import Footer from "./components/footer";
import DetalleServicio from "./components/servicios_details";

function Servicio(){
    return(
        <div>
            <NavBarPrincipal />
            <SideMenu/>
            <DetalleServicio/>
            <Footer/>
        </div>
    );
}

export default Servicio;