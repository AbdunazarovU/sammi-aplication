import { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
  const { error } = useSelector((state) => state.auth);

  const errorMessege = useCallback(() => {
    return Object.keys(error).map((name) => {
      const msg = error[name].join(", ");
      return `${name} - ${msg}`;
    });
  }, [error]);

  console.log(error !== null && errorMessege());

  return (
    error !== null &&
    errorMessege().map(error => (
      <div key={error} className="alert alert-danger m-1 p-1 text-start" role="alert">
        {error}
      </div>
    ))
  );
};

export default ValidationError;
