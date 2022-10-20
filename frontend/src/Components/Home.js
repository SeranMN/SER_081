import React from 'react'
import Header from './Header'
import HomeBanner from './HomeBanner'
import HomeCards from './HomeCard'
import EventContainer from './EventContainer'
import Divider from '@mui/material/Divider';

const Home = () => {
  return (
    <div style={{overflow:'hidden'}}>
        <Header/>
        <HomeBanner/>
        <HomeCards/>
        <Divider/>
        <EventContainer/>
    </div>
  )
}

export default Home