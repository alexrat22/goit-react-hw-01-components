import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from "./friendlistitem.styled";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}

export default FriendListItem;
