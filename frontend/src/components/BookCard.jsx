export default function BookCard() {
  return (
    <div className="border rounded-lg p4">
      {/* <h2 className="font-bold">{book.title}</h2> */}
      {/* <p>{book.author}</p> */}
      {/* <p>{book.price}</p> */}
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
        Reserve
      </button>
    </div>
  );
}
