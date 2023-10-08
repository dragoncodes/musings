import { ResumeData } from "../types/ResumeData";

export function Profile(props: { profile: ResumeData["profile"] }) {
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
