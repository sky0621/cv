import { VFC } from 'react';
import { Header, Item } from 'semantic-ui-react';
import NoteItemsComponent, { NoteItem } from './NoteItemsComponent';

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

type Props = {
  notes: Note[];
};

const NotesComponent: VFC<Props> = (props) => {
  console.log('  NotesComponent');
  const { notes } = props;

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
