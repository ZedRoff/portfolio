import Card from "./card";

function Main() {
  return (
<>
 <div className="title_pages">
    <h2 className="title_pages_content">Projects</h2>
 </div>

 <div className="language_name"><h2 className="language_name_content">JavaScript Projects</h2></div>

 <div className="container_cards">
    <Card name="Example Bot" description="
            Example-bot is a multipurpose bot only for an educational purpose on github
          " image="https://cdn.discordapp.com/avatars/489417394960203777/1856e241e7a175a93651976ad2bff14d.png?size=2048"/>
    <Card name="
            TheAPI
          " description="
          A Rest API coded in NodeJS to fetch informations in game.
         " image="https://cdn.discordapp.com/icons/587220309065596944/833681e9d243d515abe93a3aed82fb13.webp?size=2048"/>
    <Card name="Ahov" description="
            An electron build app, that gives you the informations that you need at the time ! Under Development ! " image="https://cdn.discordapp.com/icons/692762301329309697/92da45f46503b5ef1d8ce0c24e096735.webp?size=128"/>
 </div>

 <div className="language_name"><h2 className="language_name_content">HTML/CSS Projects</h2></div>

 <div className="container_cards">
    <Card name="Age Of Gods" description="For a friend's project, I made this website so people can read his book and discover it with a more decent way." image="https://cdn.glitch.com/533e1033-6025-49f4-b312-dfe999f8a402%2FThe-Evolution-Of-Web-Development-Via-Machine-Learning.jpg?v=1594919839072"/>
    <Card name="
            EzDevs
          " description="A website to share some tips, and to add paste and share them with other peoples." image="https://cdn.glitch.com/533e1033-6025-49f4-b312-dfe999f8a402%2Ft%C3%A9l%C3%A9chargement.jpg?v=1594920255687"/>
    <Card name="Twisted Felow" description="Only a template now, it's the first website that I built." image="https://cdn.glitch.com/f109d061-b5c1-49ce-be13-3b1e8d14fc9c%2F01F7179D-BEE2-4F16-8D9A-733BEC694E24.jpeg?v=15626887"/>
 </div>


   </>
  );
}

export default Main;
