import "./Skills.css";

export const Skill = (elements: { category: string; skills: string[] }) => {
  const { category, skills } = elements;
  return (
    <div className="Skills-subcontainer">
      <h1>{category}</h1>
      <ul className="Skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
