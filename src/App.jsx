import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/header'


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false,
      offset: 100, 
    });
  }, []);
  return (
    <div className='bg-[#111827] min-h-screen'> 
       <Header />
    </div>
  )
}

export default App;