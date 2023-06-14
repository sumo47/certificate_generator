
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  Size = 20
  render() {
    return (
        <Router>
          <NavBar />
          <Routes>
            <Route  path="/" element={<News  key="general"  pageSize={this.Size} country="in" category="general" />}></Route>
            <Route  path="/science" element={<News key="science"  pageSize={this.Size} country="in" category="science" />}></Route>
            <Route  path="/business" element={<News  key="business" pageSize={this.Size} country="in" category="business" />}></Route>
            <Route  path="/entertainment" element={<News key="entertainment"  pageSize={this.Size} country="in" category="entertainment" />}></Route>
            <Route  path="/sports" element={<News key="sports"  pageSize={this.Size} country="in" category="sports" />}></Route>
            <Route  path="/technology" element={<News key="technology"  pageSize={this.Size} country="in" category="technology" />}></Route>
            <Route  path="/health" element={<News  key="health" pageSize={this.Size} country="in" category="health" />}></Route>
          </Routes>
        </Router>
      

    )
  }
}

// we use key to remount components
