import "./style.css";

const CarouselDots = ({ count, active, onSelect }) => (
  <div className="carouselDots">
    {Array.from({ length: count }).map((_, index) => (
      <span
        key={index}
        className={
          index === active ? "carouselDot carouselDotActive" : "carouselDot"
        }
        onClick={() => onSelect(index)}
      />
    ))}
  </div>
);

export default CarouselDots;
