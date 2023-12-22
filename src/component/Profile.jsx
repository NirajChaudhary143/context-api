import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      Name: {user.username} <br />
      password: {user.password}
    </div>
  );
};

export default Profile;
