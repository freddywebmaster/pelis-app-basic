import { useContext, useEffect } from "react";
import PeliculasContext from "../context/peliculasContext";
import Card from "./Card";

const Peliculas = () => {
  const peliculasContext = useContext(PeliculasContext);
  const { peliculas, paginaSiguiente, paginaAnterior, limpiarPeliSelect } = peliculasContext;

  useEffect(()=>{
    limpiarPeliSelect();
    // eslint-disable-next-line
  }, [])
  
  return (
    <div className="container">
      {(peliculas === undefined) ? null : (
          (peliculas.length === 0) ? null :
        <>
          <h2>Peliculas</h2>
          <div className="grid">
            {
                peliculas.map((peli, index) => (
                  <Card key={index} pelicula={peli} />
                ))
            }
          </div>
          <div className="botones">
            <button
              className={"waves-effect waves-light blue darken-4 btn"}
              onClick={paginaAnterior}
            >
              Anterior
            </button>

            <button
              className={"waves-effect waves-light blue darken-4 btn"}
              onClick={paginaSiguiente}
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Peliculas;
