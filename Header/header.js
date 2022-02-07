import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SpacxHistorty from '../SpaceHistory/EmployeesHistory';
import Spacxpayloads from '../PayLoads/spacexPayload';
import SignIn from '../SignIn/signIn';
import PayLoad from '../PayLoads/payloadsTable';
import Postform from '../SpaceHistory/PostForm';
import './header.css';



class Header extends React.Component
{

    constructor(props) {
        super(props);

        this.state = {

           menu: [{
                "Home":"Home",
                "spaceXhistory":"spaceXhistory",
                "spacexPayload":"spacexPayload",
                
                "payloadTable":"payloadsTable",
                "AddHistoryForm":"PostForm"
               
                
            }]
           
        };
    }

  render()
  {
    return (

               
        <div>
                <nav className="navbar navbar-expand-sm  navbar-dark  backgroundImg  " id= "bar" >
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            

                           
                         
                       { this.state.menu.map((menu)=>{
                   return Object.keys(menu).map((item,i)=>{
                      return (  

                        <li className="nav-item" id="barIteam">
                        <NavLink className="nav-link" to={menu[item]}>
                      {[item]}</NavLink>                    
                      </li>
                      )
                    })
                }
                       )
            }   
            <li class="si"><NavLink className="nav-link" id="sign" to="SignIn" >SignIN</NavLink></li>      
                           
                        </ul>
                    </div>
                </nav>

            </div>
      
      
    )
  }
}
export default Header;
