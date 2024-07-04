import { useState } from "react";
import CardItem from "../Components/CardItem";
import Sampledata from "../sampleData";

function CardPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="App">
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
