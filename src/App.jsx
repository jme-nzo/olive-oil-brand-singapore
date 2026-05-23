import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShopGrid from './components/ShopGrid';
import FarmStory from './components/FarmStory';
import Process from './components/Process';
import Footer from './components/Footer';
import SignInModal from './components/SignInModal';

function App() {
  const [isSignInOpen, setSignInOpen] = useState(false);

  return (
    <div className="min-h-screen bg-linen text-soil font-sans selection:bg-gold selection:text-soil">
      <Navbar onSignInClick={() => setSignInOpen(true)} />
      <main>
        <Hero />
        <ShopGrid />
        <FarmStory />
        <Process />
      </main>
      <Footer />
      <SignInModal isOpen={isSignInOpen} onClose={() => setSignInOpen(false)} />
    </div>
  );
}

export default App;
