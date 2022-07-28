import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Homepage from "./homepage/homepage";

function RouterDef() {
    return(
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/home" />} />
       
       
       <Route path="/home" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    )
     
}

export default RouterDef
