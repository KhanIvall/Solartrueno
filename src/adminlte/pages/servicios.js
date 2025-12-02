import React from 'react';
import NavBarPrincipal from "./components/navbar";
import SideMenu from "./components/sidemenu";
import Footer from "./components/footer";
import ListaPlanes from "./components/lista_servicios";

function Servicios(){
    return(
        <div>
            <NavBarPrincipal />
            <SideMenu/>
            <ListaPlanes/>
            <Footer/>
        </div>
    );
}

export default Servicios;