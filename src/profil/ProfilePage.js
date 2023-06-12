import Profile from "./profile";


const ProfilePage = () => {
  const handleNameClick = (name) => {
    alert(`You clicked on ${name}`);
  };

  return (
    <div>
      <h1>Welcome to my profile page!</h1>
      <Profile
        fullName="Benlakhder Feres"
        profession="Cs student"
        bio="Feres is a CS student with a passion for technology and programming. They are always seeking to expand their knowledge and skills in the field of computer science, and are eager to tackle new challenges and solve complex problems. Feres is a team player who enjoys collaborating with others and sharing ideas, and is always looking for ways to contribute to their community. In their free time, Feres enjoys exploring new technologies, playing video games, and reading about the latest trends in computer science.."
        handleName={handleNameClick}
      >
       
      </Profile>
    </div>
  );
};

export default ProfilePage;