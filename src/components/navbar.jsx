import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logo } from "../constants"

const Navbar = () => {
  const { loggedIn, user } = useSelector(state => state.auth);

  return (
    <div className="container d-flex flex-column flex-md-row align-items-center pt-3 pb-3 mb-4 border-bottom">
      <Link to={"/"}>
        <img width={"200px"} height={"60px"} style={{objectFit: "cover"}} src={logo} alt="site logo" />
      </Link>

      <nav className="d-inline-flex align-items-center mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
            <p className="m-0 mx-3">{user.username}</p>
            <button className="btn btn-outline-danger">Logout</button>
          </>
        ) : (
          <>
            <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to={"/login"}>Login</Link>
            <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to={"/register"}>Register</Link>
          </>
        )}
      </nav>
    </div>
  )
}

export default Navbar