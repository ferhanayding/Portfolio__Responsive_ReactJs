import { useState } from "react";
import "./contact.scss"

const Contact = () => {
  const [message, setMessage] = useState(false);
const onSubmit = (e)=>{
  e.preventDefault()
  setMessage(true)
  setTimeout(()=>{
   setMessage(false)
  },3000)
}
  return <div className="contact" id="contact" >
    <img className="bg__img" src="https://joomania.com/wp-content/uploads/2019/01/contact.jpg" alt="" />
    <div className="left">
    <img src="assets/shake.svg" alt="" />
    </div>
    <div className="right">
        <h1>Contact</h1>
        <form onSubmit={onSubmit} >
          <input type="email" required placeholder="Email"  />
          <textarea type="text" required placeholder="Message"   />
          <button type="submit">Send</button>
          {
            message && <span>mesajınız başarıyla gönderilmiştir,Teşekkürler</span> 
          }
        </form>
    </div>
  </div>;
};

export default Contact;
