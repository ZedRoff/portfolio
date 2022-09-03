import { Link } from "react-router-dom"
function Embed(props) {
  return (
<div className="embed_blog">
    <Link to={`/articles/${props.id}`}> <h2 className="embed_blog_title">{props.title}</h2></Link>
    <p className="embed_blog_description">{props.description}</p>
    <span className="embed_blog_footer">{props.footer}</span>
    </div>
  );
}

export default Embed;
