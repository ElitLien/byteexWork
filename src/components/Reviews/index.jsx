import "./style.css";
import { useStrapi } from "../../hooks/useStrapi";
import { mediaUrl } from "../../api/strapi";
import CustomizeButton from "../CustomizeButton";
import RatingBadge from "../RatingBadge";
import CarouselDots from "../CarouselDots";
import { ArrowLeft, ArrowRight, Stars, ReviewAvatar } from "../../media/icons";
import { useCarousel } from "../../hooks/useCarousel";
import { reviewImage, reviewsMobileImage } from "../../media/images";

const fallbackReviews = [
  {
    name: "Jane, S.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
  },
  {
    name: "Jane, S.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.",
  },
  {
    name: "Jane, S.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
  },
  {
    name: "Mia, R.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo.",
  },
  {
    name: "Sara, L.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
  },
  {
    name: "Emma, K.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo.",
  },
];

const Reviews = () => {
  const { ref, dot, onScroll, step, goTo } = useCarousel();
  const { data } = useStrapi("reviews?populate=*");
  const { data: section } = useStrapi("reviews-section?populate=*");

  const reviews = data?.length ? data : fallbackReviews;
  const title = section?.title || "What are our fans saying?";
  const text =
    section?.text ||
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.";
  const image = section?.image ? mediaUrl(section.image) : reviewImage;
  const mobileImage = section?.mobileImage
    ? mediaUrl(section.mobileImage)
    : reviewsMobileImage;

  return (
    <div className="reviews">
      <h2 className="reviewsTitle">{title}</h2>
      <p className="reviewsText">{text}</p>
      <picture>
        <source media="(max-width: 480px)" srcSet={mobileImage} />
        <img className="reviewsImage" src={image} alt="" />
      </picture>
      <div className="reviewsMainSection">
        <div className="reviewsMainSectionArrow" onClick={() => step(-1)}>
          <ArrowLeft />
        </div>
        <div className="reviewsSections" ref={ref} onScroll={onScroll}>
          {reviews.map((review, index) => (
            <div className="reviewsSection" key={index}>
              <div className="reviewsSectionBl">
                <div className="reviewsSectionBlock">
                  <ReviewAvatar />
                  <div className="reviewsSectionInnerBlock">
                    <Stars />
                    <p className="reviewsSectionName">{review.name}</p>
                  </div>
                </div>
                <p className="reviewsSectionText">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="reviewsMainSectionArrow" onClick={() => step(1)}>
          <ArrowRight />
        </div>
      </div>
      <CarouselDots count={reviews.length} active={dot} onSelect={goTo} />
      <CustomizeButton />
      <RatingBadge />
    </div>
  );
};

export default Reviews;
