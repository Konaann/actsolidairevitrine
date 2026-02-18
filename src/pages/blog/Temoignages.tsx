import { motion } from 'framer-motion';

const temoignages = [
  {
    id: 1,
    name: 'Marie',
    age: 78,
    role: 'Demandeur',
    avatar: '👵',
    quote: 'Depuis que Lucas vient me voir chaque semaine, je me sens moins seule. Il m\'aide avec mon téléphone et on prend le thé ensemble. C\'est devenu comme un petit-fils pour moi.',
    mission: 'Aide informatique & Compagnie',
    location: 'Lyon 3ème',
    rating: 5,
  },
  {
    id: 2,
    name: 'Lucas',
    age: 22,
    role: 'Helper',
    avatar: '👨‍🎓',
    quote: 'J\'ai commencé pour arrondir mes fins de mois, mais j\'ai découvert tellement plus. Marie m\'a appris des recettes de sa région et me raconte ses souvenirs. C\'est un échange précieux.',
    mission: 'Aide informatique & Compagnie',
    location: 'Lyon 3ème',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jeanne',
    age: 82,
    role: 'Demandeur',
    avatar: '👩‍🦳',
    quote: 'Je n\'osais plus sortir faire mes courses seule. Maintenant, Sarah m\'accompagne tous les mardis. Elle est patiente et attentionnée. Je me sens en sécurité avec elle.',
    mission: 'Courses & Accompagnement',
    location: 'Bordeaux',
    rating: 5,
  },
  {
    id: 4,
    name: 'Thomas',
    age: 19,
    role: 'Helper',
    avatar: '👦',
    quote: 'Entre mes cours, j\'aide M. Bernard avec son jardin. Il me donne plein de conseils jardinage et on parle de tout et de rien. Ça me change de l\'université !',
    mission: 'Jardinage',
    location: 'Toulouse',
    rating: 5,
  },
  {
    id: 5,
    name: 'Henriette',
    age: 75,
    role: 'Demandeur',
    avatar: '👵',
    quote: 'L\'application est simple à utiliser même pour moi. J\'ai trouvé une jeune fille adorable qui m\'aide à remplir mes papiers administratifs. Quelle aide précieuse !',
    mission: 'Aide administrative',
    location: 'Nantes',
    rating: 5,
  },
  {
    id: 6,
    name: 'Emma',
    age: 24,
    role: 'Helper',
    avatar: '👩',
    quote: 'J\'ai découvert Act\'Solidaires pendant le confinement. Depuis, j\'ai aidé plus de 15 personnes différentes. Chaque rencontre est unique et m\'apporte beaucoup humainement.',
    mission: 'Missions diverses',
    location: 'Paris',
    rating: 5,
  },
];

const stats = [
  { value: '2,500+', label: 'Missions réalisées' },
  { value: '4.8/5', label: 'Note moyenne' },
  { value: '98%', label: 'Satisfaction' },
  { value: '850+', label: 'Helpers actifs' },
];

const Temoignages = () => {
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
            <span className="text-6xl mb-4 block">💬</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Témoignages</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ils ont vécu l'expérience Act'Solidaires et nous racontent
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temoignages.map((temoignage, index) => (
              <motion.article
                key={temoignage.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-3xl">
                    {temoignage.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{temoignage.name}, {temoignage.age} ans</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      temoignage.role === 'Helper' ? 'bg-emerald-100 text-emerald-700' : 'bg-cyan-100 text-cyan-700'
                    }`}>
                      {temoignage.role}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-600 italic mb-4 leading-relaxed">
                  "{temoignage.quote}"
                </blockquote>

                {/* Footer */}
                <div className="pt-4 border-t space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>📍</span> {temoignage.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>🎯</span> {temoignage.mission}
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(temoignage.rating)].map((_, i) => (
                      <span key={i} className="text-amber-400">★</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Vous aussi, partagez votre histoire !
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Votre témoignage peut inspirer d'autres personnes à rejoindre la communauté
            </p>
            <motion.button
              className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Envoyer mon témoignage
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Temoignages;
