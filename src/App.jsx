import ContactSection from "./components/Contactus"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Navigation from "./routings/Navigations"


const App = () => {
  return (
    <div>
      <Navbar />
      <Navigation />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
