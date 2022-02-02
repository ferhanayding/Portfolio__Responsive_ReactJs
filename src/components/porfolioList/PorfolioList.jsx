import "./porfolioList.scss"

const PorfolioList = ({title,active,setSelected,id}) => {
  return <li className={active ? "portfolio__list active" : "portfolio__list" } onClick={()=> setSelected(id)}  >
    {title}
  </li>;
};

export default PorfolioList;
