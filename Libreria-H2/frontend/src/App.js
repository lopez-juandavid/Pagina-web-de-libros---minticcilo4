import { BookContext } from "./contexts/BookContext";
import { useState } from "react";
import AppRouter from "./routes/AppRouter";
import "./components/styles/Navbar.css";
import "./components/styles/General.css";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      <AppRouter />
    </BookContext.Provider>
  );
}

export default App;
