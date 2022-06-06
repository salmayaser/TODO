import Card from "../UI/Card";

import classes from "./AddUser.module.css";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age"></input>
        </div>
        <button>Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
