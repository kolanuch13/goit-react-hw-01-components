import FriendListItem from './FriendListItem';
import css from './Friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <section>
      <ul className={css.friendsList}>
        <FriendListItem friends={friends} />
      </ul>
    </section>
  );
}

export default FriendList;