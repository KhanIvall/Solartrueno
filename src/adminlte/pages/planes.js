import React from 'react';
import NavBarPrincipal from "./components/navbar";
import SideMenu from "./components/sidemenu";
import Footer from "./components/footer";
import ListaPlanes from "./components/lista_planes";

function Planes(){
    return(
        <div>
            <NavBarPrincipal />
            <SideMenu/>
            <ListaPlanes/>
            <Footer/>
        </div>
    );
}

export default Planes;