import React, { useState } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default function App() {
  const Size = 20
  const apiKey = process.env.REACT_APP_API_KEY

  const [progress, setProgress] = useState(0)

  return (
    <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <NavBar />
      <Routes>
        <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={Size} country="in" category="general" />}></Route>
        <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={Size} country="in" category="science" />}></Route>
        <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={Size} country="in" category="business" />}></Route>
        <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={Size} country="in" category="entertainment" />}></Route>
        <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={Size} country="in" category="sports" />}></Route>
        <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={Size} country="in" category="technology" />}></Route>
        <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={Size} country="in" category="health" />}></Route>
      </Routes>
    </Router>
  )

}

// we use key to remount components
