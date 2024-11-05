import s from './Natification.module.css';

const Notification = ({ message }) => (
  <p className={s.notification}>{message}</p>
);

export default Notification;
