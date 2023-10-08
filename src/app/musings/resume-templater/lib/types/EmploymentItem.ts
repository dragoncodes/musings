export type EmploymentItem = {
  companyName: string;
  startDate: string;
  endDate: "present" | (string & {});
  description: string;
};
