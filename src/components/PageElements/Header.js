import React from "react";
//import generalClasses from './GeneralStyles.module.css';
import headerClasses from './Header.module.css';

const Header = (props) => {
    return (
        <header style={{background:props.backgroundColor, color:props.textColor}} className={headerClasses.header}>
            <h1>
                {props.heading}
            </h1>
        </header>
    )
}

export default Header;