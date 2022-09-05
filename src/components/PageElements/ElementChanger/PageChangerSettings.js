import React, {useState} from "react";
import PageChangerBasics from "./PageChangerBasics";

const PageChangerSettings = (props) => {

    const [backgroundColor, backgroundColorNew] = useState('');
    const [textColor, textColorNew] = useState('');

    function processChange(valueToChange,newValue) {
        valueToChange(newValue);
    }
    return (
        <section>
            <PageChangerBasics title={props.elementSelected} backgroundChange={backgroundColorNew} textChange={textColorNew} Changer={processChange} />
            <button type='submit' onClick={() => {props.changeColorFunction(props.elementSelected,backgroundColor,textColor)}}>
                Apply
            </button>
        </section>
    );  
}

export default PageChangerSettings;