function Tool(props) {
    return(  
   <div className="tool">
    <div className="tool_left">
        <img src={props.image} alt="no source" className="tool_image" />
        <h3 className="tool_name">{props.name}</h3>
    </div>
    <div className="tool_right">
        <p className="tool_description">
            {props.description}
        </p>
    </div>
   </div>
)
}
export default Tool