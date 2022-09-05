import React from "react";
import List from "./List";

const Nav = (props) => {

    const listList = [];



    for (let index = 0;index < props.listOfOptions.length;index++) {
        listList.push(<List listValue={props.listOfOptions[index]} key={index} />);
    }

    return (
        <nav style={{background:props.backgroundColor, color:props.textColor}}>
            <ul>
                {listList}
            </ul>
        </nav>
    )
}

export default Nav;