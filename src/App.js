import { useState } from "react";
import "./App.scss";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";

function App() {
  const [menuState, setMenuState] = useState(false);
  const onClickForMenuState = () => {
    setMenuState(false);
  };
  return (
    <div className="app">
      <Topbar menuState={menuState} setMenuState={setMenuState} />

      <Menu menuState={menuState} setMenuState={setMenuState} />
      <div
        className={"sections " + (menuState && "opacity")}
        onClick={onClickForMenuState}
      >
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
