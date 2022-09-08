
import Header from "../general/header"
import Footer from "../general/footer"
import Main from "./main";
import {useEffect} from "react"
function Contact() {
  useEffect(() => {
    document.title = 'Contact Page';
  });
  return (
<>
   <Header />
   <Main />
    <Footer />
   </>
  );
}

export default Contact;
