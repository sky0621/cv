import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Note } from './NotesComponent';

const url = 'http://localhost:3002/users/sky0621/notes';

// eslint-disable-next-line import/prefer-default-export
export const useNotes = (): [Note[]] => {
  console.log('  useNotes');

  const [notes, setNotes] = useState<Note[]>();

  useEffect(() => {
    console.log('   !useEffect@notes!');
    axios
      .get(url)
      .then((res: AxiosResponse<Note[]>) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!notes) {
    return [[] as Note[]];
  }

  return [notes];
};
