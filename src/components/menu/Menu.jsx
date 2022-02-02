import "./menu.scss"

const Menu = ({menuState,setMenuState}) => {
  const onClick= ()=>{
    setMenuState(false)
  }
  return <div className={"menu "+ (menuState && "menuActive" ) }>
  <ul>
    <li onClick={onClick} >
      <a href="#intro">Home</a>
    </li>
    <li onClick={onClick}>
      <a href="#portfolio">Portfolio</a>
    </li>
    <li onClick={onClick}> 
      <a href="#works">Works</a>
    </li>
    <li onClick={onClick}>
      <a href="#testimonials">Testimonials</a>
    </li>
    <li onClick={onClick}>
      <a href="#contact">Contact</a>
    </li>
  </ul>
</div>
};

export default Menu;
