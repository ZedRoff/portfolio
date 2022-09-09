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
/*<div className="language_name"><h2 className="language_name_content">Java Projects</h2></div>

<div className="container_cards">
   <Card name="Coming soon ..." description="Since I am now a student at ESIEE Paris, our main language " image="https://cdn.glitch.com/533e1033-6025-49f4-b312-dfe999f8a402%2FThe-Evolution-Of-Web-Development-Via-Machine-Learning.jpg?v=1594919839072" url="https://github.com/zedroff" />

</div>*/
export default Main;
