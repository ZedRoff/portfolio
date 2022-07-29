import Title from "../general/title";
function Main() {
  return (
<main className="contact_page">
<Title name="Contact" />
<form className="form_contact">
    <h2 className="title_contact_form">Contact Form</h2>
    <input placeholder="E-mail" className="input_contact_form" />
    <input placeholder="First Name" className="input_contact_form" />
    <input placeholder="Last Name" className="input_contact_form" />
    <textarea placeholder="Message" className="textarea_contact_form"></textarea>
    <button className="button_contact_form">Send</button>
</form>
   </main>
  );
}

export default Main;
