import React, { useContext } from 'react'
import PeliculasContext from '../context/peliculasContext';
import {Link} from 'react-router-dom';

const PeliculaInfo = () => {
    const peliculaContext = useContext(PeliculasContext);
    const {peliSeleccionada} = peliculaContext;

    if(peliSeleccionada===null) return(
        <div>
            <div class="lds-hourglass"></div>
            <h3>Algo Fallo</h3>
            <p>No se encontro nada o Se Recargo la pagina</p>
            <Link to={'/'}>Regresar a Inicio</Link>
        </div>
    );
  

    const {Actors, Country, Director, Genre, Plot, Poster, Runtime, Title, Type, Year, imdbRating, imdbVotes} = peliSeleccionada;
    return ( 
        <div className="peli-info row">
            <div className="col s12 m12 l6 blue darken-4">
                <h2 className="info-title blue-text text-lighten-5 upper">{Title}</h2>
                <img className="mb-2 shadow" src={Poster} alt={Title} />
            </div>
            <div className="col col-info s12 m12 l6">
                <div className="infobox2">
                    <h2>Informacion</h2>
                </div>
                <div className="infobox1">
                    <p><b>Duración</b>: {Runtime}</p>
                    <p><b>Tipo</b>: {Type}</p>
                    <p><b>Año</b>: {Year}</p>
                    <p><b>Genero</b>: {Genre}</p>
                </div>
                <div className="infobox2">
                    <p><b>Descripcion</b>: {Plot}</p>
                </div>
                <div className="infobox1">
                    <p><b>Actores</b>: {Actors}</p>
                    <p><b>Director</b>: {Director}</p>
                </div>
                <div className="infobox1">
                    <p><b>Pais</b>: {Country}</p>
                    <p><b>Calificacion</b>: {imdbRating}</p>
                    <p><b>Votos</b>: {imdbVotes}</p>
                </div>
            </div>
            <Link className={"waves-effect waves-light blue darken-4 btn"} to={"/"}>Regresar</Link>
        </div>
     );
}
 
export default PeliculaInfo;