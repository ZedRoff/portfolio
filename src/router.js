import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import App from "./App";

function RouterDef() {
    return(
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/home" />} />
       
       
       <Route path="/home" element={<App />} />
        </Routes>
      </BrowserRouter>
    )
     
}

export default RouterDef
