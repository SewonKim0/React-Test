import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Routes, Route } from "react-router-dom"
import App from './App'
import Test from "./Test"

const hashRouter = (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </HashRouter>
)

ReactDOM.render(hashRouter, document.getElementById("root"))