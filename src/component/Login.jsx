import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleForm = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <form>
        <input
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: "10px" }}
          type="text"
          placeholder="Name"
          name="name"
        />
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "10px" }}
          type="password"
          placeholder="*****"
          name="password"
        />
        <br />
        <input onClick={handleForm} type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default Login;
