export interface IDateRange {
  year: number;
  month: number;
}

export interface ISkillRef {
  id: number;
  name: string;
  url?: string;
  tagId?: number;
}

export interface ISkillItem {
  skill: ISkillRef;
  version?: string;
}

export interface ISkillGroup {
  label: string;
  skills: ISkillItem[];
}

export interface ICareerTask {
  name: string;
  description: string[];
}

export interface ICareer {
  id: number;
  name: string;
  from: IDateRange;
  to?: IDateRange;
  description: string[];
  tasks: ICareerTask[];
  skillGroups: ISkillGroup[];
}

export interface ICareerGroup {
  id: number;
  label: string;
  careers: ICareer[];
}
