import PropTypes from 'prop-types';
import css from './Profile.module.css';
import { AiOutlineTeam, AiOutlineLike, AiOutlineFundView } from 'react-icons/ai';

const Profile = ({ avatar, username, tag, location, followers, views, likes }) => {
  return (
    <section>
        <div className={css.profile}>
            <div className={css.description}>
                <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>
            <ul className={css.stats}>
                <li>
                    <AiOutlineTeam/> 
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </li>
                <li>
                    <AiOutlineLike/>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </li>
                <li>
                    <AiOutlineFundView/>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div>
    </section>
  );
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}

export default Profile;