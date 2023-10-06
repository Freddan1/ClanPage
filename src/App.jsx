import './App.css'
import BangerContent from './components/BangerContent'
import Banner from './components/Banner'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Members from './components/Members'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
     <Navbar/>
     <Banner/>
     <Members/>
     <BangerContent />
     <ContactUs/>
     <Footer/>
    </>
  )
}

export default App
