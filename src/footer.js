import React from 'react';

export default function Footer() {
    return (
       <div>
      <div className="container shoes" id="shoes">
      <h3>Shoes</h3>
      <div className="card-deck">
        <div className="card">
          <img src="shoes/shoe-1.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Supply 350</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional.</p>
            <h5>$120</h5>
            <button className="buy-now-button">Buy Now </button>
          </div>
        </div>
        <div className="card">
          <img src="shoes/shoe-2.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Nike 360</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <h5>$320</h5>
            <button className="buy-now-button">Buy Now </button>
          </div>
        </div>
        <div className="card">
          <img src="shoes/shoe-3.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Red Airmax</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional.</p>
            <h5>$350</h5>
            <button className="buy-now-button">Buy Now </button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="container" id="backpack">
      <h3>Backpack</h3>
      <div className="card-deck">
        <div className="card">
          <img src="bags/bag-1.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Red Laltu Bag</h5>
            <h5>$120</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div className="card-footer">
            <button className="buy-now-button">Buy Now </button>
          </div>
        </div>
        <div className="card">
          <img src="bags/bag-2.png" class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Blue Niltu Bag</h5>
            <h5>$320</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="card-footer">
            <button className="buy-now-button">Buy Now </button>
          </div>
        </div>
        <div className="card">
          <img src="bags/bag-3.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Black Kaltu Bag</h5>
            <h5>$169</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div className="card-footer">
            <button className="buy-now-button">Buy Now </button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="container d-flex align-items-center justify-content-center orange-bg" id="subscribe">
      <div>
        <h3>LET'S STAY IN TOUCH</h3>
        <h6>Get updates on sales, specials and more</h6>
        <input className="form-control" type="text" />
        <br />
        <button className="buy-now-button">SUBMIT</button>
      </div>
    </div>
        </div>
    )
}
