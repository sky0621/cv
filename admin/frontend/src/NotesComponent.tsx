import { useEffect, useState, VFC } from 'react';
import { Header, Item } from 'semantic-ui-react';
import axios, { AxiosResponse } from 'axios';
import NoteItemsComponent, { NoteItem } from './NoteItemsComponent';

const url = 'http://localhost:3002/users/sky0621/notes';

export type Note = {
  id: number;
  label: string;
  showNow: boolean;
  isMultipleLine: boolean;
  memo: string | null;
  order: number;
  userId: number;
  items: NoteItem[];
};

const NotesComponent: VFC = () => {
  console.log('  NotesComponent');

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

  return (
    <>
      <Header as="h1">Note</Header>
      <Item.Group>
        {notes?.map((note) => (
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
