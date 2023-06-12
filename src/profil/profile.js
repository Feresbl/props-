import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f2f2f2',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.2)',
      maxWidth: '500px',
      margin: '0 auto',
    },
    image: {
      width: '200px',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '50%',
      marginBottom: '20px',
    },
    name: {
      fontSize: '30px',
      fontWeight: 'bold',
      margin: '0',
    },
    profession: {
      fontSize: '20px',
      margin: '10px 0',
    },
    bio: {
      fontSize: '16px',
      textAlign: 'center',
      lineHeight: '1.5',
    },
  };

  return (
    <div style={styles.container}>
      {children && (
        <img src={children} alt="Profile" style={styles.image} />
      )}
      <h1 style={styles.name} onClick={() => handleName(fullName)}>
        {fullName}
      </h1>
      <h2 style={styles.profession}>{profession}</h2>
      <p style={styles.bio}>{bio}</p>
    </div>
  );
};

Profile.defaultProps = {
  bio: 'No bio provided',
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  bio: PropTypes.string,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.elementType.isRequired,
};

export default Profile;