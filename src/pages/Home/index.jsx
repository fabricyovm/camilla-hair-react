import Slider from './components/Slider';
import Services from './components/Services';
import Blog from './components/Blog';
import Differentials from './components/Differentials';
import ToTop from '../../components/ToTop';


const Home = () => {

  return (
    <>
      <Slider />
      <Services />
      <Differentials />
      <Blog />
      <ToTop />
    </>
  )
}

export default Home