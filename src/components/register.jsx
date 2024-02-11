import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Input } from "../ui";
import { registerUserStart } from "../slice/auth";

const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const { isLoading } = useSelector(state => state.auth)

  const registerHandler = e => {
    e.preventDefault()
    dispatch(registerUserStart())
  }

  return (
    <div className="text-center w-25 mx-auto mt-5">
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please register</h1>

          <Input label={"Usarname"} state={name} setState={setName} />
          <Input type="email" label={"Email addres"} state={email} setState={setEmail} />
          <Input type="password" label={"Password"} state={pass} setState={setPass} />

          <button className="btn btn-primary w-100 py-2 mt-2" disabled={isLoading} onClick={registerHandler} type="submit">
            {isLoading? "loading..." : "Register"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
