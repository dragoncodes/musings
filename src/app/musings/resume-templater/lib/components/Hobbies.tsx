import { ResumeData } from "../types/ResumeData";

export function Hobbies(props: { hobbies: ResumeData["hobbies"] }) {
  return (
    <div>
      <div className="text-md font-medium">Hobbies</div>

      {props.hobbies.map((hobby, index) => (
        <div key={`hobby-${index}`}>{hobby}</div>
      ))}
    </div>
  );
}
