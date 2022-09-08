import axios from "axios";
import { useRef, useState } from "react";
import Title from "../general/title";
function Main() {
  const eMail = useRef(null)
  const [emailError, setEmailError] = useState(0)
  const [fnameError, setFnameError] = useState(0)
  const [lnameError, setLnameError] = useState(0)
  const [messageError, setMessageError] = useState(0)
  const handleChangeMail = (e) => {
    e.preventDefault()
    let value = eMail.current.value;
    if(!value.includes("@") || !value.includes(".")) return setEmailError(0);
    setEmailError(1)
    
  }
  const fname = useRef(null)
  const lname = useRef(null)
  const message = useRef(null)
  const handleChangeFname = (e) => {
    e.preventDefault()
    let value = fname.current.value;
    if(value.includes(" ")) return setFnameError(0)
    if(value.length <= 2) return setFnameError(0)
    setFnameError(1)
  }
  const handleChangeLname = (e) => {
    e.preventDefault()
    let value = lname.current.value;
    if(value.includes(" ")) return setLnameError(0)
    if(value.length <= 2) return setLnameError(0)
    setLnameError(1)
  }
  const handleChangeMessage = (e) => {
   
    e.preventDefault()
    let value = message.current.value;

    if(value.length <= 150) return setMessageError(0)
    setMessageError(1)
   
  }
  const handleClick = (e) => {
    e.preventDefault()
    if(emailError === 0 || fnameError === 0 || lnameError === 0 || messageError === 0) return alert("One or more inputs are invalid, please check out.")
  
    axios.post(`https://zedroff.glitch.me/api/v1/postcontact/${eMail.current.value}/${fname.current.value}/${lname.current.value}/${message.current.value}`).then(res => {
      alert(res.data.message)
    })
  }
  return (
<main className="contact_page">
<Title name="Contact" />
<form className="form_contact">
    <h2 className="title_contact_form">Contact Form</h2>
 
    <input placeholder="E-mail" className="input_contact_form" ref={eMail} onChange={handleChangeMail}/>
    <p id="error">{emailError === 0 ? "You have to put a valid e-mail here" : ""}</p>
    <input placeholder="First Name" className="input_contact_form" onChange={handleChangeFname} ref={fname}/>
    <p id="error">{fnameError === 0 ? "First Name must not have space and left empty" : ""}</p>
    <input placeholder="Last Name" className="input_contact_form" onChange={handleChangeLname} ref={lname}/>
    <p id="error">{lnameError === 0 ? "Last Name must not have space and left empty" : ""}</p>
    <textarea placeholder="Message" className="textarea_contact_form" onChange={handleChangeMessage} ref={message}></textarea>
    <p id="error">{messageError === 0 ? "Message must be at least 150 chars" : ""}</p>
    <button className="button_contact_form" onClick={handleClick}>Send</button>
</form>
   </main>
  );
}

export default Main;
