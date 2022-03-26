import { VFC } from 'react';
import './App.css';
import BasicComponent from './BasicComponent';
import NotesComponent from './NotesComponent';

const App: VFC = () => {
  console.log('App Component');

  return (
    <>
      <BasicComponent />
      <NotesComponent />
    </>
  );
};

export default App;
