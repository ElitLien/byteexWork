import React, { useState } from "react";
import "./style.css";

const MainPage = () => {
  const [proudCurrent, setProudCurrent] = useState(0);

  const logo = "https://byteex-task.s3.eu-north-1.amazonaws.com/LOGO.png";
  const headPhoto =
    "https://byteex-task.s3.eu-north-1.amazonaws.com/Group+6034.png";
  const about_photo =
    "https://byteex-task.s3.eu-north-1.amazonaws.com/Group+6036.png";
  const comfortImage =
    "https://byteex-task.s3.eu-north-1.amazonaws.com/Group+4402.png";
  const reviewImage =
    "https://byteex-task.s3.eu-north-1.amazonaws.com/Group+4522.jpg";
  const questionsImage =
    "https://byteex-task.s3.eu-north-1.amazonaws.com/Component+5.png";
  const ecoStylistImage = "https://byteex-task.s3.eu-north-1.amazonaws.com/Artboard3+1.png";
  const canadianLivingImage = "https://byteex-task.s3.eu-north-1.amazonaws.com/Artboard6+1.png";
  const jillianHarrisImage = "https://byteex-task.s3.eu-north-1.amazonaws.com/Artboard4+1.png";
  const ecoHubImage = "https://byteex-task.s3.eu-north-1.amazonaws.com/Artboard2+1.png";
  const trendHunterImage = "https://byteex-task.s3.eu-north-1.amazonaws.com/Artboard5+1.png";
  const amyImage = "https://byteex-task.s3.eu-north-1.amazonaws.com/color+wheel.png";
  const whiteRobeImage = "https://byteex-task.s3.eu-north-1.amazonaws.com/image+22.jpg";
  const grayRobeImage = "https://byteex-task.s3.eu-north-1.amazonaws.com/mock.png"; 

  const starsSmall = (
    <svg
      width="60"
      height="10"
      viewBox="0 0 60 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1341 3.67958C10.117 3.62675 10.0854 3.57978 10.043 3.54399C10.0006 3.50819 9.94895 3.48501 9.89401 3.47707L6.74809 3.01994L5.34084 0.166545C5.31623 0.116834 5.27822 0.0749896 5.2311 0.0457341C5.18398 0.0164787 5.12962 0.000976563 5.07416 0.000976562C5.01869 0.000976562 4.96433 0.0164787 4.91721 0.0457341C4.87009 0.0749896 4.83208 0.116834 4.80748 0.166545L3.40022 3.01779L0.254303 3.47492C0.199463 3.48298 0.147963 3.50619 0.10561 3.54195C0.0632555 3.57771 0.0317307 3.62459 0.0145882 3.67731C-0.00255433 3.73002 -0.00463305 3.78648 0.00858632 3.84031C0.0218057 3.89415 0.0497976 3.94322 0.0894072 3.982L2.36572 6.20101L1.8286 9.3348C1.81961 9.38922 1.82591 9.44506 1.84681 9.49609C1.8677 9.54713 1.90237 9.59136 1.94693 9.62384C1.9915 9.65632 2.04422 9.67578 2.0992 9.68004C2.15418 9.6843 2.20926 9.6732 2.2583 9.64797L5.07442 8.17024L7.8884 9.64958C7.93748 9.67485 7.99263 9.68597 8.04767 9.68169C8.10271 9.67742 8.15547 9.65791 8.20006 9.62536C8.24465 9.59281 8.27931 9.54849 8.30015 9.49737C8.321 9.44624 8.32721 9.39033 8.3181 9.33588L7.78098 6.20208L10.0578 3.98307C10.0975 3.94459 10.1257 3.8958 10.1392 3.84218C10.1526 3.78856 10.1509 3.73225 10.1341 3.67958Z"
        fill="#FFB801"
      />
      <path
        d="M22.597 3.67909C22.5799 3.62627 22.5483 3.57929 22.5059 3.5435C22.4635 3.50771 22.4118 3.48452 22.3569 3.47658L19.211 3.01945L17.8037 0.166057C17.7791 0.116346 17.7411 0.0745013 17.694 0.0452459C17.6469 0.0159904 17.5925 0.000488281 17.537 0.000488281C17.4816 0.000488281 17.4272 0.0159904 17.3801 0.0452459C17.333 0.0745013 17.295 0.116346 17.2704 0.166057L15.8631 3.01731L12.7172 3.47443C12.6624 3.48249 12.6109 3.50571 12.5685 3.54146C12.5261 3.57722 12.4946 3.6241 12.4775 3.67682C12.4603 3.72954 12.4583 3.78599 12.4715 3.83983C12.4847 3.89366 12.5127 3.94273 12.5523 3.98151L14.8286 6.20052L14.2915 9.33432C14.2825 9.38873 14.2888 9.44457 14.3097 9.49561C14.3306 9.54664 14.3653 9.59087 14.4098 9.62335C14.4544 9.65583 14.5071 9.67529 14.5621 9.67955C14.6171 9.68381 14.6722 9.67271 14.7212 9.64748L17.5373 8.16975L20.3513 9.64909C20.4004 9.67436 20.4555 9.68548 20.5106 9.68121C20.5656 9.67693 20.6184 9.65742 20.663 9.62487C20.7075 9.59232 20.7422 9.548 20.763 9.49688C20.7839 9.44576 20.7901 9.38984 20.781 9.33539L20.2439 6.20159L22.5207 3.98258C22.5604 3.9441 22.5886 3.89531 22.6021 3.84169C22.6155 3.78808 22.6138 3.73176 22.597 3.67909Z"
        fill="#FFB801"
      />
      <path
        d="M35.0599 3.6786C35.0428 3.62578 35.0112 3.57881 34.9688 3.54301C34.9263 3.50722 34.8747 3.48403 34.8198 3.47609L31.6739 3.01897L30.2666 0.165568C30.242 0.115857 30.204 0.0740131 30.1569 0.0447576C30.1097 0.0155021 30.0554 0 29.9999 0C29.9445 0 29.8901 0.0155021 29.843 0.0447576C29.7959 0.0740131 29.7579 0.115857 29.7332 0.165568L28.326 3.01682L25.1801 3.47394C25.1252 3.482 25.0737 3.50522 25.0314 3.54098C24.989 3.57674 24.9575 3.62362 24.9404 3.67633C24.9232 3.72905 24.9211 3.7855 24.9344 3.83934C24.9476 3.89317 24.9756 3.94224 25.0152 3.98102L27.2915 6.20003L26.7544 9.33383C26.7454 9.38824 26.7517 9.44408 26.7726 9.49512C26.7935 9.54616 26.8281 9.59038 26.8727 9.62286C26.9173 9.65534 26.97 9.6748 27.025 9.67906C27.08 9.68332 27.135 9.67222 27.1841 9.64699L30.0002 8.16926L32.8142 9.6486C32.8632 9.67388 32.9184 9.68499 32.9734 9.68072C33.0285 9.67644 33.0812 9.65694 33.1258 9.62438C33.1704 9.59183 33.2051 9.54751 33.2259 9.49639C33.2468 9.44527 33.253 9.38935 33.2439 9.3349L32.7067 6.20111L34.9836 3.98209C35.0233 3.94362 35.0515 3.89482 35.0649 3.84121C35.0784 3.78759 35.0766 3.73127 35.0599 3.6786Z"
        fill="#FFB801"
      />
      <path
        d="M47.523 3.6786C47.5059 3.62578 47.4744 3.57881 47.4319 3.54301C47.3895 3.50722 47.3379 3.48403 47.2829 3.47609L44.137 3.01897L42.7298 0.165568C42.7051 0.115857 42.6671 0.0740131 42.62 0.0447576C42.5729 0.0155021 42.5185 0 42.4631 0C42.4076 0 42.3532 0.0155021 42.3061 0.0447576C42.259 0.0740131 42.221 0.115857 42.1964 0.165568L40.7891 3.01682L37.6432 3.47394C37.5884 3.482 37.5369 3.50522 37.4945 3.54098C37.4522 3.57674 37.4206 3.62362 37.4035 3.67633C37.3864 3.72905 37.3843 3.7855 37.3975 3.83934C37.4107 3.89317 37.4387 3.94224 37.4783 3.98102L39.7546 6.20003L39.2175 9.33383C39.2085 9.38824 39.2148 9.44408 39.2357 9.49512C39.2566 9.54616 39.2913 9.59038 39.3358 9.62286C39.3804 9.65534 39.4331 9.6748 39.4881 9.67906C39.5431 9.68332 39.5982 9.67222 39.6472 9.64699L42.4633 8.16926L45.2773 9.6486C45.3264 9.67388 45.3815 9.68499 45.4366 9.68072C45.4916 9.67644 45.5444 9.65694 45.589 9.62438C45.6336 9.59183 45.6682 9.54751 45.6891 9.49639C45.7099 9.44527 45.7161 9.38935 45.707 9.3349L45.1699 6.20111L47.4467 3.98209C47.4864 3.94362 47.5146 3.89482 47.5281 3.84121C47.5416 3.78759 47.5398 3.73127 47.523 3.6786Z"
        fill="#FFB801"
      />
      <path
        d="M59.9857 3.6786C59.9686 3.62578 59.9371 3.57881 59.8946 3.54301C59.8522 3.50722 59.8006 3.48403 59.7456 3.47609L56.5997 3.01897L55.1924 0.165568C55.1678 0.115857 55.1298 0.0740131 55.0827 0.0447576C55.0356 0.0155021 54.9812 0 54.9257 0C54.8703 0 54.8159 0.0155021 54.7688 0.0447576C54.7217 0.0740131 54.6837 0.115857 54.6591 0.165568L53.2518 3.01682L50.1059 3.47394C50.051 3.482 49.9995 3.50522 49.9572 3.54098C49.9148 3.57674 49.8833 3.62362 49.8662 3.67633C49.849 3.72905 49.8469 3.7855 49.8601 3.83934C49.8734 3.89317 49.9014 3.94224 49.941 3.98102L52.2173 6.20003L51.6802 9.33383C51.6712 9.38824 51.6775 9.44408 51.6984 9.49512C51.7193 9.54616 51.7539 9.59038 51.7985 9.62286C51.8431 9.65534 51.8958 9.6748 51.9508 9.67906C52.0057 9.68332 52.0608 9.67222 52.1099 9.64699L54.926 8.16926L57.74 9.6486C57.7891 9.67388 57.8442 9.68499 57.8993 9.68072C57.9543 9.67644 58.0071 9.65694 58.0517 9.62438C58.0962 9.59183 58.1309 9.54751 58.1517 9.49639C58.1726 9.44527 58.1788 9.38935 58.1697 9.3349L57.6326 6.20111L59.9094 3.98209C59.9491 3.94362 59.9773 3.89482 59.9908 3.84121C60.0042 3.78759 60.0025 3.73127 59.9857 3.6786Z"
        fill="#FFB801"
      />
    </svg>
  );

  const iconShop = (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="21" cy="21" r="21" fill="#F9F0E5"/>
      <path transform="translate(8.2 11.2)" d="M7.33579 3.13782C7.33579 2.8449 7.58968 2.60749 7.90294 2.60749H21.1618C21.3272 2.60749 21.4843 2.67502 21.592 2.79222C21.6998 2.90948 21.7474 3.06493 21.7225 3.21778L21.156 6.69182C21.1133 6.95427 20.8715 7.1423 20.5961 7.1423C20.5677 7.1423 20.5389 7.14035 20.5099 7.13617C20.2002 7.09203 19.9875 6.82151 20.0347 6.53195L20.5016 3.66814H7.90294C7.58968 3.66814 7.33579 3.43067 7.33579 3.13782ZM11.6416 12.1787H6.61539L4.51986 0.740807C4.47323 0.486193 4.23717 0.300049 3.96084 0.300049H0.867193C0.553941 0.300049 0.300049 0.537457 0.300049 0.830373C0.300049 1.12329 0.553941 1.3607 0.867193 1.3607H3.48261L5.57815 12.7986C5.62547 13.0571 5.86525 13.2395 6.13647 13.2395C6.16823 13.2394 6.20056 13.237 6.23289 13.2318C6.23515 13.2314 6.23736 13.231 6.23963 13.2306C6.27303 13.2364 6.3075 13.2393 6.34266 13.2393H11.6416C11.9549 13.2393 12.2088 13.0019 12.2088 12.709C12.2088 12.4161 11.9549 12.1787 11.6416 12.1787ZM10.5454 15.9316V16.8727C10.5454 17.7573 9.77578 18.4769 8.82978 18.4769C7.88378 18.4769 7.11417 17.7573 7.11417 16.8727V15.9316C7.11417 15.047 7.88372 14.3274 8.82965 14.3274C9.77571 14.3274 10.5454 15.047 10.5454 15.9316ZM9.4111 15.9316C9.4111 15.6319 9.15034 15.388 8.82978 15.388H8.82965C8.50922 15.388 8.24846 15.6319 8.24846 15.9316V16.8727C8.24846 17.1724 8.50922 17.4163 8.82965 17.4163C9.15028 17.4163 9.4111 17.1724 9.4111 16.8727V15.9316ZM25.2216 10.9853C24.887 13.4994 23.5253 15.7412 21.3874 17.2977C19.5882 18.6075 17.4204 19.3 15.1762 19.3C14.7537 19.3 14.3286 19.2755 13.9026 19.2259C13.5463 19.1843 13.1871 19.1242 12.8346 19.0471C12.5981 18.9955 12.423 18.8087 12.3993 18.5826C12.3257 17.8828 12.3356 17.1729 12.4289 16.4725C13.12 11.2824 18.1978 7.58535 23.7481 8.23176C24.1048 8.27336 24.464 8.33352 24.816 8.41048C25.0524 8.46222 25.2274 8.64889 25.2513 8.87481C25.3251 9.57425 25.3151 10.2844 25.2216 10.9853ZM24.1535 9.36394C23.9718 9.33218 23.7894 9.30555 23.6077 9.28434C18.6786 8.71064 14.1682 11.9939 13.5544 16.6036C13.5194 16.8665 13.4976 17.1308 13.489 17.3954L18.6775 13.1448C18.913 12.9518 19.2714 12.9739 19.4778 13.1942C19.6842 13.4145 19.6605 13.7496 19.4249 13.9426L14.2355 18.1939C16.5574 18.418 18.8427 17.8059 20.6904 16.4607C22.5893 15.0783 23.7987 13.0872 24.0959 10.8542C24.162 10.3594 24.1812 9.85974 24.1535 9.36394Z" fill="#01005B" stroke="#01005B" stroke-width="0.6"/>
    </svg>
  );

  const iconMoon = (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="21" cy="21" r="21" fill="#F9F0E5"/>
      <path d="M21 8V34" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.9998 27.9998C17.1298 27.9998 13.9998 24.8698 13.9998 20.9998C13.9998 17.1298 17.1298 13.9998 20.9998 13.9998" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.8098 11.8105L13.9298 13.9305" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 21H11" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.8098 30.1901L13.9298 28.0701" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 17.5498C22.2 15.4298 24.48 13.9998 27.09 13.9998C27.25 13.9998 27.4 14.0098 27.56 14.0198C25.89 14.8998 24.76 16.6498 24.76 18.6598C24.76 21.5598 27.11 23.9098 30.01 23.9098C31.61 23.9098 33.04 23.1898 34 22.0598C33.48 25.4298 30.59 27.9998 27.09 27.9998C24.48 27.9998 22.2 26.5698 21 24.4498" stroke="#15005B" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );

  const iconLeaf = (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="21" cy="21" r="21" fill="#F9F0E5"/>
      <path d="M10.4531 10.5195C10.6104 10.4731 10.7762 10.51 10.8936 10.6133L10.8945 10.6143C13.5176 12.9064 16.1114 14.2537 18.3584 15.418C21.0555 16.8167 23.2294 17.9576 24.5684 20.0283C25.8941 22.0788 26.4521 25.1389 25.6016 30.499L25.5479 30.8408L25.8477 31.0127C26.3034 31.2722 27.0475 31.5984 27.9209 31.5957C28.8178 31.5928 29.8015 31.2421 30.6982 30.2344V30.2334C30.8652 30.0455 31.1565 30.0266 31.3477 30.1934C31.5329 30.3553 31.5526 30.6395 31.3857 30.8301C30.2621 32.0906 29.0425 32.5 27.9404 32.5C26.7606 32.5 25.6807 32.0299 24.9814 31.543L24.8711 31.4668L24.7373 31.4551L24.251 31.4082C19.4063 30.8801 15.3329 28.6854 12.6582 25.1855L12.3955 24.8311C9.59286 20.938 8.78502 15.9737 10.1465 10.835L10.1455 10.834C10.1863 10.6834 10.3043 10.5636 10.4531 10.5195ZM10.6934 12.5908C9.9487 16.7538 10.7136 20.7465 12.9268 23.9951L13.1455 24.3076C15.3393 27.3563 18.6213 29.4004 22.5254 30.2217L23.9229 30.5166L23.0137 29.415L18.3691 23.7861L18.2158 23.6006L17.9756 23.6045L15.7529 23.6377H15.7461L15.6533 23.6279C15.4742 23.592 15.3345 23.4542 15.2959 23.2793L15.2852 23.1895C15.2854 22.9482 15.4832 22.741 15.7402 22.7363L15.7393 22.7354L16.4336 22.7266L17.4766 22.7129L16.8125 21.9082L15.8477 20.7393L15.832 20.7207L15.8242 20.7129C15.8219 20.7094 15.8194 20.7051 15.8154 20.6992L13.9297 17.8525H13.9307C13.7956 17.648 13.8527 17.3687 14.0605 17.2334L14.0615 17.2324C14.2782 17.0908 14.563 17.1535 14.6982 17.3604L14.7002 17.3633L16.5635 20.1699L16.5781 20.1924L16.5947 20.2119L19.9248 24.2441L20.6221 25.0879L20.8037 24.0088L21.0449 22.5771V22.5762C21.0838 22.3406 21.3164 22.1675 21.5732 22.209H21.5742C21.7937 22.2443 21.9479 22.4279 21.9561 22.6367L21.9502 22.7275L21.4307 25.7949L21.3926 26.0205L21.5381 26.1973L24.0117 29.1924L24.752 30.0879L24.8936 28.9346C25.4055 24.7799 24.961 22.208 23.665 20.3477C22.3886 18.5154 20.3343 17.4623 17.9297 16.2158C15.9372 15.1825 13.7562 14.0504 11.4932 12.2842L10.8398 11.7744L10.6934 12.5908Z" fill="#01005B" stroke="black"/>
    </svg>
  );

  const iconWaves = (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="21" cy="21" r="21" fill="#F9F0E5"/>
      <path d="M12.009 16.5696C14.1442 14.7453 15.8308 13.3029 20.4079 15.8763C22.6066 17.112 24.38 17.579 25.8552 17.5766C28.4402 17.5766 30.1158 16.1463 31.5641 14.9095C31.8127 14.6943 31.9673 14.3912 31.9951 14.0645C32.0229 13.7378 31.9218 13.4131 31.7132 13.1594C31.6114 13.0348 31.4856 12.9319 31.3431 12.8566C31.2007 12.7813 31.0445 12.7352 30.8838 12.721C30.7232 12.7068 30.5613 12.7249 30.4077 12.7741C30.2542 12.8232 30.1121 12.9026 29.9899 13.0073C27.856 14.8341 26.1681 16.2765 21.591 13.7006C15.5436 10.3037 12.7106 12.724 10.4348 14.6699C10.1864 14.8852 10.0321 15.1884 10.0045 15.5151C9.97685 15.8418 10.0782 16.1663 10.287 16.42C10.3888 16.5443 10.5147 16.647 10.6571 16.7221C10.7995 16.7971 10.9557 16.843 11.1162 16.8569C11.2768 16.8709 11.4385 16.8526 11.5919 16.8033C11.7452 16.7539 11.8871 16.6744 12.009 16.5696ZM29.9899 19.2184C27.856 21.0427 26.1681 22.4876 21.591 19.9117C15.5436 16.5124 12.7106 18.9338 10.4348 20.8785C10.1864 21.0939 10.0321 21.3971 10.0045 21.7238C9.97685 22.0505 10.0782 22.375 10.287 22.6286C10.3886 22.7531 10.5143 22.8561 10.6567 22.9313C10.799 23.0066 10.9551 23.0527 11.1157 23.0669C11.2763 23.081 11.4381 23.063 11.5915 23.0139C11.745 22.9647 11.8869 22.8854 12.009 22.7807C14.1442 20.9552 15.8308 19.5128 20.4079 22.085C22.6066 23.3231 24.38 23.7877 25.8552 23.7877C28.4402 23.7877 30.1158 22.3574 31.5641 21.1181C31.8129 20.9033 31.9676 20.6004 31.9955 20.2738C32.0233 19.9472 31.922 19.6227 31.7132 19.3692C31.6114 19.2447 31.4856 19.1417 31.3431 19.0664C31.2006 18.9911 31.0443 18.9451 30.8836 18.931C30.7229 18.917 30.561 18.9352 30.4075 18.9845C30.2539 19.0339 30.1119 19.1134 29.9899 19.2184ZM29.9899 25.4283C27.856 27.255 26.1681 28.6975 21.591 26.124C15.5436 22.7247 12.7106 25.145 10.4348 27.0909C10.1864 27.3062 10.0321 27.6094 10.0045 27.9361C9.97685 28.2628 10.0782 28.5873 10.287 28.841C10.3887 28.9654 10.5145 29.0683 10.657 29.1434C10.7994 29.2186 10.9556 29.2645 11.1162 29.2784C11.2768 29.2924 11.4386 29.2741 11.592 29.2247C11.7453 29.1752 11.8872 29.0956 12.009 28.9906C14.1442 27.1663 15.8308 25.7251 20.4079 28.2973C22.6066 29.533 24.38 30 25.8552 30C28.4402 30 30.1158 28.5673 31.5641 27.3305C31.8127 27.1153 31.9673 26.8122 31.9951 26.4855C32.0229 26.1588 31.9218 25.8341 31.7132 25.5803C31.6113 25.456 31.4854 25.3531 31.343 25.2779C31.2005 25.2028 31.0444 25.1567 30.8838 25.1425C30.7232 25.1284 30.5613 25.1464 30.4078 25.1954C30.2543 25.2445 30.1122 25.3237 29.9899 25.4283Z" fill="#01005B"/>
    </svg>
  );

  const arrowLeft = (
    <svg
      width="13"
      height="24"
      viewBox="0 0 13 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4651 1.66846L1.00009 12.1306L11.4651 22.5939"
        stroke="#676869"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );

  const arrowRight = (
    <svg
      width="13"
      height="24"
      viewBox="0 0 13 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.53516 22.5596L12.0002 12.0974L1.53516 1.63409"
        stroke="#676869"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
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

  const showPrevProud = () =>
    setProudCurrent(
      (index) => (index - 1 + proudSlides.length) % proudSlides.length
    );

  const showNextProud = () =>
    setProudCurrent((index) => (index + 1) % proudSlides.length);

  return (
    <div className="mainPage">
      <div className="mainPageNotification">
        <p className="mainPageNotificationText">
          CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE
          SHIPPING on orders {">"} $200 | easy 45 day return window.
        </p>
      </div>
      <div className="mainPageHero">
        <img className="mainPageHeroLogo" src={logo} alt="" />
        <div className="mainPageHeroSides">
          <div className="mainPageHeroLeft">
            <h1 className="mainPageHeroTitle">
              Don’t apologize for being comfortable.
            </h1>
            <div className="mainPageHeroAdvancements">
              <div className="mainPageHeroAdvancementsSection">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15.5" cy="15.5" r="15.5" fill="#F9F0E5" />
                  <path
                    d="M15.5 5.5V26"
                    stroke="#15005B"
                    stroke-width="1.1"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.4999 21.2694C12.4486 21.2694 9.98071 18.8015 9.98071 15.7502C9.98071 12.6988 12.4486 10.231 15.4999 10.231"
                    stroke="#15005B"
                    stroke-width="1.1"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25391 8.50439L9.92545 10.1759"
                    stroke="#15005B"
                    stroke-width="1.1"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.25 15.75H7.61538"
                    stroke="#15005B"
                    stroke-width="1.1"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25391 22.9962L9.92545 21.3247"
                    stroke="#15005B"
                    stroke-width="1.1"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.5 13.03C16.4462 11.3585 18.2438 10.231 20.3017 10.231C20.4279 10.231 20.5462 10.2388 20.6723 10.2467C19.3556 10.9406 18.4646 12.3204 18.4646 13.9052C18.4646 16.1917 20.3175 18.0446 22.604 18.0446C23.8656 18.0446 24.9931 17.4769 25.75 16.586C25.34 19.2431 23.0613 21.2694 20.3017 21.2694C18.2438 21.2694 16.4462 20.1419 15.5 18.4704"
                    stroke="#15005B"
                    stroke-width="1.1"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="mainPageHeroAdvancementsSectionText">
                  Beautiful, comfortable loungewear for day or night.
                </p>
              </div>
              <div className="mainPageHeroAdvancementsSection">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15.5" cy="15.5" r="15.5" fill="#F9F0E5" />
                  <path
                    d="M11.3472 11.2403C11.3472 11.0091 11.5401 10.8217 11.7782 10.8217H21.855C21.9806 10.8217 22.1 10.875 22.1819 10.9675C22.2638 11.0601 22.3 11.1828 22.2811 11.3035L21.8506 14.0461C21.818 14.2533 21.6343 14.4018 21.425 14.4018C21.4034 14.4018 21.3815 14.4002 21.3595 14.3969C21.1241 14.3621 20.9624 14.1485 20.9983 13.9199L21.3532 11.659H11.7782C11.5401 11.659 11.3472 11.4715 11.3472 11.2403ZM14.6196 18.3779H10.7997L9.20705 9.34797C9.17161 9.14696 8.99221 9 8.7822 9H6.43103C6.19296 9 6 9.18743 6 9.41868C6 9.64993 6.19296 9.83735 6.43103 9.83735H8.41875L10.0114 18.8673C10.0473 19.0713 10.2296 19.2154 10.4357 19.2154C10.4598 19.2153 10.4844 19.2134 10.509 19.2093C10.5107 19.2089 10.5124 19.2087 10.5141 19.2083C10.5395 19.2129 10.5657 19.2152 10.5924 19.2152H14.6196C14.8577 19.2152 15.0506 19.0278 15.0506 18.7965C15.0506 18.5653 14.8577 18.3779 14.6196 18.3779ZM13.7865 21.3407V22.0837C13.7865 22.782 13.2016 23.3502 12.4826 23.3502C11.7636 23.3502 11.1787 22.782 11.1787 22.0837V21.3407C11.1787 20.6423 11.7636 20.0742 12.4825 20.0742C13.2015 20.0742 13.7865 20.6423 13.7865 21.3407ZM12.9244 21.3407C12.9244 21.1041 12.7262 20.9116 12.4826 20.9116H12.4825C12.239 20.9116 12.0408 21.1041 12.0408 21.3407V22.0837C12.0408 22.3203 12.239 22.5128 12.4825 22.5128C12.7262 22.5128 12.9244 22.3203 12.9244 22.0837V21.3407ZM24.9404 17.4357C24.6861 19.4206 23.6512 21.1904 22.0264 22.4192C20.659 23.4533 19.0115 24 17.3059 24C16.9848 24 16.6617 23.9806 16.3379 23.9414C16.0671 23.9086 15.7941 23.8611 15.5263 23.8003C15.3465 23.7595 15.2135 23.6121 15.1954 23.4336C15.1395 22.8812 15.147 22.3206 15.2179 21.7677C15.7431 17.6703 19.6023 14.7516 23.8205 15.2619C24.0916 15.2947 24.3646 15.3422 24.6321 15.403C24.8118 15.4438 24.9448 15.5912 24.9629 15.7695C25.019 16.3217 25.0114 16.8823 24.9404 17.4357ZM24.1286 16.1557C23.9906 16.1306 23.8519 16.1096 23.7138 16.0929C19.9677 15.6399 16.5398 18.232 16.0733 21.8712C16.0467 22.0788 16.0302 22.2875 16.0236 22.4963L19.9669 19.1406C20.1458 18.9882 20.4182 19.0056 20.5751 19.1796C20.7319 19.3535 20.714 19.6181 20.5349 19.7704L16.5909 23.1267C18.3556 23.3036 20.0924 22.8204 21.4967 21.7584C22.9398 20.667 23.859 19.0951 24.0849 17.3322C24.1351 16.9416 24.1497 16.5471 24.1286 16.1557Z"
                    fill="#01005B"
                    stroke="#01005B"
                    stroke-width="0.3"
                  />
                </svg>
                <p className="mainPageHeroAdvancementsSectionText">
                  No wasteful extras, like tags or plastic packaging.
                </p>
              </div>
              <div className="mainPageHeroAdvancementsSection">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15.5" cy="15.5" r="15.5" fill="#F9F0E5" />
                  <path
                    d="M9.27847 12.3002C10.6372 10.9827 11.7105 9.94096 14.6232 11.7996C16.0224 12.692 17.1509 13.0293 18.0897 13.0275C19.7346 13.0275 20.801 11.9946 21.7226 11.1013C21.8808 10.9459 21.9792 10.727 21.9969 10.491C22.0146 10.2551 21.9502 10.0206 21.8175 9.83731C21.7527 9.74737 21.6726 9.67302 21.582 9.61864C21.4913 9.56427 21.3919 9.53098 21.2897 9.52074C21.1875 9.5105 21.0844 9.52353 20.9867 9.55904C20.889 9.59456 20.7986 9.65185 20.7208 9.72751C19.3629 11.0468 18.2888 12.0886 15.3761 10.2282C11.5277 7.77491 9.7249 9.52285 8.27672 10.9282C8.11864 11.0838 8.02041 11.3027 8.00284 11.5387C7.98527 11.7746 8.04975 12.009 8.18261 12.1922C8.24741 12.282 8.32751 12.3562 8.41815 12.4104C8.50879 12.4646 8.60814 12.4977 8.71032 12.5078C8.8125 12.5178 8.91543 12.5047 9.01302 12.469C9.11061 12.4334 9.20087 12.376 9.27847 12.3002ZM20.7208 14.2133C19.3629 15.5309 18.2888 16.5744 15.3761 14.714C11.5277 12.259 9.7249 14.0078 8.27672 15.4123C8.11864 15.5678 8.02041 15.7868 8.00284 16.0227C7.98527 16.2587 8.04975 16.4931 8.18261 16.6762C8.2473 16.7662 8.32731 16.8405 8.4179 16.8949C8.50848 16.9492 8.60781 16.9825 8.70999 16.9927C8.81217 17.003 8.91513 16.99 9.01278 16.9545C9.11043 16.919 9.20077 16.8617 9.27847 16.786C10.6372 15.4676 11.7105 14.4259 14.6232 16.2836C16.0224 17.1778 17.1509 17.5133 18.0897 17.5133C19.7346 17.5133 20.801 16.4804 21.7226 15.5853C21.8809 15.4302 21.9794 15.2114 21.9971 14.9755C22.0148 14.7397 21.9504 14.5053 21.8175 14.3222C21.7527 14.2323 21.6726 14.1579 21.5819 14.1035C21.4913 14.0491 21.3918 14.0159 21.2896 14.0057C21.1873 13.9956 21.0843 14.0087 20.9866 14.0444C20.8889 14.08 20.7985 14.1375 20.7208 14.2133ZM20.7208 18.6982C19.3629 20.0175 18.2888 21.0593 15.3761 19.2007C11.5277 16.7456 9.7249 18.4936 8.27672 19.899C8.11864 20.0545 8.02041 20.2734 8.00284 20.5094C7.98527 20.7453 8.04975 20.9797 8.18261 21.1629C8.24735 21.2528 8.32742 21.3271 8.41806 21.3814C8.50871 21.4356 8.60808 21.4688 8.71029 21.4789C8.8125 21.489 8.91546 21.4757 9.01306 21.44C9.11066 21.4043 9.20092 21.3468 9.27847 21.271C10.6372 19.9534 11.7105 18.9126 14.6232 20.7703C16.0224 21.6627 17.1509 22 18.0897 22C19.7346 22 20.801 20.9653 21.7226 20.072C21.8808 19.9166 21.9792 19.6977 21.9969 19.4617C22.0146 19.2258 21.9502 18.9913 21.8175 18.808C21.7527 18.7182 21.6726 18.6439 21.5819 18.5896C21.4913 18.5353 21.3919 18.5021 21.2897 18.4918C21.1875 18.4816 21.0845 18.4946 20.9868 18.53C20.8891 18.5655 20.7987 18.6227 20.7208 18.6982Z"
                    fill="#01005B"
                  />
                </svg>
                <p className="mainPageHeroAdvancementsSectionText">
                  Our signature fabric is incredibly comfortable — unlike
                  anything you’ve ever felt.
                </p>
              </div>
            </div>
            <div className="mainPageHeroButton">
              <p className="mainPageHeroButtonText">Customize Your Outfit</p>
              <svg
                width="23"
                height="10"
                viewBox="0 0 23 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1072 10L23 5.00003L18.1072 0L16.6372 1.5022L19.0205 3.93781L0 3.93781V6.06226L19.0205 6.06226L16.6372 8.4978L18.1072 10Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="mainPageHeroRight">
            <img className="mainPageHeroImage" src={headPhoto} alt="" />
          </div>
        </div>
      </div>
      <div className="mainPageSeenIn">
        <div className="mainPageSeenInReview">
          <div className="mainPageSeenInReviewHead">
            <img
              className="mainPageSeenInReviewAvatar"
              src={amyImage}
              alt=""
            />
            <div className="mainPageSeenInReviewHeadInfo">
              <div className="mainPageSeenInReviewHeadTop">
                <p className="mainPageSeenInReviewName">Amy P.</p>
                <div className="mainPageSeenInReviewStars">{starsSmall}</div>
              </div>
              <span className="mainPageSeenInReviewSub">
                One of 500+ 5 Star Reviews Online
              </span>
            </div>
          </div>
          <p className="mainPageSeenInReviewText">
            Overjoyed with my Loungewear set. I have the jogger and the
            sweatshirt. Quality product on every level. From the compostable
            packaging, to the supplied washing bag, even the garments smells
            like fresh herbs when I first held them.
          </p>
        </div>
        <div className="mainPageSeenInContent">
          <p className="mainPageSeenInLabel">as seen in</p>
          <div className="mainPageSeenInLogos">
            <div className="mainPageSeenInEcoStylistImage">
              <img src={ecoStylistImage} alt="ECO-STYLIST" />
            </div>
            <div className="mainPageSeenInEcoStylistImage">
              <img src={canadianLivingImage} alt="ECO-STYLIST" />
            </div>
            <div className="mainPageSeenInEcoStylistImage">
              <img src={jillianHarrisImage} alt="ECO-STYLIST" />
            </div>
            <div className="mainPageSeenInEcoStylistImage">
              <img src={ecoHubImage} alt="ECO-STYLIST" />
            </div>
            <div className="mainPageSeenInEcoStylistImage">
              <img src={trendHunterImage} alt="ECO-STYLIST" />
            </div>
          </div>
        </div>
      </div>
      <div className="mainPageProud">
        <div className="mainPageProudLeft">
          <h2 className="mainPageProudTitle">
            Loungewear you can be proud of.
          </h2>
          <div className="mainPageProudFeatures">
            {proudFeatures.map((feature) => (
              <div className="mainPageProudFeature" key={feature.title}>
                <div className="mainPageProudFeatureIcon">{feature.icon}</div>
                <div className="mainPageProudFeatureContent">
                  <h3 className="mainPageProudFeatureTitle">{feature.title}</h3>
                  <p className="mainPageProudFeatureText">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mainPageProudRight">
          <div className="mainPageProudCarousel">
            <div className="mainPageProudArrow" onClick={showPrevProud}>
              {arrowLeft}
            </div>
            <div className="mainPageProudImageWrap">
              <img
                className="mainPageProudImage"
                src={proudSlides[proudCurrent].image}
                alt={proudSlides[proudCurrent].caption}
              />
              <div className="mainPageProudThumbs">
                {proudSlides.map((slide, index) => (
                  <img
                    className={
                      index === proudCurrent
                        ? "mainPageProudThumb mainPageProudThumbActive"
                        : "mainPageProudThumb"
                    }
                    src={slide.image}
                    alt=""
                    key={index}
                    onClick={() => setProudCurrent(index)}
                  />
                ))}
              </div>
            </div>
            <div className="mainPageProudArrow" onClick={showNextProud}>
              {arrowRight}
            </div>
          </div>
          <p className="mainPageProudCaption">
            {proudSlides[proudCurrent].caption}
          </p>
        </div>
      </div>
      <div className="mainPageAbout">
        <div className="mainPageAboutImageContainer">
          <img
            src={about_photo}
            alt="Woman stretching in robe"
            className="mainPageAboutImage"
          />
        </div>
        <div className="mainPageAboutTextContent">
          <h2 className="mainPageAboutTextContentTitle">Be your best self.</h2>
          <div className="mainPageAboutTextContentContainer">
            <p className="intro">
              Hi! My name’s [Insert Name], and I founded [Insert] in ____.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
              felis finibus consequat.
            </p>{" "}
            <p>
              Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
              placerat volutpat ligula, ac consectetur felis varius non. Aliquam
              a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id
              arcu congue, faucibus libero nec, placerat ligula.
            </p>
            <p>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
            </p>
            <p>
              Fusce non ante velit. Sed auctor odio eu semper molestie. Nam
              mattis, sapien eget lobortis fringilla, eros ipsum tristique
              tellus, ac convallis urna massa at nibh.
            </p>
            <p>
              Duis non fermentum augue. Vivamus laoreet aliquam risus, sed
              euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam
              nec in sapien.
            </p>
            <p>Cras mattis varius mollis.</p>
          </div>
          <div className="mainPageHeroButton">
            <p className="mainPageHeroButtonText">Customize Your Outfit</p>
            <svg
              width="23"
              height="10"
              viewBox="0 0 23 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1072 10L23 5.00003L18.1072 0L16.6372 1.5022L19.0205 3.93781L0 3.93781V6.06226L19.0205 6.06226L16.6372 8.4978L18.1072 10Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mainPageComfort">
        <h2 className="mainPageComfortTitle">Comfort made easy</h2>
        <div className="mainPageComfortSteps">
          <div className="mainPageComfortStepCard">
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
            <h3 className="mainPageComfortStepCardTitle">You save.</h3>
            <p className="mainPageComfortStepCardText">
              Browse our comfort sets and save 15% when you bundle.
            </p>
          </div>

          <div className="mainPageComfortStepCard">
            <img
              className="mainPageComfortStepCardImage"
              src={comfortImage}
              alt=""
            />
            <h3 className="mainPageComfortStepCardTitle">We ship.</h3>
            <p className="mainPageComfortStepCardText">
              We ship your items within 1–2 days of receiving your order.
            </p>
          </div>

          <div className="mainPageComfortStepCard">
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
            <h3 className="mainPageComfortStepCardTitle">You enjoy!</h3>
            <p className="mainPageComfortStepCardText">
              Wear hernest around the house, out on the town, or in bed.
            </p>
          </div>
        </div>

        <div className="mainPageHeroButton">
          <p className="mainPageHeroButtonText">Customize Your Outfit</p>
          <svg
            width="23"
            height="10"
            viewBox="0 0 23 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.1072 10L23 5.00003L18.1072 0L16.6372 1.5022L19.0205 3.93781L0 3.93781V6.06226L19.0205 6.06226L16.6372 8.4978L18.1072 10Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="mainPageComfortRatingSection">
          <svg
            width="81"
            height="13"
            viewBox="0 0 81 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6069 4.9397C13.584 4.86877 13.5416 4.80571 13.4846 4.75765C13.4276 4.70958 13.3583 4.67846 13.2846 4.66779L9.06058 4.05402L7.17107 0.222795C7.13804 0.156049 7.087 0.0998647 7.02374 0.0605837C6.96046 0.0213028 6.88748 0.000488281 6.81301 0.000488281C6.73854 0.000488281 6.66555 0.0213028 6.60228 0.0605837C6.53901 0.0998647 6.48798 0.156049 6.45494 0.222795L4.56543 4.05113L0.34145 4.66491C0.267816 4.67573 0.198669 4.7069 0.141801 4.75491C0.0849324 4.80293 0.0426044 4.86587 0.0195874 4.93665C-0.00342967 5.00743 -0.00622073 5.08324 0.0115288 5.15552C0.0292782 5.2278 0.0668627 5.29369 0.120046 5.34575L3.17643 8.32519L2.45524 12.5329C2.44317 12.606 2.45163 12.6809 2.47968 12.7495C2.50774 12.818 2.55428 12.8774 2.61412 12.921C2.67396 12.9646 2.74474 12.9907 2.81857 12.9964C2.89239 13.0022 2.96635 12.9873 3.03219 12.9534L6.81337 10.9693L10.5917 12.9555C10.6576 12.9895 10.7316 13.0044 10.8055 12.9987C10.8794 12.9929 10.9503 12.9667 11.0101 12.923C11.07 12.8793 11.1165 12.8198 11.1445 12.7512C11.1725 12.6825 11.1808 12.6075 11.1686 12.5343L10.4474 8.32664L13.5045 5.3472C13.5578 5.29553 13.5956 5.23002 13.6137 5.15803C13.6318 5.08604 13.6295 5.01042 13.6069 4.9397Z"
              fill="#FFB801"
            />
            <path
              d="M30.3403 4.93921C30.3174 4.86829 30.275 4.80522 30.218 4.75716C30.161 4.7091 30.0917 4.67797 30.018 4.6673L25.794 4.05353L23.9045 0.222306C23.8714 0.15556 23.8204 0.0993764 23.7571 0.0600955C23.6939 0.0208145 23.6209 0 23.5464 0C23.4719 0 23.3989 0.0208145 23.3357 0.0600955C23.2724 0.0993764 23.2214 0.15556 23.1883 0.222306L21.2988 4.05064L17.0748 4.66442C17.0012 4.67524 16.9321 4.70641 16.8752 4.75443C16.8183 4.80244 16.776 4.86538 16.753 4.93616C16.73 5.00695 16.7272 5.08275 16.7449 5.15503C16.7627 5.22731 16.8003 5.2932 16.8534 5.34527L19.9098 8.3247L19.1886 12.5324C19.1766 12.6055 19.185 12.6804 19.2131 12.749C19.2411 12.8175 19.2877 12.8769 19.3475 12.9205C19.4074 12.9641 19.4781 12.9902 19.552 12.996C19.6258 13.0017 19.6997 12.9868 19.7656 12.9529L23.5468 10.9688L27.3251 12.9551C27.391 12.989 27.465 13.0039 27.5389 12.9982C27.6128 12.9924 27.6837 12.9662 27.7435 12.9225C27.8034 12.8788 27.8499 12.8193 27.8779 12.7507C27.9059 12.682 27.9142 12.607 27.902 12.5339L27.1808 8.32615L30.2379 5.34671C30.2912 5.29504 30.329 5.22953 30.3471 5.15754C30.3652 5.08555 30.3629 5.00993 30.3403 4.93921Z"
              fill="#FFB801"
            />
            <path
              d="M47.0747 4.93921C47.0517 4.86829 47.0093 4.80522 46.9524 4.75716C46.8954 4.7091 46.8261 4.67797 46.7523 4.6673L42.5283 4.05353L40.6388 0.222306C40.6058 0.15556 40.5548 0.0993764 40.4915 0.0600955C40.4282 0.0208145 40.3552 0 40.2808 0C40.2063 0 40.1333 0.0208145 40.07 0.0600955C40.0068 0.0993764 39.9557 0.15556 39.9227 0.222306L38.0332 4.05064L33.8092 4.66442C33.7356 4.67524 33.6664 4.70641 33.6096 4.75443C33.5527 4.80244 33.5104 4.86538 33.4874 4.93616C33.4643 5.00695 33.4616 5.08275 33.4793 5.15503C33.4971 5.22731 33.5346 5.2932 33.5878 5.34527L36.6442 8.3247L35.923 12.5324C35.9109 12.6055 35.9194 12.6804 35.9475 12.749C35.9755 12.8175 36.022 12.8769 36.0819 12.9205C36.1417 12.9641 36.2125 12.9902 36.2863 12.996C36.3602 13.0017 36.4341 12.9868 36.5 12.9529L40.2811 10.9688L44.0594 12.9551C44.1253 12.989 44.1994 13.0039 44.2733 12.9982C44.3472 12.9924 44.418 12.9662 44.4779 12.9225C44.5377 12.8788 44.5843 12.8193 44.6123 12.7507C44.6402 12.682 44.6486 12.607 44.6364 12.5339L43.9152 8.32615L46.9723 5.34671C47.0256 5.29504 47.0634 5.22953 47.0815 5.15754C47.0996 5.08555 47.0972 5.00993 47.0747 4.93921Z"
              fill="#FFB801"
            />
            <path
              d="M63.8081 4.93921C63.7851 4.86829 63.7428 4.80522 63.6858 4.75716C63.6288 4.7091 63.5595 4.67797 63.4857 4.6673L59.2618 4.05353L57.3722 0.222306C57.3392 0.15556 57.2882 0.0993764 57.2249 0.0600955C57.1616 0.0208145 57.0886 0 57.0142 0C56.9397 0 56.8667 0.0208145 56.8035 0.0600955C56.7402 0.0993764 56.6891 0.15556 56.6561 0.222306L54.7666 4.05064L50.5426 4.66442C50.469 4.67524 50.3998 4.70641 50.343 4.75443C50.2861 4.80244 50.2438 4.86538 50.2208 4.93616C50.1977 5.00695 50.195 5.08275 50.2127 5.15503C50.2305 5.22731 50.268 5.2932 50.3212 5.34527L53.3776 8.3247L52.6564 12.5324C52.6443 12.6055 52.6528 12.6804 52.6809 12.749C52.7089 12.8175 52.7555 12.8769 52.8153 12.9205C52.8751 12.9641 52.9459 12.9902 53.0197 12.996C53.0936 13.0017 53.1675 12.9868 53.2334 12.9529L57.0145 10.9688L60.7928 12.9551C60.8587 12.989 60.9328 13.0039 61.0067 12.9982C61.0806 12.9924 61.1514 12.9662 61.2113 12.9225C61.2712 12.8788 61.3177 12.8193 61.3457 12.7507C61.3737 12.682 61.382 12.607 61.3698 12.5339L60.6486 8.32615L63.7057 5.34671C63.759 5.29504 63.7968 5.22953 63.8149 5.15754C63.833 5.08555 63.8306 5.00993 63.8081 4.93921Z"
              fill="#FFB801"
            />
            <path
              d="M80.5425 4.93921C80.5196 4.86829 80.4772 4.80522 80.4202 4.75716C80.3632 4.7091 80.2939 4.67797 80.2202 4.6673L75.9962 4.05353L74.1067 0.222306C74.0736 0.15556 74.0226 0.0993764 73.9593 0.0600955C73.896 0.0208145 73.8231 0 73.7486 0C73.6741 0 73.6011 0.0208145 73.5379 0.0600955C73.4746 0.0993764 73.4235 0.15556 73.3905 0.222306L71.501 4.05064L67.277 4.66442C67.2034 4.67524 67.1342 4.70641 67.0773 4.75443C67.0205 4.80244 66.9782 4.86538 66.9551 4.93616C66.9321 5.00695 66.9293 5.08275 66.9471 5.15503C66.9648 5.22731 67.0024 5.2932 67.0556 5.34527L70.112 8.3247L69.3908 12.5324C69.3787 12.6055 69.3872 12.6804 69.4152 12.749C69.4433 12.8175 69.4898 12.8769 69.5497 12.9205C69.6095 12.9641 69.6803 12.9902 69.7541 12.996C69.8279 13.0017 69.9019 12.9868 69.9678 12.9529L73.7489 10.9688L77.5272 12.9551C77.5931 12.989 77.6672 13.0039 77.7411 12.9982C77.815 12.9924 77.8858 12.9662 77.9457 12.9225C78.0056 12.8788 78.0521 12.8193 78.0801 12.7507C78.1081 12.682 78.1164 12.607 78.1042 12.5339L77.383 8.32615L80.4401 5.34671C80.4934 5.29504 80.5312 5.22953 80.5493 5.15754C80.5674 5.08555 80.5651 5.00993 80.5425 4.93921Z"
              fill="#FFB801"
            />
          </svg>
          <span className="mainPageComfortRating">
            Over 500+ 5 Star Reviews Online
          </span>
        </div>
      </div>
      <div className="mainPageReviews">
        <h2 className="mainPageReviewsTitle">What are our fans saying?</h2>
        <p className="mainPageReviewsText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat. Fusce non nibh luctus.
        </p>
        <img className="mainPageReviewsImage" src={reviewImage} alt="" />
        <div className="mainPageReviewsMainSection">
          <div className="mainPageReviewsMainSectionArrow">
            <svg
              width="13"
              height="24"
              viewBox="0 0 13 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4651 1.66846L1.00009 12.1306L11.4651 22.5939"
                stroke="#676869"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="mainPageReviewsSections">
            <div className="mainPageReviewsSection">
              <div className="mainPageReviewsSectionBl">
                <div className="mainPageReviewsSectionBlock">
                  <svg
                    width="37"
                    height="37"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="19.5" cy="19.5" r="19.5" fill="#1C2E58" />
                  </svg>
                  <div className="mainPageReviewsSectionInnerBlock">
                    <svg
                      width="60"
                      height="10"
                      viewBox="0 0 60 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.1341 3.67958C10.117 3.62675 10.0854 3.57978 10.043 3.54399C10.0006 3.50819 9.94895 3.48501 9.89401 3.47707L6.74809 3.01994L5.34084 0.166545C5.31623 0.116834 5.27822 0.0749896 5.2311 0.0457341C5.18398 0.0164787 5.12962 0.000976563 5.07416 0.000976562C5.01869 0.000976562 4.96433 0.0164787 4.91721 0.0457341C4.87009 0.0749896 4.83208 0.116834 4.80748 0.166545L3.40022 3.01779L0.254303 3.47492C0.199463 3.48298 0.147963 3.50619 0.10561 3.54195C0.0632555 3.57771 0.0317307 3.62459 0.0145882 3.67731C-0.00255433 3.73002 -0.00463305 3.78648 0.00858632 3.84031C0.0218057 3.89415 0.0497976 3.94322 0.0894072 3.982L2.36572 6.20101L1.8286 9.3348C1.81961 9.38922 1.82591 9.44506 1.84681 9.49609C1.8677 9.54713 1.90237 9.59136 1.94693 9.62384C1.9915 9.65632 2.04422 9.67578 2.0992 9.68004C2.15418 9.6843 2.20926 9.6732 2.2583 9.64797L5.07442 8.17024L7.8884 9.64958C7.93748 9.67485 7.99263 9.68597 8.04767 9.68169C8.10271 9.67742 8.15547 9.65791 8.20006 9.62536C8.24465 9.59281 8.27931 9.54849 8.30015 9.49737C8.321 9.44624 8.32721 9.39033 8.3181 9.33588L7.78098 6.20208L10.0578 3.98307C10.0975 3.94459 10.1257 3.8958 10.1392 3.84218C10.1526 3.78856 10.1509 3.73225 10.1341 3.67958Z"
                        fill="#FFB801"
                      />
                      <path
                        d="M22.597 3.67909C22.5799 3.62627 22.5483 3.57929 22.5059 3.5435C22.4635 3.50771 22.4118 3.48452 22.3569 3.47658L19.211 3.01945L17.8037 0.166057C17.7791 0.116346 17.7411 0.0745013 17.694 0.0452459C17.6469 0.0159904 17.5925 0.000488281 17.537 0.000488281C17.4816 0.000488281 17.4272 0.0159904 17.3801 0.0452459C17.333 0.0745013 17.295 0.116346 17.2704 0.166057L15.8631 3.01731L12.7172 3.47443C12.6624 3.48249 12.6109 3.50571 12.5685 3.54146C12.5261 3.57722 12.4946 3.6241 12.4775 3.67682C12.4603 3.72954 12.4583 3.78599 12.4715 3.83983C12.4847 3.89366 12.5127 3.94273 12.5523 3.98151L14.8286 6.20052L14.2915 9.33432C14.2825 9.38873 14.2888 9.44457 14.3097 9.49561C14.3306 9.54664 14.3653 9.59087 14.4098 9.62335C14.4544 9.65583 14.5071 9.67529 14.5621 9.67955C14.6171 9.68381 14.6722 9.67271 14.7212 9.64748L17.5373 8.16975L20.3513 9.64909C20.4004 9.67436 20.4555 9.68548 20.5106 9.68121C20.5656 9.67693 20.6184 9.65742 20.663 9.62487C20.7075 9.59232 20.7422 9.548 20.763 9.49688C20.7839 9.44576 20.7901 9.38984 20.781 9.33539L20.2439 6.20159L22.5207 3.98258C22.5604 3.9441 22.5886 3.89531 22.6021 3.84169C22.6155 3.78808 22.6138 3.73176 22.597 3.67909Z"
                        fill="#FFB801"
                      />
                      <path
                        d="M35.0599 3.6786C35.0428 3.62578 35.0112 3.57881 34.9688 3.54301C34.9263 3.50722 34.8747 3.48403 34.8198 3.47609L31.6739 3.01897L30.2666 0.165568C30.242 0.115857 30.204 0.0740131 30.1569 0.0447576C30.1097 0.0155021 30.0554 0 29.9999 0C29.9445 0 29.8901 0.0155021 29.843 0.0447576C29.7959 0.0740131 29.7579 0.115857 29.7332 0.165568L28.326 3.01682L25.1801 3.47394C25.1252 3.482 25.0737 3.50522 25.0314 3.54098C24.989 3.57674 24.9575 3.62362 24.9404 3.67633C24.9232 3.72905 24.9211 3.7855 24.9344 3.83934C24.9476 3.89317 24.9756 3.94224 25.0152 3.98102L27.2915 6.20003L26.7544 9.33383C26.7454 9.38824 26.7517 9.44408 26.7726 9.49512C26.7935 9.54616 26.8281 9.59038 26.8727 9.62286C26.9173 9.65534 26.97 9.6748 27.025 9.67906C27.08 9.68332 27.135 9.67222 27.1841 9.64699L30.0002 8.16926L32.8142 9.6486C32.8632 9.67388 32.9184 9.68499 32.9734 9.68072C33.0285 9.67644 33.0812 9.65694 33.1258 9.62438C33.1704 9.59183 33.2051 9.54751 33.2259 9.49639C33.2468 9.44527 33.253 9.38935 33.2439 9.3349L32.7067 6.20111L34.9836 3.98209C35.0233 3.94362 35.0515 3.89482 35.0649 3.84121C35.0784 3.78759 35.0766 3.73127 35.0599 3.6786Z"
                        fill="#FFB801"
                      />
                      <path
                        d="M47.523 3.6786C47.5059 3.62578 47.4744 3.57881 47.4319 3.54301C47.3895 3.50722 47.3379 3.48403 47.2829 3.47609L44.137 3.01897L42.7298 0.165568C42.7051 0.115857 42.6671 0.0740131 42.62 0.0447576C42.5729 0.0155021 42.5185 0 42.4631 0C42.4076 0 42.3532 0.0155021 42.3061 0.0447576C42.259 0.0740131 42.221 0.115857 42.1964 0.165568L40.7891 3.01682L37.6432 3.47394C37.5884 3.482 37.5369 3.50522 37.4945 3.54098C37.4522 3.57674 37.4206 3.62362 37.4035 3.67633C37.3864 3.72905 37.3843 3.7855 37.3975 3.83934C37.4107 3.89317 37.4387 3.94224 37.4783 3.98102L39.7546 6.20003L39.2175 9.33383C39.2085 9.38824 39.2148 9.44408 39.2357 9.49512C39.2566 9.54616 39.2913 9.59038 39.3358 9.62286C39.3804 9.65534 39.4331 9.6748 39.4881 9.67906C39.5431 9.68332 39.5982 9.67222 39.6472 9.64699L42.4633 8.16926L45.2773 9.6486C45.3264 9.67388 45.3815 9.68499 45.4366 9.68072C45.4916 9.67644 45.5444 9.65694 45.589 9.62438C45.6336 9.59183 45.6682 9.54751 45.6891 9.49639C45.7099 9.44527 45.7161 9.38935 45.707 9.3349L45.1699 6.20111L47.4467 3.98209C47.4864 3.94362 47.5146 3.89482 47.5281 3.84121C47.5416 3.78759 47.5398 3.73127 47.523 3.6786Z"
                        fill="#FFB801"
                      />
                      <path
                        d="M59.9857 3.6786C59.9686 3.62578 59.9371 3.57881 59.8946 3.54301C59.8522 3.50722 59.8006 3.48403 59.7456 3.47609L56.5997 3.01897L55.1924 0.165568C55.1678 0.115857 55.1298 0.0740131 55.0827 0.0447576C55.0356 0.0155021 54.9812 0 54.9257 0C54.8703 0 54.8159 0.0155021 54.7688 0.0447576C54.7217 0.0740131 54.6837 0.115857 54.6591 0.165568L53.2518 3.01682L50.1059 3.47394C50.051 3.482 49.9995 3.50522 49.9572 3.54098C49.9148 3.57674 49.8833 3.62362 49.8662 3.67633C49.849 3.72905 49.8469 3.7855 49.8601 3.83934C49.8734 3.89317 49.9014 3.94224 49.941 3.98102L52.2173 6.20003L51.6802 9.33383C51.6712 9.38824 51.6775 9.44408 51.6984 9.49512C51.7193 9.54616 51.7539 9.59038 51.7985 9.62286C51.8431 9.65534 51.8958 9.6748 51.9508 9.67906C52.0057 9.68332 52.0608 9.67222 52.1099 9.64699L54.926 8.16926L57.74 9.6486C57.7891 9.67388 57.8442 9.68499 57.8993 9.68072C57.9543 9.67644 58.0071 9.65694 58.0517 9.62438C58.0962 9.59183 58.1309 9.54751 58.1517 9.49639C58.1726 9.44527 58.1788 9.38935 58.1697 9.3349L57.6326 6.20111L59.9094 3.98209C59.9491 3.94362 59.9773 3.89482 59.9908 3.84121C60.0042 3.78759 60.0025 3.73127 59.9857 3.6786Z"
                        fill="#FFB801"
                      />
                    </svg>
                    <p className="mainPageReviewsSectionName">Jane, S.</p>
                  </div>
                </div>
                <p className="mainPageReviewsSectionText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed sollicitudin dolor, non sodales justo. Aenean
                  eget aliquet mi.
                </p>
              </div>
            </div>
            <div className="mainPageReviewsSection">
              <div className="mainPageReviewsSectionBl">
                <div className="mainPageReviewsSectionBlock">
                  <svg
                    width="37"
                    height="37"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="19.5" cy="19.5" r="19.5" fill="#1C2E58" />
                  </svg>
                  <div className="mainPageReviewsSectionInnerBlock">
                    <svg
                      width="60"
                      height="10"
                      viewBox="0 0 60 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.1341 3.67958C10.117 3.62675 10.0854 3.57978 10.043 3.54399C10.0006 3.50819 9.94895 3.48501 9.89401 3.47707L6.74809 3.01994L5.34084 0.166545C5.31623 0.116834 5.27822 0.0749896 5.2311 0.0457341C5.18398 0.0164787 5.12962 0.000976563 5.07416 0.000976562C5.01869 0.000976562 4.96433 0.0164787 4.91721 0.0457341C4.87009 0.0749896 4.83208 0.116834 4.80748 0.166545L3.40022 3.01779L0.254303 3.47492C0.199463 3.48298 0.147963 3.50619 0.10561 3.54195C0.0632555 3.57771 0.0317307 3.62459 0.0145882 3.67731C-0.00255433 3.73002 -0.00463305 3.78648 0.00858632 3.84031C0.0218057 3.89415 0.0497976 3.94322 0.0894072 3.982L2.36572 6.20101L1.8286 9.3348C1.81961 9.38922 1.82591 9.44506 1.84681 9.49609C1.8677 9.54713 1.90237 9.59136 1.94693 9.62384C1.9915 9.65632 2.04422 9.67578 2.0992 9.68004C2.15418 9.6843 2.20926 9.6732 2.2583 9.64797L5.07442 8.17024L7.8884 9.64958C7.93748 9.67485 7.99263 9.68597 8.04767 9.68169C8.10271 9.67742 8.15547 9.65791 8.20006 9.62536C8.24465 9.59281 8.27931 9.54849 8.30015 9.49737C8.321 9.44624 8.32721 9.39033 8.3181 9.33588L7.78098 6.20208L10.0578 3.98307C10.0975 3.94459 10.1257 3.8958 10.1392 3.84218C10.1526 3.78856 10.1509 3.73225 10.1341 3.67958Z"
                        fill="#FFB801"
                      />
                      <path
                        d="M22.597 3.67909C22.5799 3.62627 22.5483 3.57929 22.5059 3.5435C22.4635 3.50771 22.4118 3.48452 22.3569 3.47658L19.211 3.01945L17.8037 0.166057C17.7791 0.116346 17.7411 0.0745013 17.694 0.0452459C17.6469 0.0159904 17.5925 0.000488281 17.537 0.000488281C17.4816 0.000488281 17.4272 0.0159904 17.3801 0.0452459C17.333 0.0745013 17.295 0.116346 17.2704 0.166057L15.8631 3.01731L12.7172 3.47443C12.6624 3.48249 12.6109 3.50571 12.5685 3.54146C12.5261 3.57722 12.4946 3.6241 12.4775 3.67682C12.4603 3.72954 12.4583 3.78599 12.4715 3.83983C12.4847 3.89366 12.5127 3.94273 12.5523 3.98151L14.8286 6.20052L14.2915 9.33432C14.2825 9.38873 14.2888 9.44457 14.3097 9.49561C14.3306 9.54664 14.3653 9.59087 14.4098 9.62335C14.4544 9.65583 14.5071 9.67529 14.5621 9.67955C14.6171 9.68381 14.6722 9.67271 14.7212 9.64748L17.5373 8.16975L20.3513 9.64909C20.4004 9.67436 20.4555 9.68548 20.5106 9.68121C20.5656 9.67693 20.6184 9.65742 20.663 9.62487C20.7075 9.59232 20.7422 9.548 20.763 9.49688C20.7839 9.44576 20.7901 9.38984 20.781 9.33539L20.2439 6.20159L22.5207 3.98258C22.5604 3.9441 22.5886 3.89531 22.6021 3.84169C22.6155 3.78808 22.6138 3.73176 22.597 3.67909Z"
                        fill="#FFB801"
                      />
                      <path
                        d="M35.0599 3.6786C35.0428 3.62578 35.0112 3.57881 34.9688 3.54301C34.9263 3.50722 34.8747 3.48403 34.8198 3.47609L31.6739 3.01897L30.2666 0.165568C30.242 0.115857 30.204 0.0740131 30.1569 0.0447576C30.1097 0.0155021 30.0554 0 29.9999 0C29.9445 0 29.8901 0.0155021 29.843 0.0447576C29.7959 0.0740131 29.7579 0.115857 29.7332 0.165568L28.326 3.01682L25.1801 3.47394C25.1252 3.482 25.0737 3.50522 25.0314 3.54098C24.989 3.57674 24.9575 3.62362 24.9404 3.67633C24.9232 3.72905 24.9211 3.7855 24.9344 3.83934C24.9476 3.89317 24.9756 3.94224 25.0152 3.98102L27.2915 6.20003L26.7544 9.33383C26.7454 9.38824 26.7517 9.44408 26.7726 9.49512C26.7935 9.54616 26.8281 9.59038 26.8727 9.62286C26.9173 9.65534 26.97 9.6748 27.025 9.67906C27.08 9.68332 27.135 9.67222 27.1841 9.64699L30.0002 8.16926L32.8142 9.6486C32.8632 9.67388 32.9184 9.68499 32.9734 9.68072C33.0285 9.67644 33.0812 9.65694 33.1258 9.62438C33.1704 9.59183 33.2051 9.54751 33.2259 9.49639C33.2468 9.44527 33.253 9.38935 33.2439 9.3349L32.7067 6.20111L34.9836 3.98209C35.0233 3.94362 35.0515 3.89482 35.0649 3.84121C35.0784 3.78759 35.0766 3.73127 35.0599 3.6786Z"
                        fill="#FFB801"
                      />
                      <path
                        d="M47.523 3.6786C47.5059 3.62578 47.4744 3.57881 47.4319 3.54301C47.3895 3.50722 47.3379 3.48403 47.2829 3.47609L44.137 3.01897L42.7298 0.165568C42.7051 0.115857 42.6671 0.0740131 42.62 0.0447576C42.5729 0.0155021 42.5185 0 42.4631 0C42.4076 0 42.3532 0.0155021 42.3061 0.0447576C42.259 0.0740131 42.221 0.115857 42.1964 0.165568L40.7891 3.01682L37.6432 3.47394C37.5884 3.482 37.5369 3.50522 37.4945 3.54098C37.4522 3.57674 37.4206 3.62362 37.4035 3.67633C37.3864 3.72905 37.3843 3.7855 37.3975 3.83934C37.4107 3.89317 37.4387 3.94224 37.4783 3.98102L39.7546 6.20003L39.2175 9.33383C39.2085 9.38824 39.2148 9.44408 39.2357 9.49512C39.2566 9.54616 39.2913 9.59038 39.3358 9.62286C39.3804 9.65534 39.4331 9.6748 39.4881 9.67906C39.5431 9.68332 39.5982 9.67222 39.6472 9.64699L42.4633 8.16926L45.2773 9.6486C45.3264 9.67388 45.3815 9.68499 45.4366 9.68072C45.4916 9.67644 45.5444 9.65694 45.589 9.62438C45.6336 9.59183 45.6682 9.54751 45.6891 9.49639C45.7099 9.44527 45.7161 9.38935 45.707 9.3349L45.1699 6.20111L47.4467 3.98209C47.4864 3.94362 47.5146 3.89482 47.5281 3.84121C47.5416 3.78759 47.5398 3.73127 47.523 3.6786Z"
                        fill="#FFB801"
                      />
                      <path
                        d="M59.9857 3.6786C59.9686 3.62578 59.9371 3.57881 59.8946 3.54301C59.8522 3.50722 59.8006 3.48403 59.7456 3.47609L56.5997 3.01897L55.1924 0.165568C55.1678 0.115857 55.1298 0.0740131 55.0827 0.0447576C55.0356 0.0155021 54.9812 0 54.9257 0C54.8703 0 54.8159 0.0155021 54.7688 0.0447576C54.7217 0.0740131 54.6837 0.115857 54.6591 0.165568L53.2518 3.01682L50.1059 3.47394C50.051 3.482 49.9995 3.50522 49.9572 3.54098C49.9148 3.57674 49.8833 3.62362 49.8662 3.67633C49.849 3.72905 49.8469 3.7855 49.8601 3.83934C49.8734 3.89317 49.9014 3.94224 49.941 3.98102L52.2173 6.20003L51.6802 9.33383C51.6712 9.38824 51.6775 9.44408 51.6984 9.49512C51.7193 9.54616 51.7539 9.59038 51.7985 9.62286C51.8431 9.65534 51.8958 9.6748 51.9508 9.67906C52.0057 9.68332 52.0608 9.67222 52.1099 9.64699L54.926 8.16926L57.74 9.6486C57.7891 9.67388 57.8442 9.68499 57.8993 9.68072C57.9543 9.67644 58.0071 9.65694 58.0517 9.62438C58.0962 9.59183 58.1309 9.54751 58.1517 9.49639C58.1726 9.44527 58.1788 9.38935 58.1697 9.3349L57.6326 6.20111L59.9094 3.98209C59.9491 3.94362 59.9773 3.89482 59.9908 3.84121C60.0042 3.78759 60.0025 3.73127 59.9857 3.6786Z"
                        fill="#FFB801"
                      />
                    </svg>
                    <p className="mainPageReviewsSectionName">Jane, S.</p>
                  </div>
                </div>
                <p className="mainPageReviewsSectionText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed sollicitudin dolor, non sodales justo. Aenean
                  eget aliquet mi. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Pellentesque sed sollicitudin dolor, non
                  sodales.
                </p>
              </div>
            </div>
            <div className="mainPageReviewsSection">
              <div className="mainPageReviewsSectionBl">
                <div className="mainPageReviewsSectionBlock">
                  <svg
                    width="37"
                    height="37"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="19.5" cy="19.5" r="19.5" fill="#1C2E58" />
                  </svg>
                  <div className="mainPageReviewsSectionInnerBlock">
                    <svg
                      width="60"
                      height="10"
                      viewBox="0 0 60 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.1341 3.67958C10.117 3.62675 10.0854 3.57978 10.043 3.54399C10.0006 3.50819 9.94895 3.48501 9.89401 3.47707L6.74809 3.01994L5.34084 0.166545C5.31623 0.116834 5.27822 0.0749896 5.2311 0.0457341C5.18398 0.0164787 5.12962 0.000976563 5.07416 0.000976562C5.01869 0.000976562 4.96433 0.0164787 4.91721 0.0457341C4.87009 0.0749896 4.83208 0.116834 4.80748 0.166545L3.40022 3.01779L0.254303 3.47492C0.199463 3.48298 0.147963 3.50619 0.10561 3.54195C0.0632555 3.57771 0.0317307 3.62459 0.0145882 3.67731C-0.00255433 3.73002 -0.00463305 3.78648 0.00858632 3.84031C0.0218057 3.89415 0.0497976 3.94322 0.0894072 3.982L2.36572 6.20101L1.8286 9.3348C1.81961 9.38922 1.82591 9.44506 1.84681 9.49609C1.8677 9.54713 1.90237 9.59136 1.94693 9.62384C1.9915 9.65632 2.04422 9.67578 2.0992 9.68004C2.15418 9.6843 2.20926 9.6732 2.2583 9.64797L5.07442 8.17024L7.8884 9.64958C7.93748 9.67485 7.99263 9.68597 8.04767 9.68169C8.10271 9.67742 8.15547 9.65791 8.20006 9.62536C8.24465 9.59281 8.27931 9.54849 8.30015 9.49737C8.321 9.44624 8.32721 9.39033 8.3181 9.33588L7.78098 6.20208L10.0578 3.98307C10.0975 3.94459 10.1257 3.8958 10.1392 3.84218C10.1526 3.78856 10.1509 3.73225 10.1341 3.67958Z"
                        fill="#FFB801"
                      />
                      <path
                        d="M22.597 3.67909C22.5799 3.62627 22.5483 3.57929 22.5059 3.5435C22.4635 3.50771 22.4118 3.48452 22.3569 3.47658L19.211 3.01945L17.8037 0.166057C17.7791 0.116346 17.7411 0.0745013 17.694 0.0452459C17.6469 0.0159904 17.5925 0.000488281 17.537 0.000488281C17.4816 0.000488281 17.4272 0.0159904 17.3801 0.0452459C17.333 0.0745013 17.295 0.116346 17.2704 0.166057L15.8631 3.01731L12.7172 3.47443C12.6624 3.48249 12.6109 3.50571 12.5685 3.54146C12.5261 3.57722 12.4946 3.6241 12.4775 3.67682C12.4603 3.72954 12.4583 3.78599 12.4715 3.83983C12.4847 3.89366 12.5127 3.94273 12.5523 3.98151L14.8286 6.20052L14.2915 9.33432C14.2825 9.38873 14.2888 9.44457 14.3097 9.49561C14.3306 9.54664 14.3653 9.59087 14.4098 9.62335C14.4544 9.65583 14.5071 9.67529 14.5621 9.67955C14.6171 9.68381 14.6722 9.67271 14.7212 9.64748L17.5373 8.16975L20.3513 9.64909C20.4004 9.67436 20.4555 9.68548 20.5106 9.68121C20.5656 9.67693 20.6184 9.65742 20.663 9.62487C20.7075 9.59232 20.7422 9.548 20.763 9.49688C20.7839 9.44576 20.7901 9.38984 20.781 9.33539L20.2439 6.20159L22.5207 3.98258C22.5604 3.9441 22.5886 3.89531 22.6021 3.84169C22.6155 3.78808 22.6138 3.73176 22.597 3.67909Z"
                        fill="#FFB801"
                      />
                      <path
                        d="M35.0599 3.6786C35.0428 3.62578 35.0112 3.57881 34.9688 3.54301C34.9263 3.50722 34.8747 3.48403 34.8198 3.47609L31.6739 3.01897L30.2666 0.165568C30.242 0.115857 30.204 0.0740131 30.1569 0.0447576C30.1097 0.0155021 30.0554 0 29.9999 0C29.9445 0 29.8901 0.0155021 29.843 0.0447576C29.7959 0.0740131 29.7579 0.115857 29.7332 0.165568L28.326 3.01682L25.1801 3.47394C25.1252 3.482 25.0737 3.50522 25.0314 3.54098C24.989 3.57674 24.9575 3.62362 24.9404 3.67633C24.9232 3.72905 24.9211 3.7855 24.9344 3.83934C24.9476 3.89317 24.9756 3.94224 25.0152 3.98102L27.2915 6.20003L26.7544 9.33383C26.7454 9.38824 26.7517 9.44408 26.7726 9.49512C26.7935 9.54616 26.8281 9.59038 26.8727 9.62286C26.9173 9.65534 26.97 9.6748 27.025 9.67906C27.08 9.68332 27.135 9.67222 27.1841 9.64699L30.0002 8.16926L32.8142 9.6486C32.8632 9.67388 32.9184 9.68499 32.9734 9.68072C33.0285 9.67644 33.0812 9.65694 33.1258 9.62438C33.1704 9.59183 33.2051 9.54751 33.2259 9.49639C33.2468 9.44527 33.253 9.38935 33.2439 9.3349L32.7067 6.20111L34.9836 3.98209C35.0233 3.94362 35.0515 3.89482 35.0649 3.84121C35.0784 3.78759 35.0766 3.73127 35.0599 3.6786Z"
                        fill="#FFB801"
                      />
                      <path
                        d="M47.523 3.6786C47.5059 3.62578 47.4744 3.57881 47.4319 3.54301C47.3895 3.50722 47.3379 3.48403 47.2829 3.47609L44.137 3.01897L42.7298 0.165568C42.7051 0.115857 42.6671 0.0740131 42.62 0.0447576C42.5729 0.0155021 42.5185 0 42.4631 0C42.4076 0 42.3532 0.0155021 42.3061 0.0447576C42.259 0.0740131 42.221 0.115857 42.1964 0.165568L40.7891 3.01682L37.6432 3.47394C37.5884 3.482 37.5369 3.50522 37.4945 3.54098C37.4522 3.57674 37.4206 3.62362 37.4035 3.67633C37.3864 3.72905 37.3843 3.7855 37.3975 3.83934C37.4107 3.89317 37.4387 3.94224 37.4783 3.98102L39.7546 6.20003L39.2175 9.33383C39.2085 9.38824 39.2148 9.44408 39.2357 9.49512C39.2566 9.54616 39.2913 9.59038 39.3358 9.62286C39.3804 9.65534 39.4331 9.6748 39.4881 9.67906C39.5431 9.68332 39.5982 9.67222 39.6472 9.64699L42.4633 8.16926L45.2773 9.6486C45.3264 9.67388 45.3815 9.68499 45.4366 9.68072C45.4916 9.67644 45.5444 9.65694 45.589 9.62438C45.6336 9.59183 45.6682 9.54751 45.6891 9.49639C45.7099 9.44527 45.7161 9.38935 45.707 9.3349L45.1699 6.20111L47.4467 3.98209C47.4864 3.94362 47.5146 3.89482 47.5281 3.84121C47.5416 3.78759 47.5398 3.73127 47.523 3.6786Z"
                        fill="#FFB801"
                      />
                      <path
                        d="M59.9857 3.6786C59.9686 3.62578 59.9371 3.57881 59.8946 3.54301C59.8522 3.50722 59.8006 3.48403 59.7456 3.47609L56.5997 3.01897L55.1924 0.165568C55.1678 0.115857 55.1298 0.0740131 55.0827 0.0447576C55.0356 0.0155021 54.9812 0 54.9257 0C54.8703 0 54.8159 0.0155021 54.7688 0.0447576C54.7217 0.0740131 54.6837 0.115857 54.6591 0.165568L53.2518 3.01682L50.1059 3.47394C50.051 3.482 49.9995 3.50522 49.9572 3.54098C49.9148 3.57674 49.8833 3.62362 49.8662 3.67633C49.849 3.72905 49.8469 3.7855 49.8601 3.83934C49.8734 3.89317 49.9014 3.94224 49.941 3.98102L52.2173 6.20003L51.6802 9.33383C51.6712 9.38824 51.6775 9.44408 51.6984 9.49512C51.7193 9.54616 51.7539 9.59038 51.7985 9.62286C51.8431 9.65534 51.8958 9.6748 51.9508 9.67906C52.0057 9.68332 52.0608 9.67222 52.1099 9.64699L54.926 8.16926L57.74 9.6486C57.7891 9.67388 57.8442 9.68499 57.8993 9.68072C57.9543 9.67644 58.0071 9.65694 58.0517 9.62438C58.0962 9.59183 58.1309 9.54751 58.1517 9.49639C58.1726 9.44527 58.1788 9.38935 58.1697 9.3349L57.6326 6.20111L59.9094 3.98209C59.9491 3.94362 59.9773 3.89482 59.9908 3.84121C60.0042 3.78759 60.0025 3.73127 59.9857 3.6786Z"
                        fill="#FFB801"
                      />
                    </svg>
                    <p className="mainPageReviewsSectionName">Jane, S.</p>
                  </div>
                </div>
                <p className="mainPageReviewsSectionText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed sollicitudin dolor, non sodales justo. Aenean
                  eget aliquet mi.
                </p>
              </div>
            </div>
          </div>
          <div className="mainPageReviewsMainSectionArrow">
            <svg
              width="13"
              height="24"
              viewBox="0 0 13 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.53516 22.5596L12.0002 12.0974L1.53516 1.63409"
                stroke="#676869"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="mainPageHeroButton">
          <p className="mainPageHeroButtonText">Customize Your Outfit</p>
          <svg
            width="23"
            height="10"
            viewBox="0 0 23 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.1072 10L23 5.00003L18.1072 0L16.6372 1.5022L19.0205 3.93781L0 3.93781V6.06226L19.0205 6.06226L16.6372 8.4978L18.1072 10Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="mainPageComfortRatingSection">
          <svg
            width="81"
            height="13"
            viewBox="0 0 81 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6069 4.9397C13.584 4.86877 13.5416 4.80571 13.4846 4.75765C13.4276 4.70958 13.3583 4.67846 13.2846 4.66779L9.06058 4.05402L7.17107 0.222795C7.13804 0.156049 7.087 0.0998647 7.02374 0.0605837C6.96046 0.0213028 6.88748 0.000488281 6.81301 0.000488281C6.73854 0.000488281 6.66555 0.0213028 6.60228 0.0605837C6.53901 0.0998647 6.48798 0.156049 6.45494 0.222795L4.56543 4.05113L0.34145 4.66491C0.267816 4.67573 0.198669 4.7069 0.141801 4.75491C0.0849324 4.80293 0.0426044 4.86587 0.0195874 4.93665C-0.00342967 5.00743 -0.00622073 5.08324 0.0115288 5.15552C0.0292782 5.2278 0.0668627 5.29369 0.120046 5.34575L3.17643 8.32519L2.45524 12.5329C2.44317 12.606 2.45163 12.6809 2.47968 12.7495C2.50774 12.818 2.55428 12.8774 2.61412 12.921C2.67396 12.9646 2.74474 12.9907 2.81857 12.9964C2.89239 13.0022 2.96635 12.9873 3.03219 12.9534L6.81337 10.9693L10.5917 12.9555C10.6576 12.9895 10.7316 13.0044 10.8055 12.9987C10.8794 12.9929 10.9503 12.9667 11.0101 12.923C11.07 12.8793 11.1165 12.8198 11.1445 12.7512C11.1725 12.6825 11.1808 12.6075 11.1686 12.5343L10.4474 8.32664L13.5045 5.3472C13.5578 5.29553 13.5956 5.23002 13.6137 5.15803C13.6318 5.08604 13.6295 5.01042 13.6069 4.9397Z"
              fill="#FFB801"
            />
            <path
              d="M30.3403 4.93921C30.3174 4.86829 30.275 4.80522 30.218 4.75716C30.161 4.7091 30.0917 4.67797 30.018 4.6673L25.794 4.05353L23.9045 0.222306C23.8714 0.15556 23.8204 0.0993764 23.7571 0.0600955C23.6939 0.0208145 23.6209 0 23.5464 0C23.4719 0 23.3989 0.0208145 23.3357 0.0600955C23.2724 0.0993764 23.2214 0.15556 23.1883 0.222306L21.2988 4.05064L17.0748 4.66442C17.0012 4.67524 16.9321 4.70641 16.8752 4.75443C16.8183 4.80244 16.776 4.86538 16.753 4.93616C16.73 5.00695 16.7272 5.08275 16.7449 5.15503C16.7627 5.22731 16.8003 5.2932 16.8534 5.34527L19.9098 8.3247L19.1886 12.5324C19.1766 12.6055 19.185 12.6804 19.2131 12.749C19.2411 12.8175 19.2877 12.8769 19.3475 12.9205C19.4074 12.9641 19.4781 12.9902 19.552 12.996C19.6258 13.0017 19.6997 12.9868 19.7656 12.9529L23.5468 10.9688L27.3251 12.9551C27.391 12.989 27.465 13.0039 27.5389 12.9982C27.6128 12.9924 27.6837 12.9662 27.7435 12.9225C27.8034 12.8788 27.8499 12.8193 27.8779 12.7507C27.9059 12.682 27.9142 12.607 27.902 12.5339L27.1808 8.32615L30.2379 5.34671C30.2912 5.29504 30.329 5.22953 30.3471 5.15754C30.3652 5.08555 30.3629 5.00993 30.3403 4.93921Z"
              fill="#FFB801"
            />
            <path
              d="M47.0747 4.93921C47.0517 4.86829 47.0093 4.80522 46.9524 4.75716C46.8954 4.7091 46.8261 4.67797 46.7523 4.6673L42.5283 4.05353L40.6388 0.222306C40.6058 0.15556 40.5548 0.0993764 40.4915 0.0600955C40.4282 0.0208145 40.3552 0 40.2808 0C40.2063 0 40.1333 0.0208145 40.07 0.0600955C40.0068 0.0993764 39.9557 0.15556 39.9227 0.222306L38.0332 4.05064L33.8092 4.66442C33.7356 4.67524 33.6664 4.70641 33.6096 4.75443C33.5527 4.80244 33.5104 4.86538 33.4874 4.93616C33.4643 5.00695 33.4616 5.08275 33.4793 5.15503C33.4971 5.22731 33.5346 5.2932 33.5878 5.34527L36.6442 8.3247L35.923 12.5324C35.9109 12.6055 35.9194 12.6804 35.9475 12.749C35.9755 12.8175 36.022 12.8769 36.0819 12.9205C36.1417 12.9641 36.2125 12.9902 36.2863 12.996C36.3602 13.0017 36.4341 12.9868 36.5 12.9529L40.2811 10.9688L44.0594 12.9551C44.1253 12.989 44.1994 13.0039 44.2733 12.9982C44.3472 12.9924 44.418 12.9662 44.4779 12.9225C44.5377 12.8788 44.5843 12.8193 44.6123 12.7507C44.6402 12.682 44.6486 12.607 44.6364 12.5339L43.9152 8.32615L46.9723 5.34671C47.0256 5.29504 47.0634 5.22953 47.0815 5.15754C47.0996 5.08555 47.0972 5.00993 47.0747 4.93921Z"
              fill="#FFB801"
            />
            <path
              d="M63.8081 4.93921C63.7851 4.86829 63.7428 4.80522 63.6858 4.75716C63.6288 4.7091 63.5595 4.67797 63.4857 4.6673L59.2618 4.05353L57.3722 0.222306C57.3392 0.15556 57.2882 0.0993764 57.2249 0.0600955C57.1616 0.0208145 57.0886 0 57.0142 0C56.9397 0 56.8667 0.0208145 56.8035 0.0600955C56.7402 0.0993764 56.6891 0.15556 56.6561 0.222306L54.7666 4.05064L50.5426 4.66442C50.469 4.67524 50.3998 4.70641 50.343 4.75443C50.2861 4.80244 50.2438 4.86538 50.2208 4.93616C50.1977 5.00695 50.195 5.08275 50.2127 5.15503C50.2305 5.22731 50.268 5.2932 50.3212 5.34527L53.3776 8.3247L52.6564 12.5324C52.6443 12.6055 52.6528 12.6804 52.6809 12.749C52.7089 12.8175 52.7555 12.8769 52.8153 12.9205C52.8751 12.9641 52.9459 12.9902 53.0197 12.996C53.0936 13.0017 53.1675 12.9868 53.2334 12.9529L57.0145 10.9688L60.7928 12.9551C60.8587 12.989 60.9328 13.0039 61.0067 12.9982C61.0806 12.9924 61.1514 12.9662 61.2113 12.9225C61.2712 12.8788 61.3177 12.8193 61.3457 12.7507C61.3737 12.682 61.382 12.607 61.3698 12.5339L60.6486 8.32615L63.7057 5.34671C63.759 5.29504 63.7968 5.22953 63.8149 5.15754C63.833 5.08555 63.8306 5.00993 63.8081 4.93921Z"
              fill="#FFB801"
            />
            <path
              d="M80.5425 4.93921C80.5196 4.86829 80.4772 4.80522 80.4202 4.75716C80.3632 4.7091 80.2939 4.67797 80.2202 4.6673L75.9962 4.05353L74.1067 0.222306C74.0736 0.15556 74.0226 0.0993764 73.9593 0.0600955C73.896 0.0208145 73.8231 0 73.7486 0C73.6741 0 73.6011 0.0208145 73.5379 0.0600955C73.4746 0.0993764 73.4235 0.15556 73.3905 0.222306L71.501 4.05064L67.277 4.66442C67.2034 4.67524 67.1342 4.70641 67.0773 4.75443C67.0205 4.80244 66.9782 4.86538 66.9551 4.93616C66.9321 5.00695 66.9293 5.08275 66.9471 5.15503C66.9648 5.22731 67.0024 5.2932 67.0556 5.34527L70.112 8.3247L69.3908 12.5324C69.3787 12.6055 69.3872 12.6804 69.4152 12.749C69.4433 12.8175 69.4898 12.8769 69.5497 12.9205C69.6095 12.9641 69.6803 12.9902 69.7541 12.996C69.8279 13.0017 69.9019 12.9868 69.9678 12.9529L73.7489 10.9688L77.5272 12.9551C77.5931 12.989 77.6672 13.0039 77.7411 12.9982C77.815 12.9924 77.8858 12.9662 77.9457 12.9225C78.0056 12.8788 78.0521 12.8193 78.0801 12.7507C78.1081 12.682 78.1164 12.607 78.1042 12.5339L77.383 8.32615L80.4401 5.34671C80.4934 5.29504 80.5312 5.22953 80.5493 5.15754C80.5674 5.08555 80.5651 5.00993 80.5425 4.93921Z"
              fill="#FFB801"
            />
          </svg>
          <span className="mainPageComfortRating">
            Over 500+ 5 Star Reviews Online
          </span>
        </div>
      </div>
      <div className="mainPageQuestions">
        <div className="mainPageQuestionsLeft">
          <h1 className="mainPageQuestionsLeftTitle">
            Frequently asked questions.
          </h1>
          <div className="mainPageQuestionsLeftBlocks">
            <svg
              width="631"
              height="1"
              viewBox="0 0 631 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 0.5H631" stroke="#EAEAEA" />
            </svg>
            <div className="mainPageQuestionsLeftFirstBlock">
              <div className="mainPageQuestionsLeftFirstBlockInner">
                <h2 className="mainPageQuestionsLeftBlockTitle">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="mainPageQuestionsLeftFirstBlockText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
              <div className="mainPageQuestionsLeftFirstBlockSign">-</div>
            </div>
            <svg
              width="631"
              height="1"
              viewBox="0 0 631 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 0.5H631" stroke="#EAEAEA" />
            </svg>
            <div className="mainPageQuestionsLeftBlock">
              <h2 className="mainPageQuestionsLeftBlockTitle">
                lorem ipsum dolor sit amet
              </h2>
              <div className="mainPageQuestionsLeftBlockSign">+</div>
            </div>
            <svg
              width="631"
              height="1"
              viewBox="0 0 631 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 0.5H631" stroke="#EAEAEA" />
            </svg>
            <div className="mainPageQuestionsLeftBlock">
              <h2 className="mainPageQuestionsLeftBlockTitle">
                lorem ipsum dolor sit amet
              </h2>
              <div className="mainPageQuestionsLeftBlockSign">+</div>
            </div>
            <svg
              width="631"
              height="1"
              viewBox="0 0 631 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 0.5H631" stroke="#EAEAEA" />
            </svg>
            <div className="mainPageQuestionsLeftBlock">
              <h2 className="mainPageQuestionsLeftBlockTitle">
                lorem ipsum dolor sit amet
              </h2>
              <div className="mainPageQuestionsLeftBlockSign">+</div>
            </div>
            <svg
              width="631"
              height="1"
              viewBox="0 0 631 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 0.5H631" stroke="#EAEAEA" />
            </svg>
            <div className="mainPageQuestionsLeftBlock">
              <h2 className="mainPageQuestionsLeftBlockTitle">
                lorem ipsum dolor sit amet
              </h2>
              <div className="mainPageQuestionsLeftBlockSign">+</div>
            </div>
            <svg
              width="631"
              height="1"
              viewBox="0 0 631 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 0.5H631" stroke="#EAEAEA" />
            </svg>
            <div className="mainPageQuestionsLeftBlock">
              <h2 className="mainPageQuestionsLeftBlockTitle">
                lorem ipsum dolor sit amet
              </h2>
              <div className="mainPageQuestionsLeftBlockSign">+</div>
            </div>
            <svg
              width="631"
              height="1"
              viewBox="0 0 631 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 0.5H631" stroke="#EAEAEA" />
            </svg>
          </div>
        </div>
        <div className="mainPageQuestionsRight">
          <img className="mainPageQuestionsImage" src={questionsImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
