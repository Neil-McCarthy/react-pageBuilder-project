import React from "react";
import Section from "./Section";

const Main = (props) => {
     const paragraphList = [];

     for (let index=0;index<props.sectionsToCreate.length;index+=3){
         paragraphList.push(<Section heading={props.sectionsToCreate[index]} paragraph={props.sectionsToCreate[index+1]} key={index} />)
     }
    return (
        <main style={{background:props.backgroundColor, color:props.textColor}}>
            {paragraphList}
        </main>
    );
}

export default Main;