import React from "react";

function SideMenu() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">

            <a href="index3.html" className="brand-link">
                <img src='assets/images/imagotipo.png' alt='logo' style={{ width: '60px', margin: '3px' }} />
                <span className="brand-text font-weight-light">SolarTrueno</span>
            </a>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>
                
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        
                        <li className="nav-header">MENÚ PRINCIPAL</li>
                        
                        <li className="nav-item">
                            <a href="pages/examples/invoice.html" className="nav-link">
                                <i className="nav-icon fas fa-file-invoice" />
                                <p>Servicios</p>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="/plans" className="nav-link">
                                <i className="nav-icon fas fa-list-alt" />
                                <p>Planes</p>
                            </a>
                        </li>
                        
                    </ul>
                </nav>

            </div>

        </aside>

    );
}

export default SideMenu;