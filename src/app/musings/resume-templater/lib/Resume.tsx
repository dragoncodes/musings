import { remark } from "remark";
import remarkHtml from "remark-html";
import { ResumeData } from "./types/ResumeData";
import { dateFormatter } from "./utils/date";

export function Resume(props: { resume: ResumeData }) {
  return (
    <div className="mx-12 my-12 flex flex-1 flex-col">
      <div className="text-bold text-xl text-xl" />

      <Profile profile={props.resume.profile} />

      <div className="mt-10 flex flex-1 flex-row justify-between">
        <div className="mr-10 flex w-[60%] flex-initial flex-col">
          <Summary summary={props.resume.summary} />

          <div className="mt-5">
            <EmploymentHistory
              employmentHistory={props.resume.employmentHistory}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center">
          <div>
            <Contacts contacts={props.resume.contractDetails} />

            <div className="mt-5">
              <Socials socials={props.resume.socials} />
            </div>

            <div className="mt-5">
              <Skills skills={props.resume.skills} />
            </div>

            <div className="mt-5">
              <Hobbies hobbies={props.resume.hobbies} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Socials(props: { socials: ResumeData["socials"] }) {
  return (
    <div className="flex flex-col items-start">
      <div className="text-md font-medium">Links</div>

      {props.socials.map((social, index) => (
        <div key={`social-${index}`}>
          <a className="text-blue-500" href={social.link}>
            {social.name}
          </a>
        </div>
      ))}
    </div>
  );
}

function Profile(props: { profile: ResumeData["profile"] }) {
  return (
    <div className="flex flex-1 flex-row">
      {props.profile.image ? (
        <img
          className="rounded-xl"
          src={props.profile.image}
          width={88}
          height={88}
          alt="Profile image"
        />
      ) : null}

      <div className="ml-6 flex flex-1 flex-col">
        <div className="text-4xl">{props.profile.name}</div>
        <div className="text-sm">{props.profile.jobTitle}</div>
      </div>
    </div>
  );
}

function Summary(props: { summary: ResumeData["summary"] }) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="text-xl font-medium">About me</div>
      <div>{props.summary}</div>
    </div>
  );
}

function Contacts(props: { contacts: ResumeData["contractDetails"] }) {
  return (
    <div>
      <div className="text-md font-medium">Details</div>

      <div className="text-sm">{props.contacts.city}</div>
      <div>{props.contacts.country}</div>
      {props.contacts.phone ? <div>{props.contacts.phone}</div> : null}
      <a href={`mailto:${props.contacts.email}`} className="text-blue-500">
        {props.contacts.email}
      </a>
    </div>
  );
}

function Skills(props: { skills: ResumeData["skills"] }) {
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

function Hobbies(props: { hobbies: ResumeData["hobbies"] }) {
  return (
    <div>
      <div className="text-md font-medium">Hobbies</div>

      {props.hobbies.map((hobby, index) => (
        <div key={`hobby-${index}`}>{hobby}</div>
      ))}
    </div>
  );
}

async function EmploymentHistory(props: {
  employmentHistory: ResumeData["employmentHistory"];
}) {
  return (
    <div>
      <div className="text-xl font-medium">Employment History</div>

      <div className="flex flex-col space-y-5">
        {props.employmentHistory.map((employmentItem, index) => (
          <div key={`employment-history-${index}`}>
            <div className="text-md font-medium">
              {employmentItem.companyName}
            </div>

            <div className="text-sm text-slate-700">
              {dateFormatter.format(new Date(employmentItem.startDate))} -
              {" " +
                (employmentItem.endDate === "present"
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

  console.log("### OMG", contentHtml);

  return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
}

function Progress(props: { value: number }) {
  return (
    <div className="relative h-[5px] overflow-visible">
      <div className="relative bottom-0 left-0 right-0 top-0 h-[5px] overflow-visible rounded-md bg-slate-100" />

      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-[5px] overflow-visible rounded-md bg-blue-200"
        style={{ width: `${props.value * 100}%` }}
      />
    </div>
  );
}
