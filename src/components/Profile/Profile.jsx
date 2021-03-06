import PropTypes from 'prop-types';
import css from './Profile.module.css';
import ProfileDescription from './ProfileDescription';
import ProfileStats from './ProfileStats';

const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <ProfileDescription
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />

      <ProfileStats followers={followers} views={views} likes={likes} />
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
