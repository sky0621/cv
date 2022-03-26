import { VFC } from 'react';
import { Header, Item } from 'semantic-ui-react';

export type Like = {
  id: number;
  name: string;
};

type Props = {
  likes: Like[];
};

const LikesComponent: VFC<Props> = (props) => {
  console.log('LikesComponent');
  const { likes } = props;

  return (
    <>
      <Header>お気に入り</Header>
      <Item.Group>
        {likes.map((like) => (
          <Item key={like.id}>
            <Item.Content>{like.name}</Item.Content>
          </Item>
        ))}
      </Item.Group>
    </>
  );
};

export default LikesComponent;
