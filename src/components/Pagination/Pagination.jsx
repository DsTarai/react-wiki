import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = ({ info, pageNumber, setPagenumber }) => {
  const [width, setwidth] = useState(window.innerWidth);
  let updateDimension = () => {
    setwidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);
  return (
    <>
      <style jsx>{`
        @media (max-width: 786px) {
          .next,
          .prev {
            display: none;
          }
        }
      `}</style>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName={`${styles.asdf} btn btn-primary prev`}
        nextClassName={`${styles.asdf} btn btn-primary next`}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        onPageChange={(e) => {
          setPagenumber(e.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </>
  );
};

export default Pagination;
