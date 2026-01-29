import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const missions = [
  { icon: '🥖', title: 'Courses alimentaires', desc: 'Supermarché, boulangerie, épicerie de quartier' },
  { icon: '💊', title: 'Pharmacie', desc: 'Récupérer des médicaments avec ordonnance' },
  { icon: '📦', title: 'Colis', desc: 'Retirer ou envoyer des colis à La Poste' },
  { icon: '🧺', title: 'Pressing', desc: 'Déposer ou récupérer du linge au pressing' },
  { icon: '🐕', title: 'Animalerie', desc: 'Acheter de la nourriture ou accessoires pour animaux' },
  { icon: '🌸', title: 'Fleuriste', desc: 'Acheter des fleurs ou plantes' },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <span className="text-6xl mb-4 block">🛒</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Courses</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Faire les courses à votre place, rapidement et efficacement
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
                Vos courses livrées chez vous
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Difficile de se déplacer ? Manque de temps ou de mobilité ? Nos helpers se chargent
                de faire vos courses et de vous les livrer directement à domicile.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Vous préparez votre liste, le helper fait les achats dans le magasin de votre choix
                et vous rapporte tout. Simple, rapide et pratique !
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Courses faites selon votre liste précise</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Livraison à domicile incluse</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Ticket de caisse fourni pour transparence</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Types de courses</h3>
              <div className="space-y-4">
                {missions.map((mission, index) => (
                  <motion.div
                    key={mission.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
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
            Besoin de faire des courses ?
          </h3>
          <p className="text-gray-600 mb-6">
            Créez une mission et un helper s'en chargera pour vous
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/creer-mission">
              <motion.button
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
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

export default Courses;
