const Navegacion = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            Logo
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <input type="text" placeholder="Titulo Pelicula" />
            </li>
            <li>
              <a href="sass.html">
                <i className="material-icons">search</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navegacion;
