import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

const Single = () => {
  const navigate=useNavigate()
  const { id } = useParams();
  const [book, setBook] = useState(null);

  const fetchBook = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/book/${id}`);
      setBook(response.data.data.datas);
    } catch (error) {
      console.error("Error fetching single book:", error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, [id]);
  const deletebooks=async()=>{
 const respose =await axios.delete(`http://localhost:5000/api/book/${id}`);
 if(respose.status===200){
  alert ("your book deleted sucessfully!!")
  navigate("/")
  }
  else{
    alert("someyhing went wrong")
  }}
  if (!book) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-700">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-6 space-y-4 transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold text-gray-900">{book.bookName}</h3>
          <p className="text-gray-600">
            Author:{" "}
            <span className="font-medium text-gray-800">{book.bookAuthor}</span>
          </p>
          <p className="text-green-600 font-semibold text-lg">
            Price: Rs. {book.bookPrice}
          </p>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition">
            Add to Cart
          </button>

          <div className="flex justify-between gap-4">
            <button
              className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md font-medium transition shadow-sm"
              onClick={deletebooks}
            >
              Delete
            </button>
            <Link
              to="/edit"
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md font-medium transition shadow-sm"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
