import React from "react"
import Title from "../general/title";
import Block from "./block.js"
function Main() {
    return(
    
        <main className="me_main">
        <Title name="About me"/>
            <div className="me_description">
                <h2 className="me_description_content">Here you will find a lot of informations about me.</h2>
            </div>

            <div className="blocks_me">
            <Block name="Who am I ?" description="Hi, I'm Aman, 19 by the time I write this, I love coding, chess and piano. I study at ESIEE Paris, passionated about numeric sciences engineering, I want to be a full-stack engineer. Looking for an internship to sharpen my skills, I love collaborative coding and hope to share my experience with new persons so I can learn from them. Developing is a super-power according to me, if used effectively and wisely. " />
            <Block name="What I do ?" description="
            I am an aspiring full-stack developer, active learner and collaborative coder. I mainly code websites and softwares. I know how to make dashboards, panels, login / registration
            systems etc. I also know how to make a website from scratch, from the design to the deployment, back-end and front-end, databases. Used MERN Stack.

             " />
           <Block name="My languages" description="Here are the languages I master, I continuously eager to learn more to make my work faster and to understand better my fellows"  languages={true}/>
            
            <Block name="Tools" description="Here is an non exhaustive list of the tools I generally use as a developer." tools={true}/>

            </div>
            </main>
          
    )
}

export default Main;