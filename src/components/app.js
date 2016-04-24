import React from 'react';
import { Component } from 'react';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Header />
      	{this.props.children}
      </div>
    );
  }
}
