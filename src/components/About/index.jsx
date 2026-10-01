import "./style.css";
import { useStrapi } from "../../hooks/useStrapi";
import { mediaUrl } from "../../api/strapi";
import CustomizeButton from "../CustomizeButton";
import { aboutPhoto } from "../../media/images";

const fallbackParagraphs = [
  { text: "Hi! My name’s [Insert Name], and I founded [Insert] in ____." },
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    text:
      "Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula.",
  },
  {
    text:
      "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.",
  },
  {
    text:
      "Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa at nibh.",
  },
  {
    text:
      "Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in sapien.",
  },
  { text: "Cras mattis varius mollis." },
];

const About = () => {
  const { data } = useStrapi("about-section?populate=*");
  const title = data?.title || "Be your best self.";
  const image = data?.image ? mediaUrl(data.image) : aboutPhoto;
  const buttonText = data?.buttonText || "Customize Your Outfit";
  const paragraphs = data?.paragraphs?.length
    ? data.paragraphs
    : fallbackParagraphs;

  return (
    <div className="about">
      <div className="aboutImageContainer">
        <img src={image} alt="Woman stretching in robe" className="aboutImage" />
      </div>
      <div className="aboutTextContent">
        <h2 className="aboutTextContentTitle">{title}</h2>
        <div className="aboutTextContentContainer">
          {paragraphs.map((paragraph, index) => (
            <p className={index === 0 ? "intro" : undefined} key={index}>
              {paragraph.text}
            </p>
          ))}
        </div>
        <CustomizeButton text={buttonText} />
      </div>
    </div>
  );
};

export default About;
