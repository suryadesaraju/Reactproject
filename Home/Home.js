import React from "react";
import  spacex from '../images/spacex-16.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import HomeCards from './homeCards';
import Clock from '../Clock/clock';
import './home.css';
const Home = () => (
    <div className="main">

<Clock />

                      <img alt="panda" className="photo" src={spacex}  /> 
                     
                      <HomeCards/>
                      
    <footer class="page-footer font-small special-color-dark pt-4">
  <div class="container">
 <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mx-1">
        
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1">
          <i class="fab fa-twitter"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-gplus mx-1">
          <i class="fab fa-google-plus-g"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-li mx-1">
          <i class="fab fa-linkedin-in"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-dribbble mx-1">
          <i class="fab fa-dribbble"> </i>
        </a>
      </li>
    </ul>
   

  </div>
 
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
   
  </div>
 

</footer>
    

</div>



);



export default Home;