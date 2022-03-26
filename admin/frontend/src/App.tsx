import { VFC } from 'react';
import './App.css';
import Likes, { Like } from './Likes';

const App: VFC = () => {
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

  return <Likes likes={likes} />;
};

export default App;
