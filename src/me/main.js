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
            <Block name="Who am I ?" description="I am an 16 years old french full stack Web developer, and also a Discord Bot developer, passionated about my work, I try to make the world more better by my inspiration and my creativity. Developing is a super power for me, I have this super power, so I want to use it efficiently." />
            <Block name="What I do ?" description="I do websites, discord bots, native applications. I also know how to make login / registration secure system, tkinter apps, panels, dashboards etc ... Basically I do things that can help others, use my knowledge to extend it more and more. I like making projects that already exists, but with my own sauce, or of course making original projects. I always deep learn, we developers are active learners, stay on the best tech that can exploit the maximum of our potentiel, and making brilliant projects. I'm young and I never did numeric science courses, so I'm something like a self-taught developer. I very like my job !" />
            <Block name="Why I do this ?" description="Because I like share, I like create, I like teamwork, and self expression. In coding in my opinion there are no limits, we ourself fix limits, but when we break them, it's satisfying. I found all of these things in coding, see something, do something. Having any idea and build things that other people will use and say : 'Wow it's well made', or advice you about improvements, that's life changing for me. And finally because I have a certain sense of the UI/UX design that follow me in whatever I do, I like things that are good made, good looking and working !" />
            <Block name="My languages" description="I rate these languages in order of experience that I have with them, I don't say that I main these languages in X pourcentages. This is just to give you a point of view of my skills.

* [Minimum is 0 and maximum is 5]."  languages={true}/>
            <Block name="How I discovered it ?" description="In dev"  />

            <Block name="Tools" description="Here is an non exhaustive list of the tools I generally use as a developer." tools={true}/>

            </div>
            </main>
          
    )
}

export default Main;