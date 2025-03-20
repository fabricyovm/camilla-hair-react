import Slider from './components/Slider';
import SectionServices from './components/SectionServices';
import SectionBlog from './components/SectionBlog';
import SectionDifferentials from './components/SectionDifferentials';


const Home = () => {

  return (
    <>
      <Slider />
      <SectionServices />
      <SectionDifferentials />
      <SectionBlog />
    </>
  )
}

export default Home