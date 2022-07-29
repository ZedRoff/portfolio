import { Link } from "react-router-dom";
import Title from "./title";
import Footer from "./footer";
function ErrorPage() {


    return(
        <>
        <main className="page404">
  <Title name="404 Page" />
        <div className="embed">
            <h2 className="embed_title">The page you are looking for doesn't exist</h2>
            <p className="embed_description">Go back to <Link to="/home" className="special_link">Home</Link></p>
        </div>
  </main>
  <Footer />
  </>
    )
}

export default ErrorPage;