import { Link } from "react-router-dom";
import "./Project.css";

export const Project = (props: {
  name: string;
  description: string;
  image_position?: boolean;
}) => {
  const projectPath = `/project/${props.name.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className="Projects-subcontainer">
      <div className="Projects-image"></div>
      <div className="Projects-description">
        <h1>
          <Link to={projectPath}>{props.name}</Link>
        </h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};