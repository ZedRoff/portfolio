
import Header from "../general/header"
import Main from "./main"
import Section from './section';
import Footer from '../general/footer';
import Github from "./github"
import {useEffect} from "react"
function Homepage() {
  useEffect(() => {
    document.title = 'Home Page';
  });
  return (
<>
   <Header />
   <Main />
   <Section />
   <Github />
   <Footer />
   </>
  );
}

export default Homepage;
