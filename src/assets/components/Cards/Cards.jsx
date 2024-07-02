import { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = ({ handleAddToList, remaining }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {cards.map(card => (
        <Card
          key={card.id}
          card={card}
          handleAddToList={handleAddToList}
        ></Card>
      ))}
    </div>
  );
};

export default Cards;
