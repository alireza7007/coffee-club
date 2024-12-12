import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import HeaderMobile from './components/header/HeaderMobile.Jsx'
import BackGroundHome from './components/body/backGroundHome'
import Products from './components/body/Products'
import Categorys from './components/body/Categorys'
import Equipment from './components/body/Equipment'
import BestSelles from './components/body/BestSelles'
import CoffeClub from './components/body/CoffeClub'
import Footer from './components/footer/Footer'


export default function App() {
  const [darkMode, setDarkMode] = useState(true)
    const darkModeHandler = () => {
        const root = document.getElementsByTagName('html')[0];
        setDarkMode(!darkMode)
        if (darkMode) {
          root.setAttribute("class", "dark")
        } else
          root.removeAttribute("class", "dark")
      }


  return (
    <>

      <Header darkModeHandler={darkModeHandler} dark={darkMode}/>
      <HeaderMobile darkModeHandler={darkModeHandler} dark={darkMode}/>
      {/* __NAV ICON */}
      
        <main className="">
          <BackGroundHome />
          <Products />
          <Categorys />
          <Equipment />
          <BestSelles />
          <CoffeClub />
          </main> 
          <footer>
            <Footer />
          </footer>
          

      
    </>

  )
}






