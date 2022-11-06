import React from "react"
import { Link } from "react-router-dom";
import "./home.css"

function Home() {
  return (
    <div className="home">
      <h2 className="hometxt">Welcome</h2>
      <button className="homeBtn"><Link to="/counter" className="homeLink">Get Started </Link></button>
    </div>

  )
}
export default Home