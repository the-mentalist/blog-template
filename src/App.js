import React, { Component } from 'react';

import Layout from './containers/Layout/Layout';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
        <Layout>
          <Blog />
        </Layout>
    );
  }
}

export default App;
