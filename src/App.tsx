import { HashRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';

// Pages
import Presentation from './pages/Presentation';
import CreerMission from './pages/CreerMission';
import MesMissions from './pages/MesMissions';
import FaqDemandeur from './pages/FaqDemandeur';
import InscriptionHelper from './pages/InscriptionHelper';
import InscriptionDemandeur from './pages/InscriptionDemandeur';
import MissionsListe from './pages/MissionsListe';
import MesGains from './pages/MesGains';

// Composant pour la page d'accueil
function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white overflow-x-hidden"
    >
      {/* Header */}
      <Header />

      {/* Social Sidebar (Desktop) */}
      <SocialSidebar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}

// Layout pour les pages internes (avec Header et Footer)
function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <SocialSidebar />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AnimatePresence mode="wait">
        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<HomePage />} />

          {/* Pages INFOS - Présentation */}
          <Route path="/presentation" element={<PageLayout><Presentation /></PageLayout>} />

          {/* Pages INFOS - Demander de l'aide */}
          <Route path="/creer-mission" element={<PageLayout><CreerMission /></PageLayout>} />
          <Route path="/mes-missions" element={<PageLayout><MesMissions /></PageLayout>} />
          <Route path="/faq-demandeur" element={<PageLayout><FaqDemandeur /></PageLayout>} />

          {/* Pages INFOS - Devenir Helper */}
          <Route path="/inscription-helper" element={<PageLayout><InscriptionHelper /></PageLayout>} />
          <Route path="/missions" element={<PageLayout><MissionsListe /></PageLayout>} />
          <Route path="/mes-gains" element={<PageLayout><MesGains /></PageLayout>} />

          {/* Pages INFOS - Devenir Demandeur */}
          <Route path="/inscription-demandeur" element={<PageLayout><InscriptionDemandeur /></PageLayout>} />
        </Routes>
      </AnimatePresence>
    </HashRouter>
  );
}

export default App;
