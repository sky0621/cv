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
  period: number; // 累計経験期間
  url?: string;
  versions: ISkillVersion[];
}

export interface ISkillsFile {
  tagName: string; // 例: "プログラミング言語"
  skills: ISkillDetail[];
}
