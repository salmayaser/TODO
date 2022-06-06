import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (!name.trim() && !age.trim()) return;
    if (+age <= 0) return;
    console.log(name, age);
    setAge("");
    setName("");
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={nameChangeHandler}
            type="text"
            id="name"
            name="name"
            value={name}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            onChange={ageChangeHandler}
            type="number"
            id="age"
            name="age"
            value={age}
          ></input>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
