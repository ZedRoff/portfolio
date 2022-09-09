import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Contact from "./contact/contact";
import Homepage from "./homepage/homepage";
import Links from "./links/links";
import Projects from "./projects/projects";
import ErrorPage from "./general/ErrorPage";
import Me from "./me/me";
import Blog from "./blog/blog";
import axios from "axios";
import Blogpage from "./blog/blogPage";
import React from "react";

class RouterDef extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: []}
  } 
componentDidMount() {
axios.get(process.env.REACT_APP_BLOG).then(infos => {
  infos.data.forEach(info => {

    this.state.value.push([info.id, info.content, info.title, info.date])
    return this.setState({value: [...this.state.value, [info.id, info.content, info.title, info.date]]})
  })
})
}

  render() {
    return(
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/home" />} />
       
       
       <Route path="/home" element={<Homepage />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/links" element={<Links />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/me" element={<Me />} />
       <Route path="/blog" element={<Blog />} />
       <Route path="*" element={<ErrorPage />} />

       {
        
        this.state.value.map((article, index) => {
     
  return <Route path={`articles/${article[0]}`} element={<Blogpage content={article[1]} title={article[2]} footer={article[3]} key={index} />} key={index} />

        })
         
        }
        </Routes>
      </BrowserRouter>
    )
     
}

}
export default RouterDef
