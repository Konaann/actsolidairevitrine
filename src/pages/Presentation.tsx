import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Presentation = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-500 to-emerald-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Présentation de l'entreprise
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Découvrez Act'Solidaires, l'application d'entraide intergénérationnelle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section ref={ref} className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Notre Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                <strong>Act'solidaires</strong> est une application d'entraide intergénérationnelle qui permet aux jeunes,
                aux personnes âgées et aux particuliers en général de se soutenir mutuellement.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Grâce à des missions volontaires ou rémunérées, les jeunes peuvent répondre aux besoins
                des personnes âgées : accompagnement, courses, aide administrative, et bien plus encore.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                L'application facilite la mise en relation rapide et sécurisée entre les utilisateurs,
                favorisant ainsi des échanges solidaires et renforçant les liens entre générations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Solidarité</h3>
                    <p className="text-gray-600">Créer des liens forts entre les générations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Sécurité</h3>
                    <p className="text-gray-600">Échanges vérifiés et sécurisés</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Simplicité</h3>
                    <p className="text-gray-600">Une interface intuitive pour tous</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types de missions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Nos types de missions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🛒', title: 'Courses', desc: 'Aide aux courses quotidiennes' },
              { icon: '🚗', title: 'Accompagnement', desc: 'Transport et compagnie' },
              { icon: '📋', title: 'Administratif', desc: 'Aide aux démarches' },
              { icon: '💻', title: 'Informatique', desc: 'Assistance numérique' },
              { icon: '🏠', title: 'Ménage', desc: 'Petits travaux domestiques' },
              { icon: '🌳', title: 'Jardinage', desc: 'Entretien extérieur' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
