function Language(props) {
    return(  <div className="language_container">
    <h3 className="title_language">
        {props.name}
        
    </h3>
    <progress class="lang_progress" value="4" max="5"></progress>
</div>)
}
export default Language