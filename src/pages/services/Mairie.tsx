import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const missions = [
  { icon: '📋', title: 'Formulaires', desc: 'Aide au remplissage de documents administratifs' },
  { icon: '🏛️', title: 'Accompagnement mairie', desc: 'Vous accompagner pour vos démarches en mairie' },
  { icon: '📬', title: 'Courriers', desc: 'Rédaction de courriers officiels' },
  { icon: '💳', title: 'Aides sociales', desc: 'Constitution de dossiers CAF, retraite, APL' },
  { icon: '🏥', title: 'Santé', desc: 'Carte vitale, mutuelle, dossiers médicaux' },
  { icon: '📁', title: 'Classement', desc: 'Organisation et archivage de documents' },
];

const Mairie = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <span className="text-6xl mb-4 block">🏛️</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Démarches administratives</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Accompagnement pour vos formalités et papiers administratifs
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
                Simplifiez votre administratif
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Les démarches administratives peuvent être complexes et décourageantes.
                Nos helpers sont là pour vous accompagner dans la jungle des formulaires,
                des dossiers et des rendez-vous officiels.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Que ce soit pour remplir un formulaire, constituer un dossier d'aide sociale,
                ou vous accompagner physiquement à la mairie, nos helpers patients et organisés
                sont à votre disposition.
              </p>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">📝</span> Accompagnement personnalisé
                </h3>
                <p className="text-gray-600">
                  Chaque situation est unique. Nos helpers prennent le temps de comprendre
                  vos besoins et vous accompagnent pas à pas dans vos démarches.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Types d'accompagnement</h3>
              <div className="space-y-4">
                {missions.map((mission, index) => (
                  <motion.div
                    key={mission.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
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
            Besoin d'aide pour vos papiers ?
          </h3>
          <p className="text-gray-600 mb-6">
            Trouvez un helper pour vous accompagner dans vos démarches
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/creer-mission">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
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

export default Mairie;
