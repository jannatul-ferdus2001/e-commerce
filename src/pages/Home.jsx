import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Body from '../components/Body'
import Infrom from '../components/Infrom'
import NewArri from '../components/NewArri'
import Newone from '../components/Newone'
import { Watch } from '../components/Watch'
import NewArriv from '../components/NewArriv'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Banner/>
    <Infrom/>
    <Body/>
    <NewArri/>
    <Newone/>
    <Watch/>
    <NewArriv/>
    <Footer/>
    </>
  )
}

export default Home