import Title from "../general/title";
import Embed from "./embed";
import axios from "axios";
import React  from "react";
class Main extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {value: []}

  }
  componentDidMount() {
    axios.get("https://zedroff.glitch.me/api/v1/blog").then(infos => {

      infos.data.forEach(info => {
 
   
     this.state.value = [...this.state.value, [info.title, info.description, info.content, info.id, info.date]]
     return this.setState({value: [...this.state.value, [info.title, info.description, info.content, info.id, info.date]]})

      })
      

  })
}
 
  render() {
    return (
      <main className="blog_page">
      <Title name="Blog" />
     {this.state.value.map(article => {
    
      return <Embed title={article[0]} description={article[1]} footer={article[4]} id={article[3]} />
     })}
      
         </main>
        )
  }
}



export default Main;
