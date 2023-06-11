
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      
        <Router>
          <NavBar />
          <Routes>
            <Route  path="/" element={<News  key="general"  pageSize={8} country="in" category="general" />}></Route>
            <Route  path="/science" element={<News key="science"  pageSize={8} country="in" category="science" />}></Route>
            <Route  path="/business" element={<News  key="business" pageSize={8} country="in" category="business" />}></Route>
            <Route  path="/entertainment" element={<News key="entertainment"  pageSize={8} country="in" category="entertainment" />}></Route>
            <Route  path="/sports" element={<News key="sports"  pageSize={8} country="in" category="sports" />}></Route>
            <Route  path="/technology" element={<News key="technology"  pageSize={8} country="in" category="technology" />}></Route>
            <Route  path="/health" element={<News  key="health" pageSize={8} country="in" category="health" />}></Route>
          </Routes>
        </Router>
      

    )
  }
}

// we use key to remount components
