import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { projectData } from "../data/projectData";

export default function ProjectPage() {
  const { projectName } = useParams<{ projectName: string }>();
  const project = projectData[projectName as keyof typeof projectData];

  if (!project) {
    return <h1>Could not find project.</h1>;
  }

  return (
    <div>
      <div className="Intro">
        <h1>{project.name}</h1>
        <div className="body-text">
          <ReactMarkdown>{project.description}</ReactMarkdown>
          <br></br>
          <ReactMarkdown>{project?.details}</ReactMarkdown>
          <br></br>
          <button onClick={() => window.open(project.link)}>Try it</button>
        </div>
      </div>
    </div>
  );
}
