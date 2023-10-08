import { Resume } from "./lib/Resume";
import { ResumeData } from "./lib/types/ResumeData";

const resume: ResumeData = {
  profile: {
    name: "John Doe",
    jobTitle: "Aspiring (Yet Uninspired) Software Engineer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5j_T-H41cuyobO8xAn2GVpSJDKCkOz2qsIhpHdx6QXg&s",
  },

  summary: `
Meet John Doe, the software engineer who dreams big but codes... occasionally. With a passion for the lucrative side of coding, John's motto is, "Why work hard when you can hardly work?" He's an avid fan of Rust, not because he knows it, but because he's heard it's the next big thing. He's got all the Rust books, stickers, and even a Rust-themed coffee mug, but ask him to write a line of Rust code, and he'll probably Google it. Dive into his portfolio, and you'll find a collection of unfinished projects, half-baked ideas, and a sincere wish to someday, maybe, possibly, learn Rust. If only it wasn't so darn challenging!`,

  employmentHistory: [
    {
      startDate: new Date("2019-01-01").toISOString(),
      endDate: undefined,
      companyName: "LazyTech Innovations",
      jobTitle: "Chief Procrastination Officer (CPO)",
      description: `
Oversaw the strategic delay of projects, ensuring they were always postponed to the last possible moment. Pioneered the "I'll do it tomorrow" framework, which, unsurprisingly, is yet to be implemented.`,
    },
    {
      startDate: new Date("2018-01-01").toISOString(),
      endDate: new Date("2019-01-01").toISOString(),
      companyName: "Rustic Dreams Inc.",
      jobTitle: "Lead Rust Evangelist (Without Actual Rust Knowledge)",
      description: `
Promoted the wonders of Rust to anyone who'd listen, armed with buzzwords and a vague understanding. Managed to convince the team to adopt Rust, then promptly outsourced the actual coding to someone who knew what they were doing.`,
    },
  ],

  skills: [
    {
      name: "Procrastination-driven Development",
      level: 1,
    },
    {
      name: "Bookmarking Rust tutorials",
      level: 0.9,
    },
    {
      name: "Attending Rust conferences for the free swag.",
      level: 0.86,
    },
  ],

  contractDetails: {
    city: "Somewhere",
    email: "dont@me",
    phone: undefined,
    country: "Earth",
  },

  educationHistory: [
    {
      schoolName: "School of Rock",
      description: "",
      startDate: new Date("2019-01-01").toISOString(),
      endDate: undefined,
    },
  ],

  socials: [
    {
      name: "Blog (John's Journal of Journeys Not Yet Taken)",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ],

  hobbies: ["Meditative Napping"],
};

export default function ResumeTemplater() {
  return (
    <div>
      <Resume resume={resume} />
    </div>
  );
}
