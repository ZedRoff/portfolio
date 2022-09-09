import Title from "../general/title";
import Embed from "./embed";
import axios from "axios";
import React  from "react";
class Main extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {value: [], search: ""}
    this.ref = React.createRef()
  }
  componentDidMount() {
    axios.get("https://zedroff.glitch.me/api/v1/blog").then(infos => {

      infos.data.forEach(info => {

        
     this.state.value = [...this.state.value, [info.title, info.description, info.content, info.id, info.date]]
    
     return this.setState({value: [...this.state.value, [info.title, info.description, info.content, info.id, info.date]], search: this.state.search})
      })
      

  })
}
handleChange(event) {

  this.setState({search: this.ref.current.value})
}
 
  render() {
    return (
      <main className="blog_page">
         <Title name="Blog" />
         <input ref={this.ref} onChange={this.handleChange.bind(this)} placeholder="Search for a specific blog post. Ex : Why we code ?" id="search_bar_blog"/>
    
     {

     
      this.state.value.map((article, index) => {
        if(index == this.state.value.length-1) return;
        if(article[0].toLowerCase().includes(this.state.search.toLowerCase())) {
          return <Embed title={article[0]} description={article[1]} footer={article[4]} id={article[3]} key={index}/>
        }
      })
     
     
     }
      
         </main>
        )
  }
}



export default Main;
