import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h2>Error occurred!</h2>
      <p>{err?.status || "Unknown error occurred"}</p>
    </div>
  );
};

export default Error;
