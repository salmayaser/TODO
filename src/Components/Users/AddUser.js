import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import { useState } from "react";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isError, setIsError] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const onCancelHandler = () => {
    setIsError(false);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (!name.trim() && !age.trim()) {
      setIsError(true);
      setTitle("Error");
      setMessage("Please enter name and age");
      return;
    }
    if (+age <= 0) {
      setIsError(true);
      setTitle("Error");
      setMessage("Please enter a valid age");
      return;
    }
    props.onAddUser({ name, age, id: Math.random().toString() });
    setAge("");
    setName("");
  };
  return (
    <div>
      {isError && (
        <Modal
          onCancel={onCancelHandler}
          title={title}
          message={message}
        ></Modal>
      )}
      {!isError && (
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
      )}
    </div>
  );
};

export default AddUser;
