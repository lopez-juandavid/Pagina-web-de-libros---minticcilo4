import React, { useContext, useState, useEffect } from "react";
import Card from "../components/Card";
import { BookContext } from "../contexts/BookContext";

const Cards = ({ busqueda = "" }) => {
  const { books } = useContext(BookContext);
  const [booksS, setBooksS] = useState([]);

  useEffect(() => {
    setBooksS(
      books.filter((book) => {
        const parts = busqueda
          .trim()
          .toLowerCase()
          .split(" ")
          .filter((i) => i !== "");
        const empty = parts.length === 0;
        if (empty) {
          return true;
        }
        for (let i of parts) {
          if (
            book.titulo.toLowerCase().includes(i) ||
            book.autor.toLowerCase().includes(i)
          ) {
            return true;
          }
        }
        return false;
      })
    );
  }, [busqueda, books]);

  return (
    <div className="container mt-4">
      {!booksS.length && (
        <div className="container text-center fs-4 user-select-none">
          😢
          <span className="mt-2 fw-bold text-shadow c-amarillo">
            ¡Sin Resultados!
          </span>
          😢
        </div>
      )}
      <div className="row">
        {booksS &&
          booksS.map((i) => {
            return (
              <div className="col" key={i._id}>
                <Card
                  imagen={i.imagen}
                  titulo={i.titulo}
                  autor={i.autor}
                  id={i._id}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cards;
