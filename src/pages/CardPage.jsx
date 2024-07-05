import { useState, useEffect, useRef } from "react";
import CardItem from "../Components/CardItem";
import Sampledata from "../sampleData";

function CardPage() {
  // REF FOR CARD CONTAINER
  const containerRef = useRef(null);

  // FUNCTION TO HANDLE THE OUTSIDE CLICK AND CLOSE THE CARD COMPONENT
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    // CLEAN UP FUNCTION TO GET RID OF CLICK EVENT WHEN NOT ON THIS PAGE
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  // ACTIVE INDEX STATE
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="App" ref={containerRef}>
      {Sampledata.map((item, index) => (
        <CardItem
          key={index}
          title={item.title}
          imgSrc={item.imgSrc}
          imgAlt={item.imgAlt}
          description={item.description}
          author={item.author}
          date={item.date}
          isActive={activeIndex === index}
          onView={() => setActiveIndex(index)}
          onClose={() => setActiveIndex(null)}
        />
      ))}
    </div>
  );
}

export default CardPage;
