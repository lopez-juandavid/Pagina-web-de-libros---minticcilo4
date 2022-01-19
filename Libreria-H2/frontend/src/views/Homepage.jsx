import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useApiGet } from '../hooks/useApiGet'

const Homepage = () => {

  useApiGet();

  return (
    // <div className="bg-secondary bg-opacity-50">
    <div className="">
      <Navbar buscarFlag={true} />
      <Cards />
      <Footer />
    </div>
  )
}

export default Homepage
