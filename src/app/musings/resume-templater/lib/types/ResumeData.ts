import { EducationItem } from "./EducationItem";
import { EmploymentItem } from "./EmploymentItem";
import { SkillItem } from "./SkillItem";
import { SocialItem } from "./SocialItem";

export type ResumeData = {
  profile: {
    name: string;
    jobTitle: string;
    image: string | undefined;
  };

  summary: string;

  employmentHistory: EmploymentItem[];
  educationHistory: EducationItem[];

  contractDetails: {
    city: string;
    country: string;
    phone: string | undefined;
    email: string;
  };

  socials: SocialItem[];

  skills: SkillItem[];

  hobbies: string[];
};
