import React from 'react';
import '../css/Nav.css';

const Navbar = (props) => {

    return(
        <div className = "nav-container">
            <div className="navbar-main">
                <div className="nav-link">
                    <strong>
                        <span className="nav-link" id="add" onClick={props.add}>Create task</span>
                    </strong>
                </div>
                <div className="nav-link  nav-right">
                    <strong>
                        <span href="https://github.com/PratikGarai/TodoV3" target="_blank" className="nav-link" id="add" onClick={props.add}>Go to code</span>
                    </strong>
                </div>
            </div>
        </div>       
    );
}

export default Navbar;