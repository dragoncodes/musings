import { Resume } from "./lib/Resume";
import { ResumeData } from "./lib/types/ResumeData";

const resume: ResumeData = {
  profile: {
    name: "John Doe",
    jobTitle: "Stay at home bum",
    image:
      "https://miro.medium.com/v2/resize:fill:88:88/1*gS5mQEq_1gfOxllcGksSaQ.jpeg",
  },

  summary:
    "I am a passionate product thinker and UX advocate, driven to create seamless user experiences. Asa a proactive problem solver and dedicated knowledge sharer, I thrive in fast-paced software environments, inspiring my colleagues to embrace agility and efficiency. My expertise lies in developing simple, maintainable code that expertly addresses complex business needs",

  employmentHistory: [
    {
      startDate: new Date("2019-01-01").toISOString(),
      endDate: "present",
      companyName: "Company 1",
      description: `
As a senior member of the Onboarding cross-functional team, I embrace a diverse range of responsibilities:
Devising technical design solutions (FE + BE collaboration)
Mentoring new developers and helping out with development
Assisting with back-end implementation when needed, using Java (Spring)

Additionally, I have proposed and implemented several improvements:
* Established an initial E2E Testing environment, which is already yielding time savings for each release.
* Developed an automated tool for tracking releases and their associated tasks, eliminating the need for engineer assistance in this area (NodeJS and *Rust*)
* Implemented a command-line tool to expedite building cross-project apps (NodeJS and *Rust*)
* Implemented a command-line tool for environment setup for new developers (Bash + NodeJS)`,
    },
    {
      startDate: new Date("2018-01-01").toISOString(),
      endDate: new Date("2019-01-01").toISOString(),
      companyName: "Company 2",
      description: `
Driving force in the successful migration of a fully Native codebase to React-Native
Learned TypeScript on the go, delved deep into how JavaScript engines and how they work
Pushed and implemented a switch from JSC to Hermes, boosting startup times by 30% on Android
      `,
    },
  ],

  skills: [
    {
      name: "TypeScript",
      level: 1,
    },
    {
      name: "React",
      level: 0.2,
    },
  ],

  contractDetails: {
    city: "Sofia",
    email: "somelongassemail@gmail.com",
    phone: undefined,
    country: "Bulgaria",
  },

  educationHistory: [
    {
      schoolName: "School 1",
      startDate: new Date("2019-01-01").toISOString(),
      endDate: "present",
    },
  ],

  socials: [
    {
      name: "Medium",
      link: "https://medium.com/@dragoncodes",
    },
  ],

  hobbies: ["Fantasy reading"],
};

export default async function ResumeTemplater(props: { context: any }) {
  return (
    <div>
      <Resume resume={resume} />
    </div>
  );
}
