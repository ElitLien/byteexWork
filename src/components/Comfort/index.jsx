import "./style.css";
import { useStrapi } from "../../hooks/useStrapi";
import CustomizeButton from "../CustomizeButton";
import RatingBadge from "../RatingBadge";
import CarouselDots from "../CarouselDots";
import { ArrowLeft, ArrowRight } from "../../media/icons";
import { useCarousel } from "../../hooks/useCarousel";
import { comfortImage } from "../../media/images";

const fallbackSteps = [
  {
    title: "You save.",
    text: "Browse our comfort sets and save 15% when you bundle.",
  },
  {
    title: "We ship.",
    text: "We ship your items within 1–2 days of receiving your order.",
  },
  {
    title: "You enjoy!",
    text: "Wear hernest around the house, out on the town, or in bed.",
  },
];

const Comfort = () => {
  const { ref, dot, onScroll, step, goTo } = useCarousel();
  const { data } = useStrapi("comfort-section?populate=*");

  const title = data?.title || "Comfort made easy";
  const buttonText = data?.buttonText || "Customize Your Outfit";
  const steps = data?.steps?.length ? data.steps : fallbackSteps;

  return (
    <div className="comfort">
      <h2 className="comfortTitle">{title}</h2>
      <div className="comfortCarousel">
        <div className="comfortArrow" onClick={() => step(-1)}>
          <ArrowLeft />
        </div>
        <div className="comfortSteps" ref={ref} onScroll={onScroll}>
          <div className="comfortStepCard">
            <svg
              width="51"
              height="51"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_1513)">
                <path
                  d="M14.3529 10.9654C14.3529 10.3264 14.8709 9.80842 15.5099 9.80842H42.5581C42.8954 9.80842 43.2159 9.95574 43.4357 10.2114C43.6555 10.4672 43.7527 10.8064 43.7018 11.1398L42.5462 18.7189C42.4589 19.2915 41.9658 19.7017 41.4039 19.7017C41.3459 19.7017 41.2872 19.6975 41.2281 19.6883C40.5963 19.5921 40.1623 19.0019 40.2586 18.3702L41.2112 12.1224H15.5099C14.8709 12.1224 14.3529 11.6043 14.3529 10.9654ZM23.1368 30.6894H12.8833L8.60841 5.73599C8.51328 5.18051 8.03172 4.77441 7.46802 4.77441H1.15698C0.517939 4.77441 0 5.29235 0 5.93139C0 6.57043 0.517939 7.08837 1.15698 7.08837H6.49243L10.7673 32.0418C10.8639 32.6056 11.353 33.0036 11.9063 33.0036C11.9711 33.0035 12.037 32.9981 12.103 32.9868C12.1076 32.9859 12.1121 32.9851 12.1167 32.9842C12.1849 32.9968 12.2552 33.0032 12.3269 33.0032H23.1368C23.7758 33.0032 24.2938 32.4853 24.2938 31.8462C24.2938 31.2072 23.7758 30.6894 23.1368 30.6894ZM20.9005 38.8768V40.9299C20.9005 42.8597 19.3305 44.4298 17.4007 44.4298C15.4708 44.4298 13.9008 42.8597 13.9008 40.9299V38.8768C13.9008 36.947 15.4707 35.3769 17.4004 35.3769C19.3304 35.3769 20.9005 36.947 20.9005 38.8768ZM18.5866 38.8768C18.5866 38.2228 18.0546 37.6909 17.4007 37.6909H17.4004C16.7467 37.6909 16.2148 38.2228 16.2148 38.8768V40.9299C16.2148 41.5837 16.7467 42.1158 17.4004 42.1158C18.0545 42.1158 18.5866 41.5837 18.5866 40.9299V38.8768ZM50.8401 28.0858C50.1573 33.5706 47.3796 38.4614 43.0182 41.857C39.3478 44.7146 34.9255 46.2255 30.3473 46.2255C29.4854 46.2255 28.6182 46.1719 27.7492 46.0637C27.0223 45.973 26.2896 45.8418 25.5706 45.6738C25.0881 45.561 24.7309 45.1535 24.6824 44.6604C24.5324 43.1337 24.5526 41.5848 24.7428 40.0568C26.1527 28.734 36.5114 20.6683 47.8341 22.0785C48.5617 22.1693 49.2945 22.3005 50.0126 22.4684C50.4949 22.5813 50.8519 22.9886 50.9005 23.4814C51.051 25.0074 51.0307 26.5565 50.8401 28.0858ZM48.661 24.5485C48.2905 24.4793 47.9182 24.4212 47.5477 24.3749C37.4922 23.1233 28.2911 30.2861 27.0389 40.3428C26.9674 40.9164 26.9231 41.4931 26.9055 42.0703L37.49 32.797C37.9704 32.376 38.7015 32.4241 39.1226 32.9049C39.5436 33.3854 39.4954 34.1165 39.0148 34.5375L28.4283 43.8123C33.1651 44.3012 37.8269 42.9658 41.5964 40.0311C45.47 37.0152 47.9374 32.6713 48.5436 27.7998C48.6785 26.7203 48.7175 25.6302 48.661 24.5485Z"
                  fill="#01005B"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1513">
                  <rect width="51" height="51" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h3 className="comfortStepCardTitle">{steps[0]?.title}</h3>
            <p className="comfortStepCardText">{steps[0]?.text}</p>
          </div>

          <div className="comfortStepCard">
            <img className="comfortStepCardImage" src={comfortImage} alt="" />
            <h3 className="comfortStepCardTitle">{steps[1]?.title}</h3>
            <p className="comfortStepCardText">{steps[1]?.text}</p>
          </div>

          <div className="comfortStepCard">
            <svg
              width="51"
              height="51"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 5.625V54.375"
                stroke="#15005B"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30 43.125C22.7438 43.125 16.875 37.2562 16.875 30C16.875 22.7438 22.7438 16.875 30 16.875"
                stroke="#15005B"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.7688 12.7686L16.7438 16.7436"
                stroke="#15005B"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.625 30H11.25"
                stroke="#15005B"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.7688 47.2314L16.7438 43.2563"
                stroke="#15005B"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30 23.5313C32.25 19.5563 36.525 16.875 41.4188 16.875C41.7188 16.875 42 16.8938 42.3 16.9125C39.1687 18.5625 37.05 21.8437 37.05 25.6125C37.05 31.05 41.4563 35.4562 46.8938 35.4562C49.8938 35.4562 52.575 34.1062 54.375 31.9875C53.4 38.3062 47.9813 43.125 41.4188 43.125C36.525 43.125 32.25 40.4438 30 36.4688"
                stroke="#15005B"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 className="comfortStepCardTitle">{steps[2]?.title}</h3>
            <p className="comfortStepCardText">{steps[2]?.text}</p>
          </div>
        </div>
        <div className="comfortArrow" onClick={() => step(1)}>
          <ArrowRight />
        </div>
      </div>
      <CarouselDots count={3} active={dot} onSelect={goTo} />

      <CustomizeButton text={buttonText} />
      <RatingBadge />
    </div>
  );
};

export default Comfort;
