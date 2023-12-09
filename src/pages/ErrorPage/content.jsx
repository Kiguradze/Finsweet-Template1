import { Link } from "react-router-dom";
import shape from "../../assets/contactShape.png";
import "./content.css";

const content = () => {
  return (
    <div className="errorPage-content">
      <img src={shape} alt="" />
      <span>404</span>
      <h1>Page Not Found</h1>
      <p>The page you are looking for doesn't exist or has been moved</p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default content;
