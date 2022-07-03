import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <div className={css.friendItem}>
      <span className={isOnline ? css.isOnline : css.status}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={css.friendName}>{name}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default FriendListItem;
