import React, {useState} from 'react';
import Header from './components/PageElements/Header';
import classes from './components/PageElements/GeneralStyles.module.css';
import Nav from './components/PageElements/Nav';
import Main from './components/PageElements/Main';
import Aside from './components/PageElements/Aside';
import Footer from './components/PageElements/Footer';
import PageChangerWindow from './components/PageElements/ElementChanger/PageChangerWindow';


let navArray = ["this","that","these","and","those"];
let testArray = ["blingus","dingus","fingus","ringus","slingus","gingus","mingus","ningus","wingus","pingus","kingus"]
let sectionList = ["Header","Paragraph","Image","Header 2","Paragraph 2","Image","Another Header","Another paragraph","img","Another paragraph","img","Another paragraph","bingus","img"]

function App() {

  const [headerContent, headerChanger] = useState("hello");
  const [listContent, listChanger] = useState(navArray);
  const [popUp, popUpChanger] = useState('');

  //ELEMENT COLOURS>>>
  const [headerBackgroundColor, headerBackgroundColorChange] = useState('tan');
  const [headerTextColor, headerTextColorChange] = useState('');
  const [navBackgroundColor, navBackgroundColorChanger] = useState('orange');
  const [navTextColor, navTextColorChange] = useState('');
  const [mainBackgroundColor, mainBackgroundColorChanger] = useState('tan');
  const [mainTextColor, mainTextColorChange] = useState('');
  const [asideBackgroundColor, asideBackgroundColorChanger] = useState('orange');
  const [asideTextColor, asideTextColorChange] = useState('');
  const [footerBackgroundColor, footerBackgroundColorChanger] = useState('tan');
  const [footerTextColor, footerTextColorChange] = useState('');
  //ELEMENT COLOURS<<<

  const colorChanger = (element,newBackgroundColor,newTextColor) => {
    if (element === 'header') {
      headerBackgroundColorChange(newBackgroundColor);
      headerTextColorChange(newTextColor);
    } else if (element === 'nav') {
      navBackgroundColorChanger(newBackgroundColor);
      navTextColorChange(newTextColor);


    } else if (element === 'main') {
      mainBackgroundColorChanger(newBackgroundColor);
      mainTextColorChange(newTextColor);


    } else if (element === 'aside') {
      asideBackgroundColorChanger(newBackgroundColor);
      asideTextColorChange(newTextColor);


    } else if (element === 'footer') {
      footerBackgroundColorChanger(newBackgroundColor);
      footerTextColorChange(newTextColor);
    }
  }
  const changeHandler = () => {
    headerChanger('new thing');
    listChanger(testArray);
    if (popUp === '') {
      popUpChanger('testy');
    }
    // } else {
    //   popUpChanger('');
    // }
  }
  const closeWindow = () => {
    popUpChanger('');
  }

  return (
    <div onClick={changeHandler} className={classes.parentDiv}>
      {popUp && <PageChangerWindow changeColorFunction={colorChanger} close={closeWindow} />}
      <Header backgroundColor={headerBackgroundColor} textColor={headerTextColor} heading={headerContent} id='header' />
      <Nav backgroundColor={navBackgroundColor} textColor={navTextColor} listOfOptions={listContent}/>
      <Main backgroundColor={mainBackgroundColor} textColor={mainTextColor} sectionsToCreate={sectionList} />
      <Aside backgroundColor={asideBackgroundColor} textColor={asideTextColor} heading='Heading'/>
      <Footer backgroundColor={footerBackgroundColor} textColor={footerTextColor} />
    </div>
  );
}

export default App;

