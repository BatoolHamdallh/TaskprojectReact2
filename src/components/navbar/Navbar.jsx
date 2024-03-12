import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/categories' >Categories</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link " aria-disabled="true" to='/products'>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "  aria-disabled="true" to='/cart'>Cart</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link "  aria-disabled="true" to='/signin'>Sign In</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link "  aria-disabled="true" to='/signup'>Sign Up</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav> */}
      <header>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.row1}>
              <div className={styles.logo}>
                {/* <img src="assets/image/headerImg/Logo.svg" alt="logo" /> */}
              </div>
              <nav>
                <ul>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/categories">
                      Categories
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link " to="/products">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/cart">
                      Cart
                    </Link>
                  </li>
                  {/* <li className="nav-item">
        <Link className="nav-link "   to='/signin'>Sign In</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link "   to='/signup'>Sign Up</Link>
        </li> */}
                </ul>
              </nav>
            </div>
            <div className={styles.buttons}>
              <Link to="/signin" className={styles.signup}>
                Sign In
              </Link>
              <Link to="/signup" className={styles.login}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
