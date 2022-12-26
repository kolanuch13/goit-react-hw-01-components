import PropTypes from 'prop-types';
import css from './Friends.module.css';

const FriendListItem = ({ friends }) => {
    return (
        friends.map(friend => (
            <li className={css.item} key={friend.id}>
                {friend.isOnline && (<span className={css.status}></span>)}
                <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                <p className="name">{friend.name}</p>
            </li>
            ))
        )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape(
        ({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    )),
}

export default FriendListItem;
