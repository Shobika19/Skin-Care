import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  ">
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/" style={{ color: 'goldenrod', fontSize: '25px', marginLeft: '50px' }}>Shankara</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav" >
                        <ul className="navbar-nav navbar-nav me-auto mb-2" style={{ fontSize: '19px', fontWeight: 'bolder', marginLeft:'150px',Top:'5px', }}>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Nopages">No Pages</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Login">Login</Link>
                            </li>
                        </ul>
                        <div className='icons' style={{marginRight:'150px', paddingRight:'10px'}}>

                            <span className="material-icons" style={{ color: 'goldenrod', fontSize: '30px' }}>
                                search
                            </span>
                            <span class="material-icons" style={{ color: 'goldenrod', fontSize: '30px' }}>local_mall</span>
                            <span class="material-icons" style={{ color: 'goldenrod', fontSize: '30px' }} >person</span>
                        </div>




                    </div>
                </div>

            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;

