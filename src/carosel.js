import React from 'react'

export default function Carosel() {
  return (
    <div>
      <div className="container">
        <div id="carouselExampleControls" className="carousel slide orange-bg" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <h1>Mega LCD TV For Sports</h1>
                        <p>This is the best tv in the world for people who just want to waste time in front of tv.</p>
                        <h1 className="price">$1200</h1>
                        <button className="buy-now-button btn btn-primary">Buy Now</button>
                    </div>
                    <div className="col-md-5">
                        <img src="tv.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
              </div>
              <div className="carousel-item">
                  <div className="row  align-items-center">
                      <div className="col-md-7">
                        <h1>Cool Dude Headphone</h1>
                        <p>This is the best headphone in the world for people who just want to waste time in front of funky world.</p>
                        <h1 className="price">$420</h1>
                        <button className="buy-now-button">Buy Now</button>
                      </div>
                      <div className="col-md-5">
                        <img src="headphone.png" className="d-block w-100" alt="..." />
                      </div>
                  </div>
              </div>
              <div className="carousel-item">
                  <div className="row align-items-center">
                      <div className="col-md-7">
                        <h1>X-Box for your living room</h1>
                        <p>This is the best x-box in the world for people who just want to waste time in front of fake sports.</p>
                        <h1 className="price">$600</h1>
                        <button className="buy-now-button">Buy Now</button>
                      </div>
                      <div className="col-md-5">
                        <img src="xbox.png" className="d-block w-100" alt="..." />
                      </div>
                  </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
    </div>
    </div>
  )
}
