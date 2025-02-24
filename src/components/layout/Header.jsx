import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <header className="section-navbar">
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/">
              <p>MovieFlix</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="movie"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"}
                >
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                Contact
                </NavLink>
                
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

