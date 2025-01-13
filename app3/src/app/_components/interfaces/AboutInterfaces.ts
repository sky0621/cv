export interface IAttribute {
  avatarUrl: string;
  belongTo: string;
  birthday: {
    day: number;
    month: number;
    year: number;
  };
  id: number;
  job: string;
  name: string;
  nickname: string;
  pr: string;
}

export interface IActivity {
  icon: string;
  name: string;
  url: string;
}

export interface IQualification {
  gotDate: string;
  memo: string;
  name: string;
  organization: string;
  url: string;
}
