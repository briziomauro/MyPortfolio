import './App.css'
import AboutMe from './components/aboutMe/AboutMe'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Proyects from './components/proyects/Proyects'
import Technologies from './components/technologies/Technologies'

function App() {


  return (
    <>
      <Navbar />
      <Header/>
      <AboutMe/>
      <Proyects/>
      <Technologies/>
    </>
  )
}

export default App
