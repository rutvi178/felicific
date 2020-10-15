import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component
{
        render(){
                return(
         <nav sticky="top" className = "navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand" > 
                <img
                alt=""
                src="/ddu_logo.png"
                 width="30"
                 height="30"
                 className="d-inline-block align-top" />{' '}Felicific </Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="navbar-item">
                    <Link to ="/"   className="nav-link"> Home </Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/cultural" className="nav-link"> Cultural Night </Link>
                    </li>{' '}
                    <li className="navbar-item">
                    <Link to ="/profile/:id" className="nav-link"> My Profile   </Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/contact" className="nav-link"> Contact Us  </Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/" className="nav-link"> Logout </Link>
                    </li>
                </ul>
                </div>    
        </nav>
        );
    }
}