import { VFC } from 'react';

export type Like = {
  name: string;
};

type Props = {
  likes: Like[];
};

const Likes: VFC<Props> = (props) => {
  const { likes } = props;

  return (
    <ul>
      {likes.map((like) => (
        <li>{like.name}</li>
      ))}
    </ul>
  );
};

export default Likes;
