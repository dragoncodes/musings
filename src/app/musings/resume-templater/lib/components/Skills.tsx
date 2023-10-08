import { ResumeData } from "../types/ResumeData";
import { Progress } from "./Progress";

export function Skills(props: { skills: ResumeData["skills"] }) {
  return (
    <div>
      <div className="text-md mb-2 font-medium">Skills</div>

      {props.skills.map((skill, index) => (
        <div key={`skills-${index}`} className="mb-3">
          <div className="mb-2">{skill.name}</div>

          <Progress value={skill.level} />
        </div>
      ))}
    </div>
  );
}
