
import Header from "../general/header"
import Main from "./main"
import {useEffect} from "react"
import Footer from '../general/footer';
function Links() {
  useEffect(() => {
    document.title = 'Links Page';
  });
  return (
<>
   <Header />
   <Main />
 
   <Footer />
   </>
  );
}

export default Links;
