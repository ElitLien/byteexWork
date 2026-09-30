import { useState } from "react";
import "./style.css";
import { ArrowLeft, ArrowRight } from "../../media/icons";
import { whiteRobeImage, grayRobeImage } from "../../media/images";

const iconShop = (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="21" fill="#F9F0E5" />
    <path transform="translate(8.2 11.2)" d="M7.33579 3.13782C7.33579 2.8449 7.58968 2.60749 7.90294 2.60749H21.1618C21.3272 2.60749 21.4843 2.67502 21.592 2.79222C21.6998 2.90948 21.7474 3.06493 21.7225 3.21778L21.156 6.69182C21.1133 6.95427 20.8715 7.1423 20.5961 7.1423C20.5677 7.1423 20.5389 7.14035 20.5099 7.13617C20.2002 7.09203 19.9875 6.82151 20.0347 6.53195L20.5016 3.66814H7.90294C7.58968 3.66814 7.33579 3.43067 7.33579 3.13782ZM11.6416 12.1787H6.61539L4.51986 0.740807C4.47323 0.486193 4.23717 0.300049 3.96084 0.300049H0.867193C0.553941 0.300049 0.300049 0.537457 0.300049 0.830373C0.300049 1.12329 0.553941 1.3607 0.867193 1.3607H3.48261L5.57815 12.7986C5.62547 13.0571 5.86525 13.2395 6.13647 13.2395C6.16823 13.2394 6.20056 13.237 6.23289 13.2318C6.23515 13.2314 6.23736 13.231 6.23963 13.2306C6.27303 13.2364 6.3075 13.2393 6.34266 13.2393H11.6416C11.9549 13.2393 12.2088 13.0019 12.2088 12.709C12.2088 12.4161 11.9549 12.1787 11.6416 12.1787ZM10.5454 15.9316V16.8727C10.5454 17.7573 9.77578 18.4769 8.82978 18.4769C7.88378 18.4769 7.11417 17.7573 7.11417 16.8727V15.9316C7.11417 15.047 7.88372 14.3274 8.82965 14.3274C9.77571 14.3274 10.5454 15.047 10.5454 15.9316ZM9.4111 15.9316C9.4111 15.6319 9.15034 15.388 8.82978 15.388H8.82965C8.50922 15.388 8.24846 15.6319 8.24846 15.9316V16.8727C8.24846 17.1724 8.50922 17.4163 8.82965 17.4163C9.15028 17.4163 9.4111 17.1724 9.4111 16.8727V15.9316ZM25.2216 10.9853C24.887 13.4994 23.5253 15.7412 21.3874 17.2977C19.5882 18.6075 17.4204 19.3 15.1762 19.3C14.7537 19.3 14.3286 19.2755 13.9026 19.2259C13.5463 19.1843 13.1871 19.1242 12.8346 19.0471C12.5981 18.9955 12.423 18.8087 12.3993 18.5826C12.3257 17.8828 12.3356 17.1729 12.4289 16.4725C13.12 11.2824 18.1978 7.58535 23.7481 8.23176C24.1048 8.27336 24.464 8.33352 24.816 8.41048C25.0524 8.46222 25.2274 8.64889 25.2513 8.87481C25.3251 9.57425 25.3151 10.2844 25.2216 10.9853ZM24.1535 9.36394C23.9718 9.33218 23.7894 9.30555 23.6077 9.28434C18.6786 8.71064 14.1682 11.9939 13.5544 16.6036C13.5194 16.8665 13.4976 17.1308 13.489 17.3954L18.6775 13.1448C18.913 12.9518 19.2714 12.9739 19.4778 13.1942C19.6842 13.4145 19.6605 13.7496 19.4249 13.9426L14.2355 18.1939C16.5574 18.418 18.8427 17.8059 20.6904 16.4607C22.5893 15.0783 23.7987 13.0872 24.0959 10.8542C24.162 10.3594 24.1812 9.85974 24.1535 9.36394Z" fill="#01005B" stroke="#01005B" stroke-width="0.6" />
  </svg>
);

const iconMoon = (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="21" fill="#F9F0E5" />
    <path d="M21 8V34" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20.9998 27.9998C17.1298 27.9998 13.9998 24.8698 13.9998 20.9998C13.9998 17.1298 17.1298 13.9998 20.9998 13.9998" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M11.8098 11.8105L13.9298 13.9305" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8 21H11" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M11.8098 30.1901L13.9298 28.0701" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M21 17.5498C22.2 15.4298 24.48 13.9998 27.09 13.9998C27.25 13.9998 27.4 14.0098 27.56 14.0198C25.89 14.8998 24.76 16.6498 24.76 18.6598C24.76 21.5598 27.11 23.9098 30.01 23.9098C31.61 23.9098 33.04 23.1898 34 22.0598C33.48 25.4298 30.59 27.9998 27.09 27.9998C24.48 27.9998 22.2 26.5698 21 24.4498" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const iconLeaf = (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="21" fill="#F9F0E5" />
    <path d="M10.4531 10.5195C10.6104 10.4731 10.7762 10.51 10.8936 10.6133L10.8945 10.6143C13.5176 12.9064 16.1114 14.2537 18.3584 15.418C21.0555 16.8167 23.2294 17.9576 24.5684 20.0283C25.8941 22.0788 26.4521 25.1389 25.6016 30.499L25.5479 30.8408L25.8477 31.0127C26.3034 31.2722 27.0475 31.5984 27.9209 31.5957C28.8178 31.5928 29.8015 31.2421 30.6982 30.2344V30.2334C30.8652 30.0455 31.1565 30.0266 31.3477 30.1934C31.5329 30.3553 31.5526 30.6395 31.3857 30.8301C30.2621 32.0906 29.0425 32.5 27.9404 32.5C26.7606 32.5 25.6807 32.0299 24.9814 31.543L24.8711 31.4668L24.7373 31.4551L24.251 31.4082C19.4063 30.8801 15.3329 28.6854 12.6582 25.1855L12.3955 24.8311C9.59286 20.938 8.78502 15.9737 10.1465 10.835L10.1455 10.834C10.1863 10.6834 10.3043 10.5636 10.4531 10.5195ZM10.6934 12.5908C9.9487 16.7538 10.7136 20.7465 12.9268 23.9951L13.1455 24.3076C15.3393 27.3563 18.6213 29.4004 22.5254 30.2217L23.9229 30.5166L23.0137 29.415L18.3691 23.7861L18.2158 23.6006L17.9756 23.6045L15.7529 23.6377H15.7461L15.6533 23.6279C15.4742 23.592 15.3345 23.4542 15.2959 23.2793L15.2852 23.1895C15.2854 22.9482 15.4832 22.741 15.7402 22.7363L15.7393 22.7354L16.4336 22.7266L17.4766 22.7129L16.8125 21.9082L15.8477 20.7393L15.832 20.7207L15.8242 20.7129C15.8219 20.7094 15.8194 20.7051 15.8154 20.6992L13.9297 17.8525H13.9307C13.7956 17.648 13.8527 17.3687 14.0605 17.2334L14.0615 17.2324C14.2782 17.0908 14.563 17.1535 14.6982 17.3604L14.7002 17.3633L16.5635 20.1699L16.5781 20.1924L16.5947 20.2119L19.9248 24.2441L20.6221 25.0879L20.8037 24.0088L21.0449 22.5771V22.5762C21.0838 22.3406 21.3164 22.1675 21.5732 22.209H21.5742C21.7937 22.2443 21.9479 22.4279 21.9561 22.6367L21.9502 22.7275L21.4307 25.7949L21.3926 26.0205L21.5381 26.1973L24.0117 29.1924L24.752 30.0879L24.8936 28.9346C25.4055 24.7799 24.961 22.208 23.665 20.3477C22.3886 18.5154 20.3343 17.4623 17.9297 16.2158C15.9372 15.1825 13.7562 14.0504 11.4932 12.2842L10.8398 11.7744L10.6934 12.5908Z" fill="#01005B" stroke="black" />
  </svg>
);

const iconWaves = (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="21" fill="#F9F0E5" />
    <path d="M12.009 16.5696C14.1442 14.7453 15.8308 13.3029 20.4079 15.8763C22.6066 17.112 24.38 17.579 25.8552 17.5766C28.4402 17.5766 30.1158 16.1463 31.5641 14.9095C31.8127 14.6943 31.9673 14.3912 31.9951 14.0645C32.0229 13.7378 31.9218 13.4131 31.7132 13.1594C31.6114 13.0348 31.4856 12.9319 31.3431 12.8566C31.2007 12.7813 31.0445 12.7352 30.8838 12.721C30.7232 12.7068 30.5613 12.7249 30.4077 12.7741C30.2542 12.8232 30.1121 12.9026 29.9899 13.0073C27.856 14.8341 26.1681 16.2765 21.591 13.7006C15.5436 10.3037 12.7106 12.724 10.4348 14.6699C10.1864 14.8852 10.0321 15.1884 10.0045 15.5151C9.97685 15.8418 10.0782 16.1663 10.287 16.42C10.3888 16.5443 10.5147 16.647 10.6571 16.7221C10.7995 16.7971 10.9557 16.843 11.1162 16.8569C11.2768 16.8709 11.4385 16.8526 11.5919 16.8033C11.7452 16.7539 11.8871 16.6744 12.009 16.5696ZM29.9899 19.2184C27.856 21.0427 26.1681 22.4876 21.591 19.9117C15.5436 16.5124 12.7106 18.9338 10.4348 20.8785C10.1864 21.0939 10.0321 21.3971 10.0045 21.7238C9.97685 22.0505 10.0782 22.375 10.287 22.6286C10.3886 22.7531 10.5143 22.8561 10.6567 22.9313C10.799 23.0066 10.9551 23.0527 11.1157 23.0669C11.2763 23.081 11.4381 23.063 11.5915 23.0139C11.745 22.9647 11.8869 22.8854 12.009 22.7807C14.1442 20.9552 15.8308 19.5128 20.4079 22.085C22.6066 23.3231 24.38 23.7877 25.8552 23.7877C28.4402 23.7877 30.1158 22.3574 31.5641 21.1181C31.8129 20.9033 31.9676 20.6004 31.9955 20.2738C32.0233 19.9472 31.922 19.6227 31.7132 19.3692C31.6114 19.2447 31.4856 19.1417 31.3431 19.0664C31.2006 18.9911 31.0443 18.9451 30.8836 18.931C30.7229 18.917 30.561 18.9352 30.4075 18.9845C30.2539 19.0339 30.1119 19.1134 29.9899 19.2184ZM29.9899 25.4283C27.856 27.255 26.1681 28.6975 21.591 26.124C15.5436 22.7247 12.7106 25.145 10.4348 27.0909C10.1864 27.3062 10.0321 27.6094 10.0045 27.9361C9.97685 28.2628 10.0782 28.5873 10.287 28.841C10.3887 28.9654 10.5145 29.0683 10.657 29.1434C10.7994 29.2186 10.9556 29.2645 11.1162 29.2784C11.2768 29.2924 11.4386 29.2741 11.592 29.2247C11.7453 29.1752 11.8872 29.0956 12.009 28.9906C14.1442 27.1663 15.8308 25.7251 20.4079 28.2973C22.6066 29.533 24.38 30 25.8552 30C28.4402 30 30.1158 28.5673 31.5641 27.3305C31.8127 27.1153 31.9673 26.8122 31.9951 26.4855C32.0229 26.1588 31.9218 25.8341 31.7132 25.5803C31.6113 25.456 31.4854 25.3531 31.343 25.2779C31.2005 25.2028 31.0444 25.1567 30.8838 25.1425C30.7232 25.1284 30.5613 25.1464 30.4078 25.1954C30.2543 25.2445 30.1122 25.3237 29.9899 25.4283Z" fill="#01005B" />
  </svg>
);

const proudFeatures = [
  {
    icon: iconShop,
    title: "Ethically sourced.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    icon: iconLeaf,
    title: "Responsibly made.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    icon: iconMoon,
    title: "Made for living in.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    icon: iconWaves,
    title: "Unimaginably comfortable.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
];

const proudSlides = [
  { image: whiteRobeImage, caption: "White Robe" },
  { image: grayRobeImage, caption: "Gray Set" },
  { image: whiteRobeImage, caption: "White Robe" },
  { image: grayRobeImage, caption: "Gray Set" },
  { image: whiteRobeImage, caption: "White Robe" },
  { image: grayRobeImage, caption: "Gray Set" },
  { image: whiteRobeImage, caption: "White Robe" },
  { image: grayRobeImage, caption: "Gray Set" },
];

const Loungewear = () => {
  const [current, setCurrent] = useState(0);

  const showPrev = () =>
    setCurrent((index) => (index - 1 + proudSlides.length) % proudSlides.length);

  const showNext = () =>
    setCurrent((index) => (index + 1) % proudSlides.length);

  return (
    <div className="proud">
      <div className="proudLeft">
        <h2 className="proudTitle">Loungewear you can be proud of.</h2>
        <div className="proudFeatures">
          {proudFeatures.map((feature) => (
            <div className="proudFeature" key={feature.title}>
              <div className="proudFeatureIcon">{feature.icon}</div>
              <div className="proudFeatureContent">
                <h3 className="proudFeatureTitle">{feature.title}</h3>
                <p className="proudFeatureText">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="proudRight">
        <div className="proudCarousel">
          <div className="proudArrow" onClick={showPrev}>
            <ArrowLeft />
          </div>
          <div className="proudImageWrap">
            <img
              className="proudImage"
              src={proudSlides[current].image}
              alt={proudSlides[current].caption}
            />
            <div className="proudThumbs">
              {proudSlides.map((slide, index) => (
                <img
                  className={
                    index === current
                      ? "proudThumb proudThumbActive"
                      : "proudThumb"
                  }
                  src={slide.image}
                  alt=""
                  key={index}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>
          </div>
          <div className="proudArrow" onClick={showNext}>
            <ArrowRight />
          </div>
        </div>
        <p className="proudCaption">{proudSlides[current].caption}</p>
      </div>
    </div>
  );
};

export default Loungewear;
