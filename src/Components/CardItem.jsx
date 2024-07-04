import { useState } from "react";
import "./cardItem.css";

export default function CardItem({
  title,
  imgSrc,
  imgAlt,
  description,
  author,
  date,
  isActive,
  onView,
  onClose,
}) {
  const [count, setCount] = useState(-1);
  const [colour, setColour] = useState("white");
  const colours = ["blue", "red", "green", "yellow", "orange", "white"];

  const handleColourClick = () => {
    setCount((prevCount) => {
      const newCount = prevCount >= colours.length - 1 ? 0 : prevCount + 1;
      setColour(colours[newCount]);
      return newCount;
    });
  };

  return (
    <div className="card-container">
      <div className="card-item" style={{ backgroundColor: colour }}>
        <h1>{title}</h1>
        {!isActive && <button onClick={onView}>View</button>}
        {isActive && (
          <div>
            <img src={imgSrc} alt={imgAlt} />
            <p>{description}</p>
            <h5>{author}</h5>
            <h5>{date}</h5>
            <button onClick={handleColourClick}>Change Colour</button>
            <button onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
