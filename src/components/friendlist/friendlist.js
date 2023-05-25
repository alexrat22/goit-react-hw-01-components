import PropTypes from 'prop-types';
import { FriendListContainer } from './friendlist.styled';
import FriendListItem from '../friendlistitem/friendlistitem';

export default function FriendList({ friends }) {
  return (
    <FriendListContainer>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendListContainer>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
