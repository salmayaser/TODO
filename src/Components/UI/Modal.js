import Card from "./Card";
import classes from "./Modal.module.css";
import Button from "./Button";
const Modal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onCancel}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <p className={classes.content}>{props.message}</p>
        <footer className={classes.actions}>
          <Button onClick={props.onCancel}>Cancel</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
