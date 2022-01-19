import React, { useContext } from 'react'
import Card from '../components/Card'
import { BookContext } from '../contexts/BookContext';

const Cards = () => {

  const { books } = useContext(BookContext);

  return (
    <div className="container">
      <div className="row">
        {
          books && books.map((i) => {
            return (
              <div className="col" key={i._id}>
                <Card imagen={i.imagen} titulo={i.titulo} autor={i.autor} id={i._id} />
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Cards
