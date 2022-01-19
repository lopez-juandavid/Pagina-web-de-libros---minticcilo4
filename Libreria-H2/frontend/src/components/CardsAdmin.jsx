import React, { useContext } from 'react'
import CardAdmin from '../components/CardAdmin'
import { BookContext } from '../contexts/BookContext';

const CardsAdmin = () => {

  const { books } = useContext(BookContext);

  return (
    <div className="container">
      <div className="row">
        {
          books && books.map((i) => {
            return (
              <div className="col" key={i._id}>
                <CardAdmin imagen={i.imagen} titulo={i.titulo} autor={i.autor} _id={i._id}/>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default CardsAdmin
