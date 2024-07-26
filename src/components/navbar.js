import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme='dark'>
      <div className="container">
        <Link className="navbar-brand" to="/">Movie App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/trending">TrendingMovie</Link>
            <Link className="nav-link" to="/trending/tv">TrendingTV</Link>
            <Link className="nav-link" to="/search">Search</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;