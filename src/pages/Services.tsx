import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'aide',
    icon: '🤝',
    title: 'Aide à domicile',
    description: 'Accompagnement et assistance pour les tâches du quotidien',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-50',
    link: '/services/aide',
  },
  {
    id: 'courses',
    icon: '🛒',
    title: 'Courses',
    description: 'Faire les courses alimentaires ou achats divers',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    link: '/services/courses',
  },
  {
    id: 'reparation',
    icon: '🔧',
    title: 'Réparation',
    description: 'Petits travaux de bricolage et réparations domestiques',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
    link: '/services/reparation',
  },
  {
    id: 'devoirs',
    icon: '📚',
    title: 'Aide aux devoirs',
    description: 'Soutien scolaire et accompagnement éducatif',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50',
    link: '/services/devoirs',
  },
  {
    id: 'peinture',
    icon: '🎨',
    title: 'Peinture',
    description: 'Travaux de peinture intérieure et extérieure',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    link: '/services/peinture',
  },
  {
    id: 'nettoyage',
    icon: '🧹',
    title: 'Nettoyage',
    description: 'Ménage, rangement et entretien du domicile',
    color: 'from-sky-500 to-cyan-500',
    bgColor: 'bg-sky-50',
    link: '/services/nettoyage',
  },
  {
    id: 'informatique',
    icon: '💻',
    title: 'Informatique',
    description: 'Aide numérique, installation et dépannage',
    color: 'from-slate-600 to-gray-700',
    bgColor: 'bg-slate-50',
    link: '/services/informatique',
  },
  {
    id: 'mairie',
    icon: '🏛️',
    title: 'Démarches administratives',
    description: 'Accompagnement mairie et formalités administratives',
    color: 'from-blue-600 to-indigo-600',
    bgColor: 'bg-blue-50',
    link: '/services/mairie',
  },
  {
    id: 'activite',
    icon: '⚽',
    title: 'Activités & Sport',
    description: 'Accompagnement pour activités sportives et loisirs',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    link: '/services/activite',
  },
];

const Services = () => {
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
              Nos Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Découvrez tous les services proposés par notre communauté de helpers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Une aide pour chaque besoin
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nos helpers sont disponibles pour vous accompagner dans de nombreuses tâches du quotidien.
              Sélectionnez un service pour en savoir plus.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={service.link}>
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className={`inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      En savoir plus
                      <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Besoin d'aide ?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Créez votre mission en quelques clics et trouvez un helper près de chez vous
            </p>
            <Link to="/creer-mission">
              <motion.button
                className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Créer une mission
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
