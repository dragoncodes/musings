import { ResumeData } from "../types/ResumeData";

export function Contacts(props: { contacts: ResumeData["contractDetails"] }) {
  return (
    <div>
      <div className="font-medium">Details</div>

      <div>{props.contacts.city}</div>
      <div>{props.contacts.country}</div>
      {props.contacts.phone ? <div>{props.contacts.phone}</div> : null}
      <a href={`mailto:${props.contacts.email}`} className="text-blue-500">
        {props.contacts.email}
      </a>
    </div>
  );
}
