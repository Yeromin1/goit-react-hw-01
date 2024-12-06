import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.item}>Followers</span>
          <span className={styles.likes}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.item}>Views</span>
          <span className={styles.likes}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.item}>Likes</span>
          <span className={styles.likes}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
