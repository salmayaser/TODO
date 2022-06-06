import "./App.css";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={users}></UsersList>
    </div>
  );
}

export default App;
