import { VFC } from 'react';
import { Header, Item } from 'semantic-ui-react';

export type NoteItem = {
  id: number;
  text: string;
  order: number;
  noteId: number;
};

type Props = {
  items: NoteItem[];
};

const NoteItemsComponent: VFC<Props> = (props) => {
  console.log('    NoteItemsComponent');
  const { items } = props;

  return (
    <>
      <Header as="h4">- Items -</Header>
      <Item.Group>
        {items.map((item) => (
          <Item key={item.id}>
            <Item.Content>
              <Item.Meta>{item.text}</Item.Meta>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </>
  );
};

export default NoteItemsComponent;
