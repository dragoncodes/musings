import { ResumeData } from "./types/ResumeData";
import { Profile } from "./components/Profile";
import { Summary } from "./components/Summary";
import { EmploymentHistory } from "./components/EmploymentHistory";
import { Contacts } from "./components/Contacts";
import { Socials } from "./components/Socials";
import { Skills } from "./components/Skills";
import { Hobbies } from "./components/Hobbies";
import { EducationHistory } from "./components/EducationHistory";

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

          <div className="mt-5">
            <EducationHistory
              educationHistory={props.resume.educationHistory}
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
