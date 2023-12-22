import Login from "./component/Login";
import Profile from "./component/Profile";
import UserContextProvider from "./context/UserContextProvider";
export default function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}
