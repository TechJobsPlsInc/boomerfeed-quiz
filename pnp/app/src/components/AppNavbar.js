import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="navbar_custom">
        <h1>pNp</h1>

        <h2>about</h2>

      </div>
      )
  }
}