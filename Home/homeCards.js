import React from "react";
import sp from '../images/1510313.jpg'
import sd from '../images/hmeVQC.jpg'
import sc from '../images/shop.jpg';

const HomeCards =()=>(


  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="card">
          <img
            src={sp}
            class="card-img-top"
            alt="Waterfall"
          />
          <div class="card-body">
            <h5 class="card-title">Missions</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </p>
            <a href="https://www.spacex.com/mission" class="btn btn-primary">mission</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card">
          <img
            src={sd}
            class="card-img-top"
            alt="Sunset Over the Sea"
          />
          <div class="card-body">
            <h5 class="card-title">Launches</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </p>
            <a href="https://www.spacex.com/launches" class="btn btn-primary">launch</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 ">
        <div class="card">
          <img
            src={sc}
            class="card-img-top"
            alt="Sunset over the Sea"
          />
          <div class="card-body">
            <h5 class="card-title">Shop</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </p>
            <a href="https://shop.spacex.com/" class="btn btn-primary">Shop</a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HomeCards