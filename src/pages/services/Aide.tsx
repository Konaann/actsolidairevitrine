import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const missions = [
  { icon: '🏠', title: 'Compagnie', desc: 'Passer du temps avec une personne âgée, discuter, jouer aux cartes' },
  { icon: '📖', title: 'Lecture', desc: 'Lire le journal, des livres ou du courrier' },
  { icon: '🚶', title: 'Promenade', desc: 'Accompagner lors de balades à pied dans le quartier' },
  { icon: '☎️', title: 'Appels', desc: 'Aide pour passer des appels téléphoniques' },
  { icon: '💊', title: 'Rappels', desc: 'Rappeler les rendez-vous médicaux ou les prises de médicaments' },
  { icon: '🎲', title: 'Jeux', desc: 'Jouer à des jeux de société, faire des puzzles ensemble' },
];

const Aide = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-500 to-blue-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <span className="text-6xl mb-4 block">🤝</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Aide à domicile</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Accompagnement et présence pour les personnes qui en ont besoin
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
                Un moment de partage précieux
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                L'aide à domicile va au-delà des simples tâches ménagères. C'est avant tout une présence humaine,
                un moment de partage entre générations qui enrichit autant le helper que la personne aidée.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Nos helpers sont là pour briser la solitude, apporter un sourire et créer des liens
                intergénérationnels authentiques et durables.
              </p>
              <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">💡</span> Le saviez-vous ?
                </h3>
                <p className="text-gray-600">
                  Les visites régulières d'un helper réduisent significativement le sentiment d'isolement
                  et améliorent le bien-être des personnes âgées.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Exemples de missions</h3>
              <div className="space-y-4">
                {missions.map((mission, index) => (
                  <motion.div
                    key={mission.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
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
            Besoin d'aide à domicile ?
          </h3>
          <p className="text-gray-600 mb-6">
            Créez une mission et trouvez un helper disponible près de chez vous
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/creer-mission">
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
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

export default Aide;
