

function Card(props) {
    return (
        <a href={props.url} target="_blank" rel="noreferrer">
<div className="projects_card">
    <img src={props.image} alt="no project" className="image_projects" />
    <h2 className="title_project">{props.name}</h2>
    <p className="description_project">{props.description}</p>
    </div>
    </a>
    );
  }
  
  export default Card;
  