import css from "../ErrorMessage/ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div>
      <p className={css.error}>
        Oops! Something went wrong! Please try again later.
      </p>
    </div>
  );
};

export default ErrorMessage;
