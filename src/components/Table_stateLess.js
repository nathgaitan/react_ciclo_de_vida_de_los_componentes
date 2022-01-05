import React from "react";
import TableRow from "./TableRow";

const Table = () => {
    let data = [
        {
           title: "Billy Elliot",
           length: 123,
           rating: 5,
           genre: ["Drama", "Comedia"],
           awards: 2
        },
        {
            title: "Alicia en el pais de las maravillas",
            length: 142,
            rating: 4.8,
            genre: ["Drama","Accion", "Comedia"],
            awards: 3
         }
    ]
    return(
        <div className="container bg-white">
        <table className="table table-bordered">
        <thead>
            <tr>
                <th scope="col">Titulo</th>
                <th scope="col">Duración</th>
                <th scope="col">Rating</th>
                <th scope="col">Género</th>
                <th scope="col">Premios</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item, index) => {
                    return(
                        <TableRow
                        key={item.title + index}
                        title={item.title}
                        lenght={item.length}
                        rating={item.rating}
                        genre={item.genre}
                        awards={item.awards}
                        />
                    )
                })
            }
            
        </tbody>
        </table>
        </div>
    );
}

export default Table;