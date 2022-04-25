import React, { Component } from 'react';
import Footer from './Footer';
import NavbarHome from './NavbarHome';

export default class LayoutHome extends Component {
  render() {
    return (
      <>
        <NavbarHome />
        {this.props.children}
        <Footer />
      </>
    );
  }
}