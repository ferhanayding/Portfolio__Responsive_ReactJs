import { useEffect, useState } from "react";
import PorfolioList from "../porfolioList/PorfolioList";
import "./portfolio.scss"
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

const Portfolio = () => {
  const [selected,setSelected]= useState("featured")
  const [data,setData]= useState([])
  
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio)
        break;
        case "web":
          setData(webPortfolio)
          break;
          case "design":
            setData(designPortfolio)
            break;
            case "content":
              setData(contentPortfolio)
              break;
              case "mobile":
                setData(mobilePortfolio)
                break;
                default:
        setData(featuredPortfolio)
    }
  }, [selected]);
  

  return <div className="portfolio" id="portfolio" >
    <div className="portfolio__wrapper" >
      
        <h1 className="portfolio__top_title">
          Portfolio
        </h1>
        <ul className="portfolio__items">
         {
           list.map((item)=>(
              <PorfolioList
               title={item.title}
                key={item.id}
                 active={selected === item.id}
                  id={item.id}
                   setSelected={setSelected}
                     />
           ))
         }
        </ul> 
        <div className="portfolio__container">
         { data.map((item)=>(
           <div key={item.id}  className="portfolio__container_item">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
          </div>
            ))
          }
          
        </div>
    </div>
  </div>;
};

export default Portfolio;
