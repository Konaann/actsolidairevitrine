import { motion } from 'framer-motion';

const evenements = [
  {
    id: 1,
    title: 'Forum des Associations 2025',
    description: 'Retrouvez-nous au Forum des Associations pour découvrir Act\'Solidaires, rencontrer notre équipe et vous inscrire sur place.',
    date: '15 février 2025',
    time: '10h00 - 18h00',
    location: 'Place de la Mairie, Lyon',
    type: 'Événement',
    status: 'À venir',
    icon: '🎪',
  },
  {
    id: 2,
    title: 'Atelier "Premiers pas sur l\'appli"',
    description: 'Atelier gratuit pour apprendre à utiliser Act\'Solidaires. Ouvert aux seniors et aux futurs helpers.',
    date: '22 février 2025',
    time: '14h00 - 16h00',
    location: 'Médiathèque Jean Macé, Lyon',
    type: 'Atelier',
    status: 'À venir',
    icon: '📱',
  },
  {
    id: 3,
    title: 'Café intergénérationnel',
    description: 'Un moment convivial pour que helpers et bénéficiaires se rencontrent autour d\'un café et de petits gâteaux.',
    date: '1er mars 2025',
    time: '15h00 - 17h00',
    location: 'Centre social des Pentes, Lyon',
    type: 'Rencontre',
    status: 'À venir',
    icon: '☕',
  },
  {
    id: 4,
    title: 'Partenariat avec la CARSAT',
    description: 'Signature d\'un partenariat avec la Caisse d\'Assurance Retraite pour promouvoir l\'entraide auprès des retraités.',
    date: '10 janvier 2025',
    time: '',
    location: 'Lyon',
    type: 'Partenariat',
    status: 'Passé',
    icon: '🤝',
  },
  {
    id: 5,
    title: 'Convention avec la Mairie',
    description: 'La ville de Lyon s\'engage à promouvoir Act\'Solidaires dans les maisons de quartier et CCAS.',
    date: '5 janvier 2025',
    time: '',
    location: 'Hôtel de Ville, Lyon',
    type: 'Partenariat',
    status: 'Passé',
    icon: '🏛️',
  },
];

const partenaires = [
  { name: 'Mairie de Lyon', logo: '🏛️' },
  { name: 'CARSAT', logo: '🏢' },
  { name: 'CCAS', logo: '🤲' },
  { name: 'Université Lyon 2', logo: '🎓' },
  { name: 'France Services', logo: '🇫🇷' },
  { name: 'Les Petits Frères des Pauvres', logo: '❤️' },
];

const Evenements = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-amber-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <span className="text-6xl mb-4 block">🎉</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Événements & Partenariats</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Retrouvez-nous lors de nos événements et découvrez nos partenaires
            </p>
          </motion.div>
        </div>
      </section>

      {/* Événements à venir */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-800 mb-8"
          >
            Événements à venir
          </motion.h2>

          <div className="space-y-6">
            {evenements.filter(e => e.status === 'À venir').map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow"
              >
                {/* Date */}
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-2xl p-4">
                    <div className="text-3xl mb-1">{event.icon}</div>
                    <div className="text-xs font-medium">{event.date.split(' ')[0]}</div>
                    <div className="text-xs">{event.date.split(' ').slice(1).join(' ')}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      event.type === 'Événement' ? 'bg-purple-100 text-purple-700' :
                      event.type === 'Atelier' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {event.type}
                    </span>
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                      {event.status}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-800 text-xl mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    {event.time && (
                      <div className="flex items-center gap-1">
                        <span>🕐</span> {event.time}
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <span>📍</span> {event.location}
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="flex-shrink-0 flex items-center">
                  <motion.button
                    className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    S'inscrire
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos partenaires</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ils nous font confiance et nous accompagnent dans notre mission de solidarité intergénérationnelle
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partenaires.map((partenaire, index) => (
              <motion.div
                key={partenaire.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors"
              >
                <span className="text-4xl mb-3 block">{partenaire.logo}</span>
                <span className="text-sm text-gray-600 font-medium">{partenaire.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Événements passés */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-gray-800 mb-8"
          >
            Événements & partenariats récents
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {evenements.filter(e => e.status === 'Passé').map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{event.icon}</span>
                  <div>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {event.type}
                    </span>
                    <h3 className="font-bold text-gray-800 mt-2 mb-1">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                    <p className="text-xs text-gray-400">{event.date} • {event.location}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Devenir partenaire
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Vous êtes une collectivité, une association ou une entreprise ? Rejoignez notre réseau de partenaires !
            </p>
            <motion.button
              className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nous contacter
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Evenements;
