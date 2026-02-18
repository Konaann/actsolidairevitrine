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

// Services Pages
import Services from './pages/Services';
import Aide from './pages/services/Aide';
import Courses from './pages/services/Courses';
import Reparation from './pages/services/Reparation';
import Devoirs from './pages/services/Devoirs';
import Peinture from './pages/services/Peinture';
import Nettoyage from './pages/services/Nettoyage';
import Informatique from './pages/services/Informatique';
import Mairie from './pages/services/Mairie';
import Activite from './pages/services/Activite';

// À propos Pages
import MissionImpact from './pages/apropos/MissionImpact';
import CGV from './pages/apropos/CGV';
import MentionsLegales from './pages/apropos/MentionsLegales';
import Fonctionnalites from './pages/apropos/Fonctionnalites';

// Download Page
import Telecharger from './pages/Telecharger';

// Contact Page
import Contact from './pages/Contact';

// Ressources Page
import Ressources from './pages/Ressources';

// Blog Pages
import Blog from './pages/blog/Blog';
import Guides from './pages/blog/Guides';
import Temoignages from './pages/blog/Temoignages';
import Evenements from './pages/blog/Evenements';

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

          {/* Page Téléchargement */}
          <Route path="/telecharger" element={<PageLayout><Telecharger /></PageLayout>} />

          {/* Page Contact */}
          <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />

          {/* Page Ressources */}
          <Route path="/ressources" element={<PageLayout><Ressources /></PageLayout>} />

          {/* Pages Services */}
          <Route path="/services" element={<PageLayout><Services /></PageLayout>} />
          <Route path="/services/aide" element={<PageLayout><Aide /></PageLayout>} />
          <Route path="/services/courses" element={<PageLayout><Courses /></PageLayout>} />
          <Route path="/services/reparation" element={<PageLayout><Reparation /></PageLayout>} />
          <Route path="/services/devoirs" element={<PageLayout><Devoirs /></PageLayout>} />
          <Route path="/services/peinture" element={<PageLayout><Peinture /></PageLayout>} />
          <Route path="/services/nettoyage" element={<PageLayout><Nettoyage /></PageLayout>} />
          <Route path="/services/informatique" element={<PageLayout><Informatique /></PageLayout>} />
          <Route path="/services/mairie" element={<PageLayout><Mairie /></PageLayout>} />
          <Route path="/services/activite" element={<PageLayout><Activite /></PageLayout>} />

          {/* Pages À propos */}
          <Route path="/apropos/mission" element={<PageLayout><MissionImpact /></PageLayout>} />
          <Route path="/apropos/cgv" element={<PageLayout><CGV /></PageLayout>} />
          <Route path="/apropos/mentions-legales" element={<PageLayout><MentionsLegales /></PageLayout>} />
          <Route path="/apropos/fonctionnalites" element={<PageLayout><Fonctionnalites /></PageLayout>} />

          {/* Pages Blog */}
          <Route path="/blog" element={<PageLayout><Blog /></PageLayout>} />
          <Route path="/blog/guides" element={<PageLayout><Guides /></PageLayout>} />
          <Route path="/blog/temoignages" element={<PageLayout><Temoignages /></PageLayout>} />
          <Route path="/blog/evenements" element={<PageLayout><Evenements /></PageLayout>} />
        </Routes>
      </AnimatePresence>
    </HashRouter>
  );
}

export default App;
