import "./style.css";
import { StarsRating } from "../../media/icons";

const RatingBadge = () => (
  <div className="ratingBadge">
    <StarsRating />
    <span className="ratingBadgeText">Over 500+ 5 Star Reviews Online</span>
  </div>
);

export default RatingBadge;
