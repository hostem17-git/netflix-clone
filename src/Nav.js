import React, { useState, useEffect } from 'react'
import "./Nav.css"


function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 75) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        });
        return () => {
            try { window.removeEventListener("scroll"); }
            catch
            {

            }
        }
    }, []);

    return (
        <div className={`navbar ${scrolled && "navbar-black"}`} >
            <img className="navbar-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix-logo" />
            <img className="navbar-avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
        </div>
    )
}
export default Nav
