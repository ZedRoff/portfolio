import Card from "./card";
import Title from "../general/title";
function Main() {
  return (
<>
<Title name="Projects" />

 <div className="language_name"><h2 className="language_name_content">JavaScript Projects</h2></div>

 <div className="container_cards">
    <Card name="Camo Bot" description="
            A multipurpose Discord Bot developed with JS runtime NodeJS and DiscordJS.
          " image="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1081073/retina_1708x683_cover-how-to-make-a-discord-bot-7c0fe302b98b05b145682344b3a4ec59.png" url="https://github.com/ZedRoff/camobot" />
    <Card name="
            TheAPI
          " description="
          A Rest API with an interface, using EJS, NodeJS, and expressJS.
         " image="https://cdn.discordapp.com/icons/587220309065596944/833681e9d243d515abe93a3aed82fb13.webp?size=2048" url="https://github.com/ZedRoff/theapi"/>
    <Card name="Chat-App" description="
           A chat app built with sockets and basic NodeJS" image="https://cdn.discordapp.com/icons/692762301329309697/92da45f46503b5ef1d8ce0c24e096735.webp?size=128" url="https://github.com/ZedRoff/chat-app"/>
 </div>

 <div className="language_name"><h2 className="language_name_content">HTML/CSS Projects</h2></div>

 <div className="container_cards">
    <Card name="Age Of Gods" description="For a friend's project, I made this website so people can read his book and discover it with a more decent way." image="https://cdn.glitch.me/31199aeb-9e40-4d71-8197-8eb280c7ba84%2F0b5b77a7-decf-4a07-ae36-71cefb34776f_logo.png" url="https://ageofgods.glitch.me/"/>
    <Card name="
            EzDevs
          " description="A website to share some tips, and to add paste and share them with other peoples." image="https://cdn.glitch.com/533e1033-6025-49f4-b312-dfe999f8a402%2FThe-Evolution-Of-Web-Development-Via-Machine-Learning.jpg?v=1594919839072" url="https://ezdevs.glitch.me/"/>
    <Card name="Objective All Inclusive" description="A website built to convert gender oriented texts to neutral ones" image="https://cdn.glitch.com/f109d061-b5c1-49ce-be13-3b1e8d14fc9c%2F01F7179D-BEE2-4F16-8D9A-733BEC694E24.jpeg?v=15626887" url="https://objective-all-inclusive.glitch.me" />
 </div>
 <div className="language_name"><h2 className="language_name_content">Python Projects</h2></div>

<div className="container_cards">
   <Card name="Tic tac toe" description="Basic tic tac toe built for a school project using Tkinter" image="https://wallpapercave.com/wp/wp8984730.jpg" url="https://github.com/ZedRoff/morpion"/>
   <Card name="
           HangMan
         " description="Hangman game that can be played using python's console, for a Discord Challenge" image="https://c4.wallpaperflare.com/wallpaper/1012/64/860/art-black-and-white-black-and-white-castle-wallpaper-preview.jpg" url="https://github.com/ZedRoff/some_cool_projects/tree/main/hangmangame"/>

</div>
<div className="language_name"><h2 className="language_name_content">Java Projects</h2></div>

<div className="container_cards">
   <Card name="Coming soon ..." description="Since I am now a student at ESIEE Paris, our main language " image="https://cdn.glitch.com/533e1033-6025-49f4-b312-dfe999f8a402%2FThe-Evolution-Of-Web-Development-Via-Machine-Learning.jpg?v=1594919839072" url="https://github.com/zedroff" />

</div>
   </>
  );
}

export default Main;
