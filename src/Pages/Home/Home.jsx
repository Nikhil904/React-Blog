import React from 'react'
import "./Home.css"
import Header from '../../header/Header'
import Posts from '../../Posts/Posts'
import Sidebar from '../../Sidebar/Sidebar'

const Home = () => {
  return (
    <>
        <Header/>
        <div className='home'>
          <Posts/>
          <Sidebar/>
        </div>
        HomePage
    </>
  )
}

export default Home
