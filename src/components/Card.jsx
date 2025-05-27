import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <>
      <Link to={`/single/${data.id}`}>
        <div className="bg-white shadow-md rounded-lg p-4 transition transform hover:scale-105">
          <h3 className="text-lg font-bold">{data.bookName}</h3>
          <p className="text-gray-700">Author: {data.bookAuthor}</p>
          <p className="text-green-600 font-semibold mt-2">
            Rs. {data.bookPrice}
          </p>
        </div>
      </Link>
    </>
  );
};

export default Card;
