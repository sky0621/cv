import { VFC } from 'react';
import { Header, Item } from 'semantic-ui-react';
import NoteItemsComponent, { NoteItem } from './NoteItemsComponent';

export type Note = {
  id: number;
  label: string;
  showNow: boolean;
  isMultipleLine: boolean;
  memo: string;
  order: number;
  items: NoteItem[];
};

const NotesComponent: VFC = () => {
  console.log('NotesComponent');

  // TODO: APIコールでGet
  const noteItems1: NoteItem[] = [
    {
      id: 1,
      text:
        '2002年より、主にJavaで構築するWebシステム（BtoBが多め）開発に従事。\n' +
        '\n' +
        '2016年より、Golang及びクラウド(AWSないしGCP)を使ったシステム開発に従事。2018年以降は左記に加えフロントエンドにVue.js/Nuxt.jsを使うWebシステム開発が中心。\n' +
        '\n' +
        '2019年以降の開発ではGraphQLを使用。\n' +
        '\n' +
        'システムのジャンルは、さまざま。\n' +
        '\n' +
        '（人材紹介系、決済代行、検索ポータル、貿易保険、営業支援、不動産ポータル、会員管理、ネットワーク管理、ネット広告、等々）\n' +
        '\n' +
        '工程としては、要件定義からリリース、保守・運用まで経験済み。\n' +
        '\n' +
        '過去、Androidアプリ（v2.3及びv4の頃）開発、PHP（v5）でのWebアプリ開発に2年ほど関わる。\n' +
        '\n' +
        'また、Javaで「教育」系Webシステム開発時に１年ほどScrumを経験。',
      order: 1,
    },
  ];
  const noteItems2: NoteItem[] = [
    {
      id: 2,
      text: '就労中。 フリーとして参画できる案件であれば内容次第で話を聞きたい。',
      order: 1,
    },
  ];
  const noteItems3: NoteItem[] = [
    {
      id: 3,
      text: '【必須】新規開発、ないし、ローンチから半年以内の案件',
      order: 1,
    },
    {
      id: 4,
      text: '【必須】フロントエンド、バックエンド、インフラ各要素万遍なく関われる案件',
      order: 2,
    },
  ];
  const notes: Note[] = [
    {
      id: 1,
      label: 'サマリ',
      showNow: false,
      isMultipleLine: true,
      memo: '',
      order: 1,
      items: noteItems1,
    },
    {
      id: 2,
      label: '就労状況',
      showNow: true,
      isMultipleLine: false,
      memo: '',
      order: 2,
      items: noteItems2,
    },
    {
      id: 3,
      label: '就労条件',
      showNow: false,
      isMultipleLine: false,
      memo: '',
      order: 3,
      items: noteItems3,
    },
  ];

  return (
    <>
      <Header as="h1">Note</Header>
      <Item.Group>
        {notes.map((note) => (
          <Item key={note.id}>
            <Item.Content>
              <Item.Header>{note.label}</Item.Header>
              <Item.Meta>order: {note.order}</Item.Meta>
              <Item.Extra>
                <NoteItemsComponent items={note.items} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </>
  );
};

export default NotesComponent;
