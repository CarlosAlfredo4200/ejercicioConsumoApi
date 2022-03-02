import React, { useState } from "react";
import Button from "./Button";
import Input from "./input";
import Titulo from "./Titulo";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

const Formulario = ({ dato, book, setBook }) => {
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  let { titulo, autor, edicion } = book;

  const handleSubmit = () => {
    //validación de los datos
    edicion = parseInt(edicion, 10);

    if (titulo === "" || autor === "" || edicion <= 0) {
      alert("Todos los campos son obligatorios");
      return;
    }
    //consulta
    const requestInit = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(book),
    };

    fetch("http://localhost:9000/add", requestInit)
      .then((respuesta) => respuesta.text())
      .then((respuesta) => console.log(respuesta));

    //reiniciando state del libro
    setBook({
      titulo: "",
      autor: "",
      edicion: "",
    });
  };

  return (
    <div className="col-span-2">
      <Titulo titulo={"Ingresar nuevo libro:"} />
      <form onSubmit={handleSubmit}>
        <div className="  justify-center items-center m-4 ">
          <div className=" items-center m-5  ">
            <label htmlFor="" className="relative">
              <input
                type="text"
                name="titulo"
                onChange={handleChange}
                value={titulo}
                className="h-14 w-full   text-sm bg-slate-300 opacity-30 border-solid border-2 border-black rounded-lg 
              border-white border-opacity-50 outline-none focus:border-blue-500 
              focus:text-white transition duration-500 px-6"
              />
              <span
                className="text-lg text-slate-50 text-opacity-90 absolute 
                left-0 mt-2 mx-6 px-1 transition duration-200 input-text opacity-50"
              >
                Nombre
              </span>
             

                <LibraryBooksIcon
                 className="absolute insert-x-0 right-0  my-3 mr-3  place-content-end"
                 fontSize="large" />

            </label>
          </div>

          <div className=" items-center m-5  ">
            <label htmlFor="" className="relative">
              <input
                type="text"
                name="autor"
                onChange={handleChange}
                value={autor}
                className="h-14 w-full   text-sm bg-slate-300 opacity-30  border-solid border-2 border-black rounded-lg 
              border-white border-opacity-50 outline-none focus:border-blue-500 
              focus:text-white transition duration-500 px-6"
              />
              <span
                className="text-2xl text-white text-opacity-90 absolute 
              left-0 mt-2 mx-6 px-1 transition duration-200 input-text"
              >
                Autor
              </span>
              <AccountCircleOutlinedIcon
                className="absolute insert-x-0 right-0  my-3 mr-3  place-content-end"
                fontSize="large"
              />
            </label>
          </div>

          <div className=" items-center m-5  ">
            <label htmlFor="" className="relative">
              <input
                type="text"
                name="edicion"
                onChange={handleChange}
                value={edicion}
                className="h-14 w-full   text-lg bg-slate-300 opacity-30  border-solid border-2 border-black  rounded-lg
              border-white border-opacity-50 outline-none focus:border-blue-500 
              focus:text-white transition duration-500 px-6"
              />
              <span
                className="text-2xl text-white text-opacity-90 absolute 
              left-0 mt-2 mx-6 px-1 transition duration-200 input-text"
              >
                Edición
              </span>
              <FormatListNumberedIcon 
                className="absolute insert-x-0 right-0  my-3 mr-3  place-content-end"
                fontSize="large" />
            </label>
          </div>

          <div className="mx-4 w-full flex items-center  ">
            <Button type="submit" dato={"Agregar"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
