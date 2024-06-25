import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import MyWorks from './components/MyWorks/MyWorks.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWorks/>
    </div>
  );
};

export default App;