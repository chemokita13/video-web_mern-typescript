import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer
            className="d-flex justify-content-center align-items-center border-top bg-dark"
            style={{ height: '2.5cm' }}
        >
            <div className="link-dark text-decoration-none">
                <button className="btn btn-outline-light" id="gh-btn">
                    <a href="https://github.com/chemokita13">GitHub</a>
                </button>
            </div>
        </footer>
    );
}

export default Footer;
