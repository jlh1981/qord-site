import MenuBar from '../components/MenuBar';
import ScanLine from '../components/ScanLine';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Protocol from '../components/Protocol';
import Toolkit from '../components/Toolkit';
import About from '../components/About';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <ScanLine />
      <MenuBar />
      <div className="main">
        <Hero />
        <Problem />
        <Protocol />
        <Toolkit />
        <About />
        <CTA />
      </div>
      <Footer />
    </>
  );
}
