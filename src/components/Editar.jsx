 
import { Link } from "react-router-dom";

const Editar = () => {
 
   
  

  return (
    <div className="h-screen flex   justify-center">
      <div className="mt-5 border rounded-lg p-5 h-5/5">
        <div className="flex flex-row text-4xl text-white">Editar libros</div>

        <div>
          <label htmlFor="text" className="text-xl mt-4 flex flex-row  text-gray-500 opacity-80">Id</label>
          <div>
            <input
              type="text"
              className="flex flex-row mt-0   w-96 border bg-inherit focus:ring  focus:ring-blue-800  text-slate-50 px-5 py-3   rounded-lg  text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="text" className="text-xl mt-4 flex flex-row  text-gray-500 opacity-80">Nombre</label>
          <div>
            <input
              type="text"
              className="flex flex-row mt-0   w-96 border bg-inherit focus:ring  focus:ring-blue-800  text-slate-50 px-5 py-3   rounded-lg  text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="text" className="text-xl mt-4 flex flex-row text-gray-500 opacity-80">Autor</label>
          <div>
            <input
              type="text"
              className="flex flex-row mt-0  w-96 border bg-inherit focus:ring  focus:ring-blue-800 text-slate-50 px-5 py-3   rounded-lg  text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="text" className="text-xl mt-4 flex flex-row  text-gray-500 opacity-80">Edición</label>
          <div>
            <input
              type="text"
              className="flex flex-row mt-0  w-96 border bg-inherit focus:ring  focus:ring-blue-800 text-slate-50 px-5 py-3   rounded-lg  text-sm"
            />
          </div>
        </div>
    <div className="flex flex-col m-6  ">
      <button className="bg-inherit border px-4 py-2 rounded-lg mx-20  text-white text-lg  ">Actualizar</button>
      
        
         
      <Link to="/" className="bg-inherit border px-4 py-2 rounded-lg mx-20 mt-2 text-white text-lg">{}</Link>
        
    </div>
      </div>

    </div>
  );
};

export default Editar;
