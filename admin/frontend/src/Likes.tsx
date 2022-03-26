import { VFC } from 'react';
import { Header, Item } from 'semantic-ui-react';

export type Like = {
  id: number;
  name: string;
};

type Props = {
  likes: Like[];
};

const Likes: VFC<Props> = (props) => {
  const { likes } = props;

  return (
    <>
      <Header as="h2">お気に入り</Header>
      <Item.Group>
        {likes.map((like) => (
          <Item key={like.id}>
            <Item.Content>
              <Item.Header>{like.name}</Item.Header>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </>
  );
};

export default Likes;
