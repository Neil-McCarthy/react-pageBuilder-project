import React, {useRef} from "react";

const listOfColors = ['white','yellow','red','blue','green','tan','orange','black','pink','grey','purple'];

const ColorOptions = (props) => {
    const selectRef = useRef();
    const allOptions = [];

    for (let index = 0;index < listOfColors.length;index++) {
        allOptions.push(<option value={listOfColors[index]} style={{background:listOfColors[index]}} key={index}></option>);
    }

    return (
        <select ref={selectRef} onChange={() => props.changeMaker(props.valueToChange,selectRef.current.value)}>{allOptions}</select>
    );
}

export default ColorOptions;