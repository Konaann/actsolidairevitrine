import { motion } from 'framer-motion';

const guides = [
  {
    id: 1,
    title: 'Guide du parfait Helper : de l\'inscription à la première mission',
    excerpt: 'Tout ce que vous devez savoir pour bien démarrer sur Act\'Solidaires et réussir vos premières missions.',
    steps: ['Créer son profil', 'Vérifier son identité', 'Trouver une mission', 'Premier contact', 'Réaliser la mission'],
    difficulty: 'Débutant',
    readTime: '10 min',
    icon: '🎯',
  },
  {
    id: 2,
    title: 'Comment bien rédiger une annonce de mission',
    excerpt: 'Les clés pour créer une annonce claire et attractive qui trouvera rapidement un helper.',
    steps: ['Titre accrocheur', 'Description détaillée', 'Tarif adapté', 'Disponibilités', 'Contact'],
    difficulty: 'Débutant',
    readTime: '5 min',
    icon: '✍️',
  },
  {
    id: 3,
    title: 'Sécurité et bonnes pratiques',
    excerpt: 'Nos recommandations pour des échanges sereins et sécurisés entre helpers et bénéficiaires.',
    steps: ['Vérifier les profils', 'Premier rendez-vous', 'Communication', 'Paiement sécurisé', 'Signalement'],
    difficulty: 'Important',
    readTime: '8 min',
    icon: '🔒',
  },
  {
    id: 4,
    title: 'Aide informatique : accompagner les seniors dans le numérique',
    excerpt: 'Conseils et méthodes pour aider efficacement les personnes âgées avec la technologie.',
    steps: ['Évaluer le niveau', 'Vocabulaire simple', 'Patience', 'Exercices pratiques', 'Support visuel'],
    difficulty: 'Intermédiaire',
    readTime: '12 min',
    icon: '💻',
  },
  {
    id: 5,
    title: 'Gérer son planning et ses disponibilités',
    excerpt: 'Optimisez votre temps et vos missions grâce aux outils de l\'application.',
    steps: ['Calendrier intégré', 'Notifications', 'Récurrence', 'Annulations', 'Multi-missions'],
    difficulty: 'Débutant',
    readTime: '6 min',
    icon: '📅',
  },
  {
    id: 6,
    title: 'Créer du lien : au-delà de la mission',
    excerpt: 'Comment développer une relation de confiance et d\'amitié avec les personnes que vous aidez.',
    steps: ['Écoute active', 'Partage', 'Régularité', 'Respect', 'Limites saines'],
    difficulty: 'Avancé',
    readTime: '7 min',
    icon: '❤️',
  },
];

const Guides = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-500 to-indigo-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <span className="text-6xl mb-4 block">📖</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Guides</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Tutoriels et conseils pour tirer le meilleur d'Act'Solidaires
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.article
                key={guide.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{guide.icon}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      guide.difficulty === 'Débutant' ? 'bg-green-100 text-green-700' :
                      guide.difficulty === 'Intermédiaire' ? 'bg-yellow-100 text-yellow-700' :
                      guide.difficulty === 'Avancé' ? 'bg-purple-100 text-purple-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {guide.difficulty}
                    </span>
                  </div>

                  <h2 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-cyan-600 transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{guide.excerpt}</p>

                  {/* Steps preview */}
                  <div className="space-y-2 mb-4">
                    {guide.steps.slice(0, 3).map((step, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium">
                          {i + 1}
                        </span>
                        {step}
                      </div>
                    ))}
                    {guide.steps.length > 3 && (
                      <p className="text-xs text-gray-400 pl-7">+ {guide.steps.length - 3} autres étapes</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-xs text-gray-400">{guide.readTime} de lecture</span>
                    <button className="text-cyan-600 text-sm font-medium hover:underline">
                      Lire le guide →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Vous avez une question ?
          </h2>
          <p className="text-gray-600 mb-6">
            Notre équipe est là pour vous aider. Consultez notre FAQ ou contactez-nous directement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Consulter la FAQ
            </motion.button>
            <motion.button
              className="bg-white text-gray-700 px-8 py-3 rounded-xl font-semibold border border-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nous contacter
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guides;
