import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile ({ username, tag, location, location, stats}) => {
   return (
        <div class="profile">
            <div class="description">
                <img src="{user.avatar}" alt="{user.username}" class="avatar" />
                <p class="name">{user.username}</p>
                <p class="tag">{user.tag}</p>
                <p class="location">{user.location}</p>
            </div>

            <ul class="stats">
                <li>
                    <span class="label">{user.stats.followers}</span>
                    <span class="quantity">1000</span>
                </li>
                <li>
                    <span class="label">{user.stats.views}</span>
                    <span class="quantity">2000</span>
                </li>
                <li>
                    <span class="label">{user.stats.likes}</span>
                    <span class="quantity">3000</span>
                </li>
            </ul>
        </div>
    );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
