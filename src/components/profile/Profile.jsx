import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({avatar, username, tag, location, stats }) => {
<div className={css.profile}>
    <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.profileName}>{username}</p>
        <p className={css.profileTag}>{tag}</p>
        <p className={css.profileLocation}>{location}</p>
    </div>
    <ul class={css.stats}>
    <li className={css.followersList}>
      <span class={css.label}>Followers</span>
      <span class={css.quantity}>{stats.followers}</span>
    </li>
    <li className={css.viewsList}>
      <span class={css.label}>Views</span>
      <span class={css.quantity}>{stats.views}</span>
    </li>
    <li className={css.likesList}>
      <span class={css.label}>Likes</span>
      <span class={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
};

Profile.protoTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};