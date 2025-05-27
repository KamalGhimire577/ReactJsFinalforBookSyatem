import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/book");
      // Assuming backend sends data like: { data: [ {bookName, bookPrice, ...} ] }
      setBooks(response.data.datas);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 text-gray-700">
        <h2 className="text-2xl font-semibold mb-2 text-center">
          Available Books
        </h2>

        {/* Books Section */}
        <section className="p-6">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {books.map((book) => (
              <Card data={book} key={book.id} />
            ))}
           
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
