import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logo } from "../constants"
import { removeItem } from "../helpers/persistance-storage";
import { logoutUser } from "../slice/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loggedIn, user } = useSelector(state => state.auth);

  const logoutHandler = () => {
    dispatch(logoutUser())
    removeItem("token")
    navigate("/login")
  }

  return (
    <div className="container d-flex flex-column flex-md-row align-items-center pt-3 pb-3 mb-4 border-bottom">
      <Link to={"/"}>
        <img width={"200px"} height={"60px"} style={{objectFit: "cover"}} src={logo} alt="site logo" />
      </Link>

      <nav className="d-inline-flex align-items-center mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
            <p className="m-0 mx-3">{user.username}</p>
            <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to={"/create-article"}>Create</Link>
            <button className="btn btn-outline-danger" onClick={logoutHandler} >Logout</button>
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