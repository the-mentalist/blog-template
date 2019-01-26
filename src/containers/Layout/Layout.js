import React, { Component } from 'react';

import classes from './Layout.css'

class Layout extends Component {
  render () {
    return (
      <div className={classes.Layout}>
        toolbar,
        sidedrawer for blog post
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;