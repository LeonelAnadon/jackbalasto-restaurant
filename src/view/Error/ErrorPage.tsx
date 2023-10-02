import { useRouteError } from "react-router-dom";
import styles from "./errorpage.module.scss";

const ErrorPage = () => {
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <div className={styles.container}>
      <h1>Oops!</h1>
      <p>
        Lamentamos los inconvenientes, se produjo un error durante la carga de
        la página.
      </p>
      <p>
        <i>
          {(error as { statusText?: string })?.statusText ??
            (error as Error)?.message}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
