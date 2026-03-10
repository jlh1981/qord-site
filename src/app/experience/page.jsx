import MenuBar from '../../components/MenuBar';
import ScanLine from '../../components/ScanLine';
import Footer from '../../components/Footer';
import ExperienceDemo from '../../components/ExperienceDemo';

export const metadata = {
  title: 'qord / experience',
  description: 'Interact with a real qord. See what understanding looks like when it survives the boundary.',
};

export default function ExperiencePage() {
  return (
    <>
      <ScanLine />
      <MenuBar />
      <div className="main">
        <ExperienceDemo />
      </div>
      <Footer />
    </>
  );
}
