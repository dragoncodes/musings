export type EmploymentItem = {
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: "present" | (string & {});
  description: string;
};
