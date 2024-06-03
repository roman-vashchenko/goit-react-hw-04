import { Formik, Form, Field } from "formik";
import css from "../SearchBar/SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const initialValues = {
  searchQuery: "",
};

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, action) => {
    if (values.searchQuery.trim() === "") {
      toast.error("You must enter text to search for images.");
      return;
    }
    onSubmit(values.searchQuery);
    action.resetForm();
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <header className={css.header}>
          <Form>
            <Field
              name="searchQuery"
              className={css.field}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={css.btn} type="submit">
              Search
            </button>
          </Form>
        </header>
      </Formik>
      <Toaster position="top-right" />
    </>
  );
};

export default SearchBar;
