import Card from "./card";
import Title from "../general/title";
import {useEffect} from "react"
import json from "./projects.json"
function Main() {
  useEffect(() => {
    document.title = 'Projects Page';
  });

  
  return (
<>
<Title name="Projects" />

{
Object.keys(json).map((key, index) => {
  
    return(
      <>
<div className="language_name">
  <h2 className="language_name_content">{key.charAt(0).toUpperCase() + key.split("").splice(1,key.length-1).join("")} Projects</h2>
  </div>
  <div className="container_cards">
   
   {json[key].map((project, index) => {
      return(
        <Card name={project.name} description={project.description} image={project.image} url={project.url} />
      )
   })}
    </div>



      </>
    )
     

})

}
   </>
  );
}

export default Main;
