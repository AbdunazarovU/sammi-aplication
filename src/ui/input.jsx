const Input = ({type = "text", label, state, setState}) => {
  return (
    <div class="form-floating">
      <input
        type={type}
        class="form-control"
        id="floatingInput"
        placeholder={label}
        value={state}
        onChange={e => setState(e.target.value)}
      />
      <label for="floatingInput">{label}</label>
    </div>
  );
};

export default Input;
