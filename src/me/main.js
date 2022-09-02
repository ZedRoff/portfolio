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
            <Block name="Who am I ?" description="I won’t say my name, but I am a french student at ESIEE Paris. Full stack web developer, I also make Discord Bots and fancy softwares. Developing is a super-power according to me, if used effectively and wisely. " />
            <Block name="What I do ?" description="I mainly do websites, but also some Discord Bots and softwares to automate some things. I know how to make dashboards, panels, login / registration systems and more. I always deep learn, developers are active learners, they want to stay tuned about the best techs to exploit, and making brilliant projects. I'm young and I never did numeric science courses, so I'm something like a self-taught developer. I very like my job and I love helping my fellows" />
            <Block name="Why I do this ?" description="Because I like to share, I like to create, I like to teamwork, and self expression. There are no limits when you know how to code things, we fix our own limits. I found all of these things in coding, see something, do something. Having an idea, just a word, and making a whole project around it with some teamwork around it. Getting advices from other developers and hiring is life changing for me. And finally because I have a certain sense of the UI/UX design that follow me in whatever I do, I like things that are well made, good looking and working !" />
            <Block name="My languages" description="I rate these languages in order of experience that I have with them, I don't say that I main these languages in X pourcentages. This is just to give you a point of view of my skills.

* [Minimum is 0 and maximum is 5]."  languages={true}/>
            
            <Block name="Tools" description="Here is an non exhaustive list of the tools I generally use as a developer." tools={true}/>

            </div>
            </main>
          
    )
}

export default Main;