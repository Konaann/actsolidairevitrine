import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const missions = [
  { icon: '🖌️', title: 'Peinture murale', desc: 'Peindre ou repeindre une pièce, un mur' },
  { icon: '🪟', title: 'Boiseries', desc: 'Peindre portes, fenêtres, plinthes' },
  { icon: '🎨', title: 'Retouches', desc: 'Petites retouches et finitions' },
  { icon: '📏', title: 'Préparation', desc: 'Ponçage, enduit, protection des surfaces' },
  { icon: '🏠', title: 'Extérieur', desc: 'Volets, portail, mobilier de jardin' },
  { icon: '✨', title: 'Décoration', desc: 'Effets décoratifs, pochoirs, fresques simples' },
];

const Peinture = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-500 to-rose-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <span className="text-6xl mb-4 block">🎨</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Peinture</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Travaux de peinture pour rafraîchir votre intérieur
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
                Donnez des couleurs à votre intérieur
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Envie de changer l'ambiance d'une pièce ? De rafraîchir des murs défraîchis ?
                Nos helpers peuvent vous aider dans vos travaux de peinture, de la préparation
                des surfaces jusqu'aux finitions.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Que ce soit pour une petite retouche ou la peinture complète d'une pièce,
                trouvez un helper minutieux et soigneux pour un résultat impeccable.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Préparation soignée des surfaces</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Protection du mobilier et des sols</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Nettoyage après les travaux</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Types de travaux</h3>
              <div className="space-y-4">
                {missions.map((mission, index) => (
                  <motion.div
                    key={mission.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
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
            Un projet de peinture ?
          </h3>
          <p className="text-gray-600 mb-6">
            Trouvez un helper pour vous accompagner dans vos travaux
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/creer-mission">
              <motion.button
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
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

export default Peinture;
