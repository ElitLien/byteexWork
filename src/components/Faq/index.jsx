import { useState, Fragment } from "react";
import "./style.css";
import { questionsImage } from "../../media/images";

const faqAnswer =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.";

const faqItems = [
  { question: "lorem ipsum dolor sit amet", answer: faqAnswer },
  { question: "lorem ipsum dolor sit amet", answer: faqAnswer },
  { question: "lorem ipsum dolor sit amet", answer: faqAnswer },
  { question: "lorem ipsum dolor sit amet", answer: faqAnswer },
  { question: "lorem ipsum dolor sit amet", answer: faqAnswer },
  { question: "lorem ipsum dolor sit amet", answer: faqAnswer },
];

const divider = (
  <svg
    width="631"
    height="1"
    viewBox="0 0 631 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.5 0.5H631" stroke="#EAEAEA" />
  </svg>
);

const Faq = () => {
  const [openFaqs, setOpenFaqs] = useState([0]);

  const toggleFaq = (index) =>
    setOpenFaqs((open) =>
      open.includes(index) ? open.filter((i) => i !== index) : [...open, index]
    );

  return (
    <div className="questions">
      <div className="questionsLeft">
        <h1 className="questionsLeftTitle">Frequently asked questions.</h1>
        <div className="questionsLeftBlocks">
          {divider}
          {faqItems.map((item, index) => {
            const isOpen = openFaqs.includes(index);
            return (
              <Fragment key={index}>
                {isOpen ? (
                  <div className="questionsLeftFirstBlock">
                    <div className="questionsLeftFirstBlockInner">
                      <h2 className="questionsLeftBlockTitle">
                        {item.question}
                      </h2>
                      <p className="questionsLeftFirstBlockText">
                        {item.answer}
                      </p>
                    </div>
                    <div
                      className="questionsLeftFirstBlockSign"
                      onClick={() => toggleFaq(index)}
                    >
                      -
                    </div>
                  </div>
                ) : (
                  <div className="questionsLeftBlock">
                    <h2 className="questionsLeftBlockTitle">{item.question}</h2>
                    <div
                      className="questionsLeftBlockSign"
                      onClick={() => toggleFaq(index)}
                    >
                      +
                    </div>
                  </div>
                )}
                {divider}
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className="questionsRight">
        <img className="questionsImage" src={questionsImage} alt="" />
      </div>
    </div>
  );
};

export default Faq;
