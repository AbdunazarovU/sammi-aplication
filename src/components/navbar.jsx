import { Link } from "react-router-dom"
import { logo1 } from "../constants"

const Navbar = () => {
  return (
    <div class="container d-flex flex-column flex-md-row align-items-center pt-3 pb-3 mb-4 border-bottom">
      <Link to={"/"}>
        <img width={"200px"} height={"60px"} style={{objectFit: "cover"}} src={logo1} alt="site logo" />
      </Link>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to={"/login"}>Login</Link>
        <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to={"/register"}>Register</Link>
      </nav>
    </div>
  )
}

export default Navbar