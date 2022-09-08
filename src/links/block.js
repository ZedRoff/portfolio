import React from "react"
function Block(props) {
    return(
      <div className="block_links">
        <div className="block_top">
          <img src={props.image} className="image_block" alt="no source" />
          <h2 className="block_title">{props.name}</h2>
        </div>
        <div className="block_bottom">
          <a href={props.url} className="block_button" target="_blank" rel="noreferrer">
            Link
          </a>
        </div>
      </div>
    )
}

export default Block;