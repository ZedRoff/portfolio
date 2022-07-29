import React from "react"
import { Link } from "react-router-dom"
function Block(props) {
    return(
      <div className="block_links">
        <div className="block_top">
          <img src={props.image} className="image_block" alt="no source" />
          <h2 className="block_title">{props.name}</h2>
        </div>
        <div className="block_bottom">
          <Link to={props.url} className="block_button" target="_blank">
            Link
          </Link>
        </div>
      </div>
    )
}

export default Block;