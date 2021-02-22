import React from "react";

function Priceing() {
  return (
    <>
      <div className="container mt-5">
        <div className="Priceing_title">
          <p>Pricing Tables</p>
          <h2>Duis molestie ipsum id faucibus fermentum</h2>
        </div>
        <div className="table_cards">
          <div className="row">
            {[1, 2, 3].map((item) => (
              <PricingCard />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function PricingCard() {
  return (
    <div className="col-lg-4">
      <div className="table-item">
        <div className="table_topcontent">
          <h4>Starter Plan</h4>
          <h1>$25</h1>
          <span>/monthly</span>
        </div>
        <div className="pricing_table_points">
          <p>
            <a href="#">100 Suspendisse dapibus</a>
          </p>
          <p>
            <a href="#">10x Paleo cepac enamel</a>
          </p>
          <p>
            <a href="#">Wilpamsburg organic post ironic</a>
          </p>
          <p>
            <a href="#">Helvetica pinterest yuccie</a>
          </p>
          <p>
            <a href="#">Plaid shabby chic godard</a>
          </p>
          <button className="priceingtable_button">Buy It Now</button>
        </div>
      </div>
    </div>
  );
}

export default Priceing;
