
import Header from "../general/header"
import Main from "./main"

import Footer from '../general/footer';
import { useEffect } from "react";
function Blog() {

  useEffect(() => {
    document.title = 'Blog Page';
  });
  return (
<>
   <Header />
   <Main />
 
   <Footer />
   </>
  );
}

export default Blog;
