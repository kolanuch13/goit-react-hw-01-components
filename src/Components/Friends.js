import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from '../styles/Friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <section>
      <ul className={clsx(css.friendsList)}>
          {friends.map(friend => (
              <li className={clsx(css.item)} key={friend.id}>
                  <span className={clsx(css.status)} id={`${friend.isOnline}`}>{friend.isOnline}</span>
                  <img className={clsx(css.avatar)} src={friend.avatar} alt="User avatar" width="48" />
                <p className="name">{friend.name}</p>
              </li>
          ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape(
        ({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    )),
}

export default FriendList;