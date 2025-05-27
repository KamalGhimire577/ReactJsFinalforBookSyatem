const Form = ({type}) => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <form className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">
            {(type === "create" ? "Create a new" : "edit")} Book
          </h2>

          {/* Book Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="bookName">
              Book Name
            </label>
            <input
              type="text"
              id="bookName"
              name="bookName"
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Book Price */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="bookPrice">
              Book Price (Rs.)
            </label>
            <input
              type="number"
              id="bookPrice"
              name="bookPrice"
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Book Author */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="bookAuthor">
              Author Name
            </label>
            <input
              type="text"
              id="bookAuthor"
              name="bookAuthor"
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {(type === "create" ? "Add" : "edit")} Book
          </button>
        </form>
      </div>
    </>
  );
};
export default Form
