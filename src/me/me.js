
import Header from "../general/header"
import Main from "./main"
import {useEffect} from "react"
import Footer from '../general/footer';
function Me() {
  useEffect(() => {
    document.title = 'Me Page';
  });
  return (
<>
   <Header />
 
   <Main />
 
   <Footer />
   </>
  );
}

export default Me;
