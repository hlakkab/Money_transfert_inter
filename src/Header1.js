import React, { Component, useState, useEffect,useCallback } from 'react'



import { useHistory } from "react-router-dom"
import logo from '/Users/mac/Desktop/Transfert_National_Front/src/images/logo.webp'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom'

// import { withRouter } from "react-router-dom";

const Header1 = () => {
  
  
  
  //use  effect for page changes, it uses history to know if the pages changes to close the about page
  
  

    


    return (<AppBar position="relative">
    <CssBaseline />
    <Toolbar>
    <Link to="/" className="link">
    <img src={logo} alt="EasyMT" style={{ height: '50px' }} /> 
        </Link>
        <Link to="/" >
          EasyMT
        </Link>
      <div className="navlinks">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
        <Link to="/faq" className="link">
          FAQ
        </Link>
      </div>
    </Toolbar>
  </AppBar>
    //   <div >
    // <div className="header">
    //   <div className="container">
    //     <nav className="nav">
    //       <div className="menu-toggle" >
    //         <i className="fa fa-bars"></i>
    //         <i className="fa fa-times"></i>
    //       </div>
    //       <ul className="nav-list">
          
          
              
    //         <li className="logo "><NavLink to="/backOffice"><img  className="logo"src={logo}/></NavLink>
              
    //         </li>

            
            
            
            
                 
    //       </ul>
          
    //       <ul className="nav-list no-border">
          
          
              
            
    //         <li className="nav-item colorB" ><NavLink to="/transferListB"  className="nav-item colorB">Historique des Transactions</NavLink>
              
    //         </li>

            
            
            
            
                 
    //       </ul>
    //       </nav>
          
    //   </div>
    //   </div>
      
    //   </div>
    )
  }


export default Header1;