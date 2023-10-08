import { ResumeData } from "../types/ResumeData";

export function Summary(props: { summary: ResumeData["summary"] }) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="text-xl font-medium">About me</div>
      <div>{props.summary}</div>
    </div>
  );
}
