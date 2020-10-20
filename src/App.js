import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Blog from './Blog'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        {/* <PostForm /> */}
        {/* <PostList /> */}
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
