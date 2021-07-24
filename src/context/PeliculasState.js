import { useState } from 'react';
import peliculasContext from './peliculasContext';
import clienteAxios from '../config/axios';

const PeliculasState = (props) => {
    const initialState = {
        busqueda: '',
        peliculas: [],
        totalResults: null,
        apiKey: "51bfe506",
        pageActual: 1,
        peliSeleccionada: null
    }

    const [state, setState] = useState(initialState);

    const buscarPorTitulo = async (titulo, newSearch) =>{
        try {
            if (newSearch){
                const respuesta = await clienteAxios.get(`?s=${titulo}&apikey=${state.apiKey}&page=1`);
                setState({
                    ...state,
                    pageActual: 1,
                    busqueda: titulo,
                    peliculas:respuesta.data.Search,
                    totalResults: Math.round(Number(respuesta.data.totalResults/10))
                });
            }else{
                const respuesta = await clienteAxios.get(`?s=${titulo}&apikey=${state.apiKey}&page=${state.pageActual}`);
                setState({
                    ...state,
                    busqueda: titulo,
                    peliculas:respuesta.data.Search,
                    totalResults: Math.round(Number(respuesta.data.totalResults/10))
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    const paginaSiguiente = () =>{
        if(state.pageActual < state.totalResults){
            window.scroll({
                top: 10,
                behavior: 'smooth'
            });
            setState({
                ...state,
                pageActual: state.pageActual +=1,
            })
            buscarPorTitulo(state.busqueda, false);
        }else{
            return alert('Ultima Pagina alcanzada')
        }
    }

    const paginaAnterior = () =>{
        if(state.pageActual > 1){
            window.scroll({
                top: 10,
                behavior: 'smooth'
            });
            setState({
                ...state,
                pageActual: state.pageActual -=1
            })
            buscarPorTitulo(state.busqueda, false);
        }else{
            return alert('primera Pagina alcanzada')
        }
    }

    const showInfoPelicula = async (id) =>{
        const respuesta = await clienteAxios.get(`?i=${id}&plot=full&apikey=${state.apiKey}`);
        setState({
            ...state,
            peliSeleccionada: respuesta.data
        })
    }

    const limpiarPeliSelect = () =>{
        setState({
            ...state,
            peliSeleccionada: null
        })
    }

    return ( 
        <peliculasContext.Provider
            value={{
                peliculas: state.peliculas,
                busqueda: state.busqueda,
                peliSeleccionada: state.peliSeleccionada,
                buscarPorTitulo,
                paginaSiguiente,
                paginaAnterior,
                showInfoPelicula,
                limpiarPeliSelect
            }}
        >
            {props.children}
        </peliculasContext.Provider>
     );
}
 
export default PeliculasState;