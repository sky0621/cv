import { VFC } from 'react';
import { Header } from 'semantic-ui-react';
import LikesComponent, { Like } from './LikesComponent';

type Basic = {
  id: number;
  nickname: string;
  birthday: string;
  job: string;
  belongTo: string;
  likes: Like[];
};

const BasicComponent: VFC = () => {
  console.log('BasicComponent');

  // TODO: APIコールでGet
  const likes: Like[] = [
    { id: 1, name: 'Go' },
    { id: 2, name: 'Vue.js/Nuxt.js' },
    { id: 3, name: 'GraphQL' },
    { id: 4, name: 'GCP' },
    { id: 5, name: 'Scrum' },
    { id: 6, name: 'Linux' },
    { id: 7, name: 'EdTech' },
    { id: 8, name: 'JetBrains' },
  ];
  const basic: Basic = {
    id: 2,
    nickname: 'sky0621',
    birthday: '1978-06-01',
    job: 'ソフトウェア開発者',
    belongTo: 'フリー（個人事業主）',
    likes,
  };

  return (
    <>
      <Header as="h1">Basic</Header>
      <LikesComponent likes={basic.likes} />
    </>
  );
};

export default BasicComponent;
