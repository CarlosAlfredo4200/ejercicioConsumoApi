import React, { useState} from "react";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Link } from "react-router-dom";
import Editar from "../Editar";

const LitarLibros = ({ book, books, dato, setNuevaLista }) => {

  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };

    fetch("http://localhost:9000/delete/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setNuevaLista(true);
  };

  // Actualizar
  let { titulo, autor, edicion } = book;
  

 

  

  return (
    <div className="container  col-span-3">
      <h1 className=" text-4xl text-white mb-4">Lista de libros:</h1>
      <table className=" bg-[#374151] text-yellow-200 opacity-80  ">
        <thead className=" ">
          <tr className="border border-gray-300 ">
            <th className="border-x-gray-500 py-4 px-4 opacity-100">Id</th>
            <th className="border-x-gray-600 py-4 px-4">Nombre del Libro</th>
            <th className="border-x-gray-600 py-4 px-4">Autor</th>
            <th className="border-x-gray-600 py-4 px-4">Edición</th>
            <th className="border-x-gray-600 py-4 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {books.map((books) => (
            <tr
              key={books.id}
              className="text-slate-50 border border-gray-600 hover:bg-slate-600 hover:text-yellow-300 transition duration-300"
            >
              <td className="border-x-gray-600 py-4 px-4 ">{books.id}</td>
              <td className="border-x-gray-600 py-4 px-4">{books.titulo}</td>
              <td className="border-x-gray-600border-x-gray-600 py-4 px-4">
                {books.autor}
              </td>
              <td className="flex justify-center border-x-gray-600   py-6 px-4">{`${books.edicion} Ed`}</td>
              <td className="border-x-gray-600 py-4 px-4">
                <div>
                  <Link to="/edit"  >
                  <ModeEditIcon
                    className="text-[#be185d]"
                    fontSize="large"
                   
                  />
                  </Link>
                 
                  <DeleteSweepIcon
                    color="primary"
                    fontSize="large"
                    onClick={() => handleDelete(books.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LitarLibros;
