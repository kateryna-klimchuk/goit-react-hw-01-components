import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <div className={css.friends}>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
            />
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
