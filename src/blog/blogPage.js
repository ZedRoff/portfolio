import Parser from 'html-react-parser';
import Header from '../general/header';
import Footer from '../general/footer';

function Blogpage(props) {

  return (
<>

<Header />


<div class="container-n">
  <img src="https://cdn.glitch.com/04a4d0d3-5530-4593-8c2b-59b2a71007bf%2FCode-Background.jpg?v=1587399323737" alt="no source" className="image-blog"/>


  <div class="top-right">Redacted By ZedRoff</div>
  <div class="bottom-right">{props.footer}</div>
  <div class="centered">{props.title}</div>
</div>

<td>{Parser(props.content)}</td>
<Footer />

   </>
  );
}

export default Blogpage;
