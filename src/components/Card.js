import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import PeliculasContext from "../context/peliculasContext";

const Card = ({ pelicula }) => {
  //id imdbID
  const { Poster, Title, Type, Year, imdbID } = pelicula;

  const peliculasContext = useContext(PeliculasContext);
  const {showInfoPelicula} = peliculasContext;

  const showFullInfo = (id) =>{
    showInfoPelicula(id)
    window.scroll({
      top: 10,
      behavior: 'smooth'
    });
  }

  return (
    <div className="grid-item col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          {
            (Poster==="N/A") ? <img src="/img/img-error.jpg" alt="error" /> :
            <img src={Poster} alt={"image" + Title}/>
          }
          <Link
            onClick={()=> showFullInfo(imdbID)}
            to={`/pelicula/${imdbID}`}
            className="btn-floating halfway-fab waves-effect waves-light blue"
          >
            <i className="material-icons">slideshow</i>
          </Link>
        </div>
        <div className="card-content">
          <span className="card-title">{Title}</span>
          <b>Categoria: <span className="blue-text lighten-2-text">{Type}</span></b><br/>
          <b>Año: <span className="blue-text lighten-2-text">{Year}</span></b>
        </div>
      </div>
    </div>
  );
};

export default Card;
