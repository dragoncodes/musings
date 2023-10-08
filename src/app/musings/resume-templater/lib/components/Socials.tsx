import { ResumeData } from "../types/ResumeData";

export function Socials(props: { socials: ResumeData["socials"] }) {
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
