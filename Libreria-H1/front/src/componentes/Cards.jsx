import React from 'react'
import Card from '../components/Card'

const Cards = () => {
  
  const info = [
    {
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmFgAds9CacKw2uVa7yZIF9N-ug0Anvc9xg&usqp=CAU",
      titulo: "pinocho",
      autor: "alguien"
    },
    {
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmFgAds9CacKw2uVa7yZIF9N-ug0Anvc9xg&usqp=CAU",
      titulo: "pinocho",
      autor: "alguien"
    },
    {
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmFgAds9CacKw2uVa7yZIF9N-ug0Anvc9xg&usqp=CAU",
      titulo: "pinocho",
      autor: "alguien"
    },
    {
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmFgAds9CacKw2uVa7yZIF9N-ug0Anvc9xg&usqp=CAU",
      titulo: "pinocho",
      autor: "alguien"
    },
    {
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmFgAds9CacKw2uVa7yZIF9N-ug0Anvc9xg&usqp=CAU",
      titulo: "pinocho",
      autor: "alguien"
    },
    {
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmFgAds9CacKw2uVa7yZIF9N-ug0Anvc9xg&usqp=CAU",
      titulo: "pinocho",
      autor: "alguien"
    }
  ];
  
  return (
    <div className="container">
      <div className="row">
        {
          info.map((i) => {
            return (
              <div className="col">
                <Card imagen={i.imagen} titulo={i.titulo} autor={i.autor}/>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Cards