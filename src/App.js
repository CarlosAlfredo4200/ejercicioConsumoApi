//import Prueba from './components/pages/prueba.jsx'
import React, { useState, useEffect } from "react";
 
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import LitarLibros from "./components/pages/LitarLibros";
import Formulario from "./components/Formulario";
import Editar from "./components/Editar";


function App() {
   
  //state para listar
  const [books, setBooks  ] = useState([]);
   

  //state para la modificacion de la tabla
  const [nuevaLista, setNuevaLista] = useState(false)
  //state para agregar libro
  const [book, setBook] = useState({
    titulo:'',
    autor:'',
    edicion:0,
  })
  

  //Obtenerlos datos para la tabla y listarlos

   useEffect(() => {
    const getBooks = () =>{
      fetch('http://localhost:9000/listar')
      .then(respuesta => respuesta.json())
      .then(respuesta =>setBooks(respuesta))
    }
    getBooks()
    setNuevaLista(false)
   }, [nuevaLista])

   

  return (
    <div className="bg-[url('https://guiauniversitaria.mx/wp-content/uploads/2020/04/Conoce-cuales-son-los-libros-mas-leidos-en-el-mundo.jpg')]  
     bg-center bg-no-repeat bg-cover  ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar brand={"HOME"} />}>
            <Route
              index
              element={
                <div className="grid grid-cols-1 sm:grid-cols-5  px-4 mt-4">
                  <Formulario   book={book} setBook={setBook} />
                  <LitarLibros   
                  books={books} 
                  book={book}
                  setBooks ={setBook}
                  titulo={'Lista de libros'} 
                  nuevaLista={nuevaLista} 
                  setNuevaLista={setNuevaLista} />
                </div>
              }
            />
            <Route path="/user" element={<div className="text-center text-6xl">User</div>} />
            <Route path="/about" element={<div className="text-center text-6xl"> About</div>} />
            <Route path="/edit" element={<div className="text-center text-6xl"> <Editar   books={books} setBooks ={setBook}  brand={"HOME"}  /> </div>} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
