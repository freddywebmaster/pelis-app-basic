import BuscarPeliculas from './pages/BuscarPeliculas';
import PeliculasState from './context/PeliculasState';
import PeliculaInfo from './pages/PeliculaInfo';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <PeliculasState>
      <Router>
        <Switch>
          <Route exact path={"/"} component={BuscarPeliculas} />
          <Route exact path={"/pelicula/:id"} component={PeliculaInfo} />
        </Switch>
      </Router>
    </PeliculasState>
  );
}

export default App;
