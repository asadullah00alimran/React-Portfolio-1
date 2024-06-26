import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import MyWorks from './components/MyWorks/MyWorks.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWorks/>

      <Footer />
    </div>
  );
};

export default App;