import Language from "./language";
import Tool from "./tool"

function Block(props) {
    const languages = () => {
        return(
    <div className="languages_show">
        <Language name={<><b>HTML/CSS</b></>} />
       <Language name={<><b>JS</b></>}  />
       <Language name={<><b>Python</b></>}  />
       <Language name={<><b>Java</b></>} />
       
       <Language name={<><b>ReactJS</b></>} />
    
        <h2 className="databases">Databases : MongoDB / SQL / Firebase</h2>
        </div>
        )
    }
    const tools = () => {
return(
    <div className="tool_container">
    <Tool image="https://cdn.glitch.com/533e1033-6025-49f4-b312-dfe999f8a402%2F1024px-Visual_Studio_Code_1.35_icon.svg.png?v=1595004986204" name={<p>Visual Studio <br />Code</p>} description="
I use Visual Studio code as my main code editor. It's very nice to use, and it has a lot of extensions to make it more powerful.
     " />
    <Tool image="https://cdn.glitch.global/f7a66f83-d9ee-427d-b319-a7bb84099f54/180x180.png?v=1711042422502" name="Vercel" description="I use Vercel to host my online projects" />
    <Tool image="https://cdn.glitch.com/533e1033-6025-49f4-b312-dfe999f8a402%2FGITHUB-512.png?v=1595006286019" name="GitHub" description="I use GitHub to host my code and to collaborate with other developers.
     " />
    <Tool image="https://cdn.glitch.com/533e1033-6025-49f4-b312-dfe999f8a402%2FDiscord-512.png?v=1595006226722" name="Discord" description="I use Discord to communicate with other developers and to get help when I'm stuck on a project.
     " />
      <Tool image="https://cdn.glitch.global/f7a66f83-d9ee-427d-b319-a7bb84099f54/Notion_app_logo.png?v=1711042363997" name="Notion" description="I use Notion to take notes and to keep track of my projects." />
      <Tool image="https://cdn.glitch.global/f7a66f83-d9ee-427d-b319-a7bb84099f54/Figma-1-logo.png?v=1711042387362" name="Figma" description="I use Figma to generate my web designs and for school work." />
      <Tool image="https://cdn.glitch.global/f7a66f83-d9ee-427d-b319-a7bb84099f54/canva_logo_icon_168460.png?v=1711042478082" name="Canva" description="I use Figma for all the documents I have to write / design" />
 
    </div>
)
    }
   
   
    return (

        <div className="block_me">
            <h2 className="title_block_me">
                {props.name}
            </h2>
            <p className="description_block_me">
                {props.description}
            </p>
            {props.languages ? languages() : ""}
            {props.tools ? tools() : ""}
            <hr />
        
           
        </div>
    );
  }
  
  export default Block;
  