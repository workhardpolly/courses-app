export type Lesson = {
  _id: string;
  id: string;
  name: string;
  title: string;
  type: string;
  published?: boolean;
  links?: [string, string][];
  hidden?: boolean;
  shortSummary?: string;
  keyPoints?: string[];
  takeaways?: string[];
  youtube?: string;
  prerequisite?: string[];
  hometask?: string[];
  notes?: string;
  completed?: boolean;
};
