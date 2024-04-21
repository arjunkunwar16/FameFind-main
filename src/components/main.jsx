import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h1 className="card-title text fw-lighter">Struggling to find merch of your favorite celebrities? </h1>
              <br />
              <p className="card-text fs-5 d-none d-sm-block ">
              Discover FameFinds: Your one-stop shop for all celebrity merch, saving you time and hassle!
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
