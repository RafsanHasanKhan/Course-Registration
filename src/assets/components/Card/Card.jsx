const Card = ({ card, handleAddToList }) => {
  const { imageURL, title, paragraph, price, time, dollarSign, img } = card;
  return (
    <div className="bg-white rounded-lg p-5 flex flex-col justify-center">
      <img src={imageURL} alt="" />
      <h3 className="font-bold text-lg my-2">{title}</h3>
      <p className="text-justify text-gray-500">{paragraph}</p>
      <div className="flex justify-between my-4 font-semibold text-gray-500">
        <span className="flex">
          <img className="me-2" src={dollarSign} alt="" />
          <span>Price: {price}</span>
        </span>

        <span className="flex">
          <img className="me-3" src={img} alt="" /> Credit: {time}
        </span>
      </div>
      <button
        onClick={() => handleAddToList(card)}
        className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold text-xl"
      >
        Select
      </button>
    </div>
  );
};

export default Card;
