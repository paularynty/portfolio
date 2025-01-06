import "./Project.css";

export const Project = (props: {
  name: string;
  description: string;
  image_position?: boolean;
}) => {
  return (
    <div className="Projects-subcontainer">
      <div className="Projects-image"></div>
      <div className="Projects-description">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
