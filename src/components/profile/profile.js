import PropTypes from 'prop-types';
import {
  ProfileContainer,
  UserInfoContainer,
  ProfileAvatar,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
  ProfileStatsItem,
  ProfileStatsLabel,
  ProfileStatsQuantity,
} from './profile.styled';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileContainer>
      <UserInfoContainer>
        <ProfileAvatar src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </UserInfoContainer>

      <ProfileStats>
        <ProfileStatsItem>
          <ProfileStatsLabel>Followers</ProfileStatsLabel>
          <ProfileStatsQuantity>{stats.followers}</ProfileStatsQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileStatsLabel>Views</ProfileStatsLabel>
          <ProfileStatsQuantity>{stats.views}</ProfileStatsQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileStatsLabel>Likes</ProfileStatsLabel>
          <ProfileStatsQuantity>{stats.likes}</ProfileStatsQuantity>
        </ProfileStatsItem>
      </ProfileStats>
    </ProfileContainer>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
