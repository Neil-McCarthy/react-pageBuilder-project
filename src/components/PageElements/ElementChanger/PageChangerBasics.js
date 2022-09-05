import React from "react";
import ColorOptions from "../ExtraBits/ColorOptions";

const PageChangerBasics = (props) => {

    return (
        <form>
            <label>
                Background Colour {props.title}
            </label>
            <ColorOptions valueToChange={props.backgroundChange} changeMaker={props.Changer}/>
            <label>
                Text Colour
            </label>
            <ColorOptions valueToChange={props.textChange} changeMaker={props.Changer}/>
        </form>
    )
}

export default PageChangerBasics;