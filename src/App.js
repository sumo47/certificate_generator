
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  Size = 20
  apiKey = process.env.REACT_APP_API_KEY

  state={
    progress:0
  }
  setProgress= (progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <Router>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <NavBar />
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.Size} country="in" category="general" />}></Route>
          <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.Size} country="in" category="science" />}></Route>
          <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.Size} country="in" category="business" />}></Route>
          <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.Size} country="in" category="entertainment" />}></Route>
          <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.Size} country="in" category="sports" />}></Route>
          <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.Size} country="in" category="technology" />}></Route>
          <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.Size} country="in" category="health" />}></Route>
        </Routes>
      </Router>
    )
  }
}

// we use key to remount components
