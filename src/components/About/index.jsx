import "./style.css";
import CustomizeButton from "../CustomizeButton";
import { aboutPhoto } from "../../media/images";

const About = () => (
  <div className="about">
    <div className="aboutImageContainer">
      <img
        src={aboutPhoto}
        alt="Woman stretching in robe"
        className="aboutImage"
      />
    </div>
    <div className="aboutTextContent">
      <h2 className="aboutTextContentTitle">Be your best self.</h2>
      <div className="aboutTextContentContainer">
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
          placerat volutpat ligula, ac consectetur felis varius non. Aliquam a
          nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu
          congue, faucibus libero nec, placerat ligula.
        </p>
        <p>
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
        </p>
        <p>
          Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis,
          sapien eget lobortis fringilla, eros ipsum tristique tellus, ac
          convallis urna massa at nibh.
        </p>
        <p>
          Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod
          leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in
          sapien.
        </p>
        <p>Cras mattis varius mollis.</p>
      </div>
      <CustomizeButton />
    </div>
  </div>
);

export default About;
