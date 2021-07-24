import { useState ,useContext } from 'react';
import PeliculasContext from '../context/peliculasContext';

const Header = () => {

    const [Busqueda, setBusqueda] = useState('')

    const peliculasContext = useContext(PeliculasContext);
    const { buscarPorTitulo, busqueda} = peliculasContext;

    const onBusquedaChange = (e) =>{
        setBusqueda(e.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(Busqueda.trim() === ''){
            alert('Escribe un titulo');
            return;
        }
        if(Busqueda !== busqueda){
            buscarPorTitulo(Busqueda, true);
        }
    }

  return (
    <div className="blue darken-4">
      <div className="container header">
        <div className="header-text row">
          <h1 className="col s12 blue-text text-lighten-5">
            Busca <span className="blue-text lighten-2-text">Peliculas</span></h1>
          <form onSubmit={onSubmit} className="search_box col s12">
            <input
            className="white-text"
              type="text"
              name="busqueda"
              placeholder="Buscar Pelicula"
              onChange={onBusquedaChange}
              value={Busqueda}
            />
            <button
                type="submit"
                className="waves-effect waves-light btn">
              <i className="material-icons">search</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
