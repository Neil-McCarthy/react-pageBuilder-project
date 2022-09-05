import React, {useState} from "react";
import PageChangerSettings from "./PageChangerSettings";



const PageChangerWindow = (props) => {

    const [elementDisplayed, elementSelect] = useState('header');
    function testy(thisThing) {
        console.log(thisThing);
    }
    return (
        <div id='pageChangerWindow'>
            <div id='windowBlackout' onClick={props.close}>
            </div>
            <section>
                <h1>
                    Page Constructor
                </h1>
                <ul>
                    <li onClick={() => {elementSelect('header')}}>
                        Header
                    </li>
                    <li onClick={() => {elementSelect('nav')}}>
                        Nav
                    </li>
                    <li onClick={() => {elementSelect('main')}}>
                        Main
                    </li>
                    <li onClick={() => {elementSelect('aside')}}>
                        Aside
                    </li>
                    <li onClick={() => {elementSelect('footer')}}>
                        Footer
                    </li>
                </ul>
                <PageChangerSettings changeColorFunction={props.changeColorFunction} elementSelected={elementDisplayed} close={props.close} thingy={testy} />
            </section>
        </div>
    )
}

export default PageChangerWindow;