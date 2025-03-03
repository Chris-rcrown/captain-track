import Hero from './components/hero'
import './App.css'
import Section1 from './components/section1'
import { ServerRouter } from 'react-router-dom'
import Services from './components/services'
import Section3 from './components/section3'
import Section4 from './components/section4'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Hero/>
      <Section1/>
      <Services/>
      <Section3/>
      <Section4/>
      <Footer/>

      
    </>
  )
}

export default App
