import React from "react"
import Block from "./block";
import Title from "../general/title";
function Main() {
    return(
     
       <main class="blocks_aligner">
           <Title name="Links" />
       <Block image="https://cdn.glitch.com/b4b3ab1b-0b62-49a2-ab3e-6e9bc5d1e118%2FE9351EC4-30E4-44B9-A2EE-8C9347F0B5CB.png?v=1571576129798" name="Discord" url="https://discord.com/users/327074335238127616"/>
       <Block image="https://cdn.glitch.com/8b8647d1-51e8-4ae5-81f6-0e3bffccae25%2Fgithub-512.png?v=1594743938550" name="GitHub" url="https://github.com/zedroff"/>
       <Block image="https://cdn.glitch.global/f7a66f83-d9ee-427d-b319-a7bb84099f54/linkedin-icon-logo-png-transparent-1024x1024.png?v=1711040850799" name="Linkedin" url="https://www.linkedin.com/in/aman-ghazanfar/"/>
       </main>
    )
}

export default Main;