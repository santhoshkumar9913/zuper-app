export type Job = {
  id: string;
  job_id: number;
  job_title: string;
  status: string;
  assigned_to: assigned_to[];
  priority: string;
  customer: string;
  job_tags?: string[];
};

export type assigned_to = {
    id: string;
    name: string;
    image_url: string;
    designation: string;
}
