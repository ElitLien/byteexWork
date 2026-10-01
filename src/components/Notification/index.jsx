import "./style.css";
import { useStrapi } from "../../hooks/useStrapi";

const fallbackText =
  "CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE SHIPPING on orders > $200 | easy 45 day return window.";

const Notification = () => {
  const { data } = useStrapi("notification");
  const text = data?.text || fallbackText;

  return (
    <div className="notification">
      <p className="notificationText">{text}</p>
    </div>
  );
};

export default Notification;
