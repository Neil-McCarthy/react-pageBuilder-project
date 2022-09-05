import React from "react";
import List from "./List";




const ListCreator = (props) => {

    const listList = [];



    for (let index = 0;index < props.ListToCreate.length;index++) {
        listList.push(<List listValue={props.ListToCreate[index]} key={index} />);
    }
    // const ListToCreate = props.ListToCreate;
    // let keyValue = 0;
    // const finalList = ListToCreate.map((ListToCreate) =>
    //     <li key={keyValue}>
    //         {ListToCreate}
    //     </li>
    // );
    return (
        <ul>{listList}</ul>
    );
}

export default ListCreator;