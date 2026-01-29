import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const missions = [
  { icon: '🧹', title: 'Ménage courant', desc: 'Aspirateur, serpillère, dépoussiérage' },
  { icon: '🪟', title: 'Vitres', desc: 'Nettoyage des vitres et miroirs' },
  { icon: '🛁', title: 'Salle de bain', desc: 'Nettoyage complet de la salle de bain' },
  { icon: '🍳', title: 'Cuisine', desc: 'Nettoyage de la cuisine et électroménager' },
  { icon: '👕', title: 'Repassage', desc: 'Repassage du linge' },
  { icon: '📦', title: 'Rangement', desc: 'Aide au rangement et à l\'organisation' },
];

const Nettoyage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-500 to-cyan-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <span className="text-6xl mb-4 block">🧹</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nettoyage</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ménage, rangement et entretien de votre domicile
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Un intérieur propre et rangé
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Le ménage peut devenir difficile avec l'âge ou le manque de temps.
                Nos helpers sont là pour vous aider à maintenir un intérieur propre
                et agréable à vivre.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Du ménage courant au grand nettoyage de printemps, en passant par
                le rangement et l'organisation, trouvez l'aide dont vous avez besoin.
              </p>

              <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">✨</span> Service de qualité
                </h3>
                <p className="text-gray-600">
                  Nos helpers sont soigneux et attentifs. Ils respectent votre intérieur
                  et utilisent vos produits ou apportent les leurs selon vos préférences.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Prestations proposées</h3>
              <div className="space-y-4">
                {missions.map((mission, index) => (
                  <motion.div
                    key={mission.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{mission.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{mission.title}</h4>
                      <p className="text-gray-600 text-sm">{mission.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Besoin d'un coup de main pour le ménage ?
          </h3>
          <p className="text-gray-600 mb-6">
            Trouvez un helper disponible pour vous aider
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/creer-mission">
              <motion.button
                className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Créer une mission
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                className="bg-white text-gray-700 px-8 py-3 rounded-xl font-semibold border border-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir tous les services
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nettoyage;
