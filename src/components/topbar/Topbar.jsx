import { Abc, AcUnit, Mail, Person } from "@mui/icons-material";
import { useState } from "react";
import "./topbar.scss"

const Topbar = ({menuState,setMenuState}) => {

  const openMenu = ()=>{
  setMenuState(!menuState)
}
  return <div className={'topbar '+ (menuState && "active")}>
    <div className="wrapper">
      <div className="topbar__left">
            <span className="logo__container" >
          <a href="#intro" className="topbar__logo" >
            genius.
            </a>
            </span>
          <div className="item__container">
          <Person className="topbar__icon" />
          <span>+1234554313</span>
          </div>
          <div className="item__container">
          <Mail fontSize="small" className="topbar__icon" />
          <span>Sarhos@gmail.com</span>
          </div>
      </div>
      <div className="topbar___right">
        <div className="hamburger" onClick={openMenu} >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>;
};

export default Topbar;
