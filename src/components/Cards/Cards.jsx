import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.css";

const Cards = ({ results, page }) => {
  let display;
  console.log(results);
  if (results) {
    display = results.map((x) => {
      let { id, name, image } = x;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.Cards} d-flex justify-content-center flex-column`}
          >
            <img src={image} alt="" className="img-fluid" />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-4">{x.location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (x.status === "Dead") {
              return (
                <div
                  className={`${styles.badge} bg-danger badge position-absolute`}
                >
                  {x.status}
                </div>
              );
            } else if (x.status === "Alive") {
              return (
                <div
                  className={`${styles.badge} bg-success badge position-absolute`}
                >
                  {x.status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} bg-secondary badge position-absolute`}
                >
                  {x.status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "no data found ";
  }
  return <>{display}</>;
};

export default Cards;
