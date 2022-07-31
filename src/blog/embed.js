
function Embed(props) {
  return (
<div className="embed_blog">
    <h2 className="embed_blog_title">{props.title}</h2>
    <p className="embed_blog_description">{props.description}</p>
    <span className="embed_blog_footer">{props.footer}</span>
    </div>
  );
}

export default Embed;
