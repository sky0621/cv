import { VFC } from 'react';
import NotesComponent from './NotesComponent';
import { useNotes } from './NotesHooks';

const NotesContainer: VFC = () => {
  console.log('  NotesContainer');
  const [notes] = useNotes();

  return <NotesComponent notes={notes} />;
};

export default NotesContainer;
