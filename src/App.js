import './App.css';
import Footer from './components/footer/Footer';
import HeroSection from './components/hero-section/HeroSection';
import Join from './components/join/Join';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Testimonials from './components/testimonials/Testimonials';
import FAQ from './components/faq/FAQ';
import WhatsAppButton from './components/whatsapp-button/WhatsAppButton';
import BMICalculator from './components/bmi-calculator/BMICalculator';
import ClassSchedule from './components/class-schedule/ClassSchedule';
import Trainers from './components/trainers/Trainers';
import Gallery from './components/gallery/Gallery';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <BMICalculator/>
      <ClassSchedule/>
      <Trainers/>
      <Gallery/>
      <Testimonials/>
      <FAQ/>
      <Join/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
}

export default App;
