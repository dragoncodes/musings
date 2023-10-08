import { ResumeData } from "../types/ResumeData";
import { dateFormatter } from "../utils/date";

export function EducationHistory(props: {
  educationHistory: ResumeData["educationHistory"];
}) {
  return (
    <div>
      <div className="mb-2 text-xl font-medium">Education</div>

      {props.educationHistory.map((education, index) => (
        <div key={`education-history-${index}`}>
          <div className="text-md font-medium">{education.schoolName}</div>

          <div className="text-sm text-slate-700">
            {dateFormatter.format(new Date(education.startDate))} -
            {" " +
              (education.endDate === "present"
                ? "Present"
                : dateFormatter.format(new Date(education.endDate)))}
          </div>

          <div>{education.description}</div>
        </div>
      ))}
    </div>
  );
}
