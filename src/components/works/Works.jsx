import { useRef, useState } from "react";
import "./works.scss"

const Works = () => {
  const [sliderStatus, setSliderStatus] = useState(0);
 
 
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
      "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
      "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
      "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way)=>{
    way === "left" ?
    setSliderStatus(sliderStatus === 0 ? 2 : sliderStatus-1) 
    : setSliderStatus(sliderStatus < data.length-1 ? sliderStatus+1: 0)
    
  }

  return (<div className="works" id="works">
    <div className="slider">

      { data.map((item)=>(
        
        <div key={item.id} id={item.id} className="container" style={{transform: `translateX(-${sliderStatus * 100}vw)`}}  >
        <div className="item">
          <div className="left">
            <div className="left_container">

            <div className="img__container">
              <img src={item.icon} alt="" />
            </div>
            <h1 className="left_itemTitle">{item.title}</h1>
            <p className="left__item_desc">{item.desc}</p>
            <a href="#portfolio">Projects</a>
            </div>
          </div>
          <div className="right">
            <img src={item.img} alt="" className="right__img_container" />
          </div>
        </div>
      </div>
         ))
        }
    </div>
  
    <img src="assets/arrow.png" alt=""  className="arrow left" onClick={()=>handleClick("left")} />
    <img src="assets/arrow.png" alt="" className="arrow right" onClick={()=>handleClick()} />
        </div> 
)
};

export default Works;
