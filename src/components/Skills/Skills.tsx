import "./Skills.css";

export const Skill = (props: { category: string; skills: string[] }) => {
  return (
    <div className="Skills-subcontainer">
      <h1>{props.category}</h1>
      <ul className="Skills-list">
        {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
      ))}
      </ul>
    </div>
  );
};
