import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setPagenumber, setSearch }) => {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 my-5">
      <input
        onChange={(e) => {
          setPagenumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        type="text"
        className={styles.input}
      />
      <button
        onClick={(e) => {
          e = e.preventDefault();
        }}
        className={`${styles.btn} btn btn-primary`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
