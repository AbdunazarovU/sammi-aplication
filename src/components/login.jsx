import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Input } from "../ui";
import { loginUserStart } from "../slice/auth";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const { isLoading } = useSelector(state => state.auth);

  const loginHandler = e => {
    e.preventDefault()
    dispatch(loginUserStart())
  }

  return (
    <div className="text-center w-25 mx-auto mt-5">
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please login</h1>

          <Input type="email" label={"Email addres"} state={email} setState={setEmail} />
          <Input type="password" label={"Password"} state={pass} setState={setPass} />

          <button className="btn btn-primary w-100 py-2 mt-2" disabled={isLoading} onClick={loginHandler} type="submit">
            {isLoading? "loading..." : "Login"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
