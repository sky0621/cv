import { VFC } from 'react';
import './App.css';
import Likes, { Like } from './Likes';

const App: VFC = () => {
  const likes: Like[] = [
    { name: 'Go' },
    { name: 'Vue.js/Nuxt.js' },
    { name: 'GraphQL' },
    { name: 'GCP' },
    { name: 'Scrum' },
    { name: 'Linux' },
    { name: 'EdTech' },
    { name: 'JetBrains' },
  ];

  return <Likes likes={likes} />;
};

export default App;
