import "./style.css";
import { useStrapi } from "../../hooks/useStrapi";
import { mediaUrl } from "../../api/strapi";
import { Stars } from "../../media/icons";
import {
  amyImage,
  ecoStylistImage,
  canadianLivingImage,
  jillianHarrisImage,
  ecoHubImage,
  trendHunterImage,
} from "../../media/images";

const fallbackLogos = [
  { src: ecoStylistImage, name: "ECO-STYLIST" },
  { src: canadianLivingImage, name: "Canadian Living" },
  { src: jillianHarrisImage, name: "Jillian Harris" },
  { src: ecoHubImage, name: "The Eco Hub" },
  { src: trendHunterImage, name: "Trend Hunter" },
];

const fallbackReviewText =
  "Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.";

const AsSeenIn = () => {
  const { data: section } = useStrapi("seen-in-section?populate=*");
  const { data: logosData } = useStrapi("press-logos?populate=*&sort=order:asc");

  const label = section?.label || "as seen in";
  const reviewerName = section?.reviewerName || "Amy P.";
  const reviewText = section?.reviewText || fallbackReviewText;
  const reviewSub = section?.reviewSub || "One of 500+ 5 Star Reviews Online";
  const avatar = section?.reviewAvatar
    ? mediaUrl(section.reviewAvatar)
    : amyImage;
  const logos = logosData?.length
    ? logosData.map((l) => ({ src: mediaUrl(l.logo), name: l.name }))
    : fallbackLogos;

  return (
    <div className="seenIn">
      <div className="seenInContainter">
        <div className="seenInReview">
          <div className="seenInReviewHead">
            <img className="seenInReviewAvatar" src={avatar} alt="" />
            <div className="seenInReviewHeadInfo">
              <div className="seenInReviewHeadTop">
                <p className="seenInReviewName">{reviewerName}</p>
                <div className="seenInReviewStars">
                  <Stars />
                </div>
              </div>
              <span className="seenInReviewSub">{reviewSub}</span>
            </div>
          </div>
          <p className="seenInReviewText">{reviewText}</p>
        </div>
      </div>
      <div className="seenInContent">
        <p className="seenInLabel">{label}</p>
        <div className="seenInLogos">
          {logos.map((logo, index) => (
            <div className="seenInEcoStylistImage" key={index}>
              <img src={logo.src} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AsSeenIn;
