import { motion } from 'framer-motion';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-600 to-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Mentions légales</h1>
            <p className="text-lg text-white/90">Informations légales obligatoires</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 1. Éditeur du site */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">1. Éditeur du site / de l'application</h2>
            <ul className="space-y-3 text-gray-600">
              <li><strong className="text-gray-700">Nom de l'entreprise / association :</strong> Act'Solidaires</li>
              <li><strong className="text-gray-700">Forme juridique :</strong> [Association loi 1901 / SAS / SARL / Auto-entreprise, à préciser]</li>
              <li><strong className="text-gray-700">Capital social :</strong> [si société]</li>
              <li><strong className="text-gray-700">Siège social :</strong> [adresse complète]</li>
              <li><strong className="text-gray-700">Numéro d'immatriculation :</strong> RCS [ville] – [numéro] ou RNA [si association]</li>
              <li><strong className="text-gray-700">Numéro de TVA intracommunautaire :</strong> [si applicable]</li>
              <li><strong className="text-gray-700">Responsable de publication :</strong> [Nom, prénom, fonction]</li>
            </ul>
          </motion.div>

          {/* 2. Hébergeur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">2. Hébergeur du site / de l'application</h2>
            <ul className="space-y-3 text-gray-600">
              <li><strong className="text-gray-700">Nom de l'hébergeur :</strong> [ex. OVH, AWS, Google Cloud, etc.]</li>
              <li><strong className="text-gray-700">Adresse de l'hébergeur :</strong> [adresse complète]</li>
              <li><strong className="text-gray-700">Téléphone :</strong> [numéro de contact de l'hébergeur]</li>
            </ul>
          </motion.div>

          {/* 3. Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">3. Contact</h2>
            <ul className="space-y-3 text-gray-600">
              <li><strong className="text-gray-700">Email :</strong> <a href="mailto:contact@actsolidaires.fr" className="text-cyan-600 hover:underline">contact@actsolidaires.fr</a></li>
              <li><strong className="text-gray-700">Téléphone :</strong> [numéro de contact]</li>
            </ul>
          </motion.div>

          {/* 4. Propriété intellectuelle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">4. Propriété intellectuelle</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Tous les éléments du site (textes, images, logo, design, code source) sont protégés par le Code de la propriété intellectuelle et restent la propriété exclusive d'<strong>Act'Solidaires</strong>, sauf mention contraire.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Toute reproduction, modification ou diffusion sans autorisation est interdite.
            </p>
          </motion.div>

          {/* 5. Données personnelles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">5. Données personnelles (RGPD)</h2>
            <ul className="space-y-4 text-gray-600">
              <li>
                Les informations recueillies via la plateforme sont traitées par <strong>Act'Solidaires</strong> dans le respect du RGPD.
              </li>
              <li>
                L'utilisateur dispose d'un droit d'accès, de rectification, d'opposition et de suppression de ses données personnelles en contactant : <a href="mailto:contact@actsolidaires.fr" className="text-cyan-600 hover:underline">[adresse email dédiée]</a>.
              </li>
              <li>
                Les données ne sont pas revendues à des tiers.
              </li>
            </ul>
          </motion.div>

          {/* 6. Responsabilité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">6. Responsabilité</h2>
            <ul className="space-y-4 text-gray-600">
              <li>
                <strong>Act'Solidaires</strong> s'efforce de fournir un site et une application accessibles et sécurisés, mais ne peut garantir l'absence d'erreurs, d'interruptions ou de failles techniques.
              </li>
              <li>
                La responsabilité d'<strong>Act'Solidaires</strong> ne saurait être engagée en cas d'utilisation frauduleuse de la plateforme par des tiers.
              </li>
            </ul>
          </motion.div>

          {/* 7. Cookies et traceurs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">7. Cookies et traceurs</h2>
            <ul className="space-y-4 text-gray-600">
              <li>
                Le site peut utiliser des cookies afin d'améliorer l'expérience utilisateur.
              </li>
              <li>
                L'utilisateur peut configurer son navigateur pour refuser ou supprimer les cookies.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;
