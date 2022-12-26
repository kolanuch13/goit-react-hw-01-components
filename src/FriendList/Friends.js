import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './Friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <section>
      <ul className={css.friendsList}>
        {friends.map(element => (
            <FriendListItem friend={element} key={element.id}/>
          ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
}

export default FriendList;