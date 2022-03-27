import { VFC } from 'react';
import './App.css';
import BasicComponent from './BasicComponent';
import NotesContainer from './NotesContainer';

const App: VFC = () => {
  console.log('App Component');

  return (
    <>
      <BasicComponent />
      <NotesContainer />
    </>
  );
};

export default App;
