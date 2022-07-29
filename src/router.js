import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Homepage from "./homepage/homepage";
import Links from "./links/links";
import Projects from "./projects/projects";

function RouterDef() {
    return(
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/home" />} />
       
       
       <Route path="/home" element={<Homepage />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/links" element={<Links />} />
        </Routes>
      </BrowserRouter>
    )
     
}

export default RouterDef
