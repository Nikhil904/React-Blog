import React from 'react'
import "./Home.css"
import Header from '../../Components/header/Header'
import Posts from '../../Components/Posts/Posts'
import Sidebar from '../../Components/Sidebar/Sidebar'

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
