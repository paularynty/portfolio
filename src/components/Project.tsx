import { Link } from "react-router-dom";

export const Project = (elements: {
  name: string;
  description: string;
  image_path?: string;
}) => {
  const { name, description } = elements;

  const projectPath = `/project/${name
    .replace(/['"]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase()}`;
  return (
    <div>
      <h2>
        <Link to={projectPath}>{name}</Link>
      </h2>
      <p>{description}</p>
    </div>
  );
};
