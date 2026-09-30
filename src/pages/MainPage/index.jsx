import "./style.css";

import Notification from "../../components/Notification";
import Hero from "../../components/Hero";
import AsSeenIn from "../../components/AsSeenIn";
import Loungewear from "../../components/Loungewear";
import About from "../../components/About";
import Comfort from "../../components/Comfort";
import Reviews from "../../components/Reviews";
import Faq from "../../components/Faq";
import GreenImpact from "../../components/GreenImpact";
import Discover from "../../components/Discover";

const MainPage = () => (
  <div className="mainPage">
    <Notification />
    <Hero />
    <AsSeenIn />
    <Loungewear />
    <About />
    <Comfort />
    <Reviews />
    <Faq />
    <GreenImpact />
    <Discover />
  </div>
);

export default MainPage;
