import { remark } from "remark";
import { ResumeData } from "../types/ResumeData";
import { dateFormatter } from "../utils/date";
import remarkHtml from "remark-html";

export function EmploymentHistory(props: {
  employmentHistory: ResumeData["employmentHistory"];
}) {
  return (
    <div>
      <div className="text-xl font-medium">Employment History</div>

      <div className="mt-2 flex flex-col space-y-5">
        {props.employmentHistory.map((employmentItem, index) => (
          <div key={`employment-history-${index}`}>
            <div className="text-md font-medium">
              {`${employmentItem.jobTitle}, ${employmentItem.companyName}`}
            </div>

            <div className="text-sm text-slate-700">
              {dateFormatter.format(new Date(employmentItem.startDate))} -
              {" " +
                (employmentItem.endDate === undefined
                  ? "Present"
                  : dateFormatter.format(new Date(employmentItem.endDate)))}
            </div>

            <EmploymentHistoryDescription
              description={employmentItem.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

async function EmploymentHistoryDescription(props: {
  description: ResumeData["employmentHistory"][0]["description"];
}) {
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkHtml)
    .process(props.description);

  const contentHtml = processedContent.value;

  return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
}
