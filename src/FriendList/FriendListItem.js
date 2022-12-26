import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ friend }) => {
    return (
        <li className={css.item}>
            <span className={`${css.status} ${friend.isOnline ? css.online : css.offline}`}></span>
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }),
}

export default FriendListItem;
