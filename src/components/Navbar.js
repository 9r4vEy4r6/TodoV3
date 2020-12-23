import React from 'react';

const Navbar = (props) => {

    return(
        <nav className="navbar sticky-top navbar-dark bg-primary">
            <a href="#" className="nav-link" onClick={props.add}>Add a task!</a>
        </nav>
    );
}

export default Navbar;