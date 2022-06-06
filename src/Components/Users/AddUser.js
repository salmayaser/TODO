const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
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
  );
};

export default AddUser;
