import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function HomePage() {
  // States that hold the list of books and search query
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  return;

  //Fetch books from backend API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5063/api/books");
        const data = await response.json();
        setBooks(data);
        setFilteredBooks(data); //Initialize the filtered books
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);
}
