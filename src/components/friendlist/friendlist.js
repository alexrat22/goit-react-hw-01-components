import PropTypes from "prop-types";
import { FriendListContainer } from "./friendlist.styled";
import FriendListItem from "../friendlistitem/friendlistitem";

function FriendList({ friends }) {
  return (
    <FriendListContainer>
      {friends.map((friend) => (
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
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendList;
