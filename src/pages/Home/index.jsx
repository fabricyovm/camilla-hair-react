import Slider from './components/Slider'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Differentials from './components/Differentials'
import ToTop from '../../components/ToTop'

const Home = () => {

  return (
    <>
      <Slider />
      <Services />
      <Testimonials />
      <Differentials />
      <Blog />
      <ToTop />      
    </>
  )
}

export default Home