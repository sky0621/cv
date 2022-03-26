import { VFC } from 'react';
import { Item } from 'semantic-ui-react';

export type NoteItem = {
  id: number;
  text: string;
  order: number;
};

type Props = {
  items: NoteItem[];
};

const NoteItemsComponent: VFC<Props> = (props) => {
  console.log('NoteItemsComponent');
  const { items } = props;

  return (
    <Item.Group>
      {items.map((item) => (
        <Item key={item.id}>
          <Item.Content>
            <Item.Header>{item.text}</Item.Header>
            <Item.Extra>order: {item.order}</Item.Extra>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  );
};

export default NoteItemsComponent;
