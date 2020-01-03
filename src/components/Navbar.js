import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
  render (){
  return(
      <NavWrapper className="navbar navbar-expand navbar-dark px-sm-5" >
          <Link to="/">
          <div className="ml-2">
             <i className="fa fa-home" style={{color:"white",fontSize:"20px"}}></i>
          </div>
          </Link>
          <ul className="navbar-nav align-items-center ml-auto">
              <Link to="/rules" className="nav-item ml-5 nav-link"> rules</Link>
              <Link to="/newRule" className="nav-item ml-5 nav-link"> New rule</Link>
          </ul>

      </NavWrapper>
       )
  };
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color:var(--mainWhite)!important;
        font-size:1.3rem;
        text-transform:capitalize;
    }`

