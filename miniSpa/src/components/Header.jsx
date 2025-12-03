import { NavLink, Link } from "react-router";

const Header = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <div className="container">
      <Link className="navbar-brand fw-bold" to="/">PokéSPA</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/entities">Pokemons</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contacto</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
