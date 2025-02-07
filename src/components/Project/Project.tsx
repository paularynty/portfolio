import { Link } from "react-router-dom";
import "./Project.css";

export const Project = (elements: {
  name: string;
  description: string;
  image_path?: string;
  // image_position?: boolean;
}) => {
  const { name, description, image_path } = elements;

  const projectPath = `/project/${name
    .replace(/['"]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase()}`;
  return (
    <div className="Projects-subcontainer">
      <div className="Projects-image">
        <img src={image_path} alt="Project"></img>
      </div>
      <div className="Projects-description">
        <h1>
          <Link to={projectPath}>{name}</Link>
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
