export interface INoteItem {
  text: string;
}

export interface INote {
  label: string;
  items: INoteItem[];
  memo?: string;
}
