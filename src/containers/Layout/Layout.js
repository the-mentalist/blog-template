import React, { Component } from 'react';

class Layout extends Component {
  render () {
    return (
      <div>
        toolbar,
        sidedrawer for blog post
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;