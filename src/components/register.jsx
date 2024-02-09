import { useState } from "react";
import { Input } from "../ui";

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  return (
    <div className="text-center w-25 mx-auto mt-5">
      <main class="form-signin w-100 m-auto">
        <form>
          <h1 class="h3 mb-3 fw-normal">Please register</h1>

          <Input label={"Usarname"} state={name} setState={setName} />
          <Input type="email" label={"Email addres"} state={email} setState={setEmail} />
          <Input type="password" label={"Password"} state={pass} setState={setPass} />

          <button class="btn btn-primary w-100 py-2 mt-2" type="submit">
            Register
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
