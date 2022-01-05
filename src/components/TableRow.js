import React from 'react';

const TableRow = ({title,length,rating,genre,awards}) => {
    return (
        <tr>
        <td>{title}</td>
        <td>{length}</td>
        <td>{rating}</td>
       {
        genre ? <td>{genre.name}</td> : <td className="text-danger">Sin género</td>
       }   
        <td>{awards}</td>

      </tr>
    );
}

TableRow.defaultProps = {
  length : "Indefinido",
  genre : "Sin género",
  awards : 0
}

export default TableRow;
