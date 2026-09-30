import "./style.css";
import { Stars } from "../../media/icons";
import {
  amyImage,
  ecoStylistImage,
  canadianLivingImage,
  jillianHarrisImage,
  ecoHubImage,
  trendHunterImage,
} from "../../media/images";

const AsSeenIn = () => (
  <div className="seenIn">
    <div className="seenInContainter">
      <div className="seenInReview">
        <div className="seenInReviewHead">
          <img className="seenInReviewAvatar" src={amyImage} alt="" />
          <div className="seenInReviewHeadInfo">
            <div className="seenInReviewHeadTop">
              <p className="seenInReviewName">Amy P.</p>
              <div className="seenInReviewStars">
                <Stars />
              </div>
            </div>
            <span className="seenInReviewSub">
              One of 500+ 5 Star Reviews Online
            </span>
          </div>
        </div>
        <p className="seenInReviewText">
          Overjoyed with my Loungewear set. I have the jogger and the
          sweatshirt. Quality product on every level. From the compostable
          packaging, to the supplied washing bag, even the garments smells like
          fresh herbs when I first held them.
        </p>
      </div>
    </div>
    <div className="seenInContent">
      <p className="seenInLabel">as seen in</p>
      <div className="seenInLogos">
        <div className="seenInEcoStylistImage">
          <img src={ecoStylistImage} alt="ECO-STYLIST" />
        </div>
        <div className="seenInEcoStylistImage">
          <img src={canadianLivingImage} alt="Canadian Living" />
        </div>
        <div className="seenInEcoStylistImage">
          <img src={jillianHarrisImage} alt="Jillian Harris" />
        </div>
        <div className="seenInEcoStylistImage">
          <img src={ecoHubImage} alt="The Eco Hub" />
        </div>
        <div className="seenInEcoStylistImage">
          <img src={trendHunterImage} alt="Trend Hunter" />
        </div>
      </div>
    </div>
  </div>
);

export default AsSeenIn;
