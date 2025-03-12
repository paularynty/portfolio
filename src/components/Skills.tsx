export const Skill = (elements: { category: string; skills: string[] }) => {
  const { category, skills } = elements;
  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
