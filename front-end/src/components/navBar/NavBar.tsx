import React from 'react';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        My videos links
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    ></button>
                    <div className="navbar-nav ml-auto">
                        <Link
                            className="nav-link active ml-auto"
                            aria-current="page"
                            to="/new-video"
                        >
                            New video
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
