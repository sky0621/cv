export interface ISkillVersion {
  from: {
    year: number;
    month: number;
  };
  to?: {
    year: number;
    month: number;
  };
  period?: number;
  version?: string;
}

export interface ISkillDetail {
  name: string;
  period: number;
  url?: string;
  versions: ISkillVersion[];
}

export interface ISkill {
  tagName: string;
  skills: ISkillDetail[];
}
