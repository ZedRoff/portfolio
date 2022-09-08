import Language from "./language";
import Tool from "./tool"

function Block(props) {
    const languages = () => {
        return(
    <div className="languages_show">
        <Language name={<><b>HTML/CSS</b> ✓ | Since 5 Years.</>} value="4"/>
       <Language name={<><b>JS</b> ✓ | Since 4 Years.</>} value="4" />
       <Language name={<><b>Python</b> ✓ | Since 4 Years.</>} value="4" />
       <Language name={<><b>Java</b> = | Just learning.</>} value="2" />
       <Language name={<><b>PHP</b> = | Only know how it works.</>} value="1" />
        
    
        <h2 className="databases">And finally the databases I can use : MongoDB / SQL.</h2>
        </div>
        )
    }
    const tools = () => {
return(
    <div className="tool_container">
    <Tool image="https://cdn.glitch.com/533e1033-6025-49f4-b312-dfe999f8a402%2F1024px-Visual_Studio_Code_1.35_icon.svg.png?v=1595004986204" name={<p>Visual Studio <br />Code</p>} description="
I use Visual Studio code as my main code editor, I use it because there are a lot of cool extensions and it's simple to use.
     " />
    <Tool image="https://cdn.glitch.com/533e1033-6025-49f4-b312-dfe999f8a402%2Fglitch-2019-08-03_09-36-54-icon-resized.png?v=1595005957461" name="Glitch" description="I use Glitch as a website hoster, it's something like a 'free vps', but it's very nice to share projects worldwide for free." />
    <Tool image="https://cdn.glitch.com/533e1033-6025-49f4-b312-dfe999f8a402%2FGITHUB-512.png?v=1595006286019" name="GitHub" description="
 I'm not using that actively GitHub actually, but soon I will merge a lot of projects inside my GitHub account. As everyone, to share codes.
     " />
    <Tool image="https://cdn.glitch.com/533e1033-6025-49f4-b312-dfe999f8a402%2FDiscord-512.png?v=1595006226722" name="Discord" description="
I use Discord because in my opinion, it is the best chat app for developers, it has a lot of growing up developers community, and I use it everyday to talk with my co developers.
     " />
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
  