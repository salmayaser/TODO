import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  if (!props.users.length) {
    return;
  }
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age})
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
