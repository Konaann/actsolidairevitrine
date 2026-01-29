import { motion } from 'framer-motion';

const features = [
  {
    icon: '💬',
    title: 'Messagerie sécurisée',
    description: 'Échangez en toute sécurité avec les autres utilisateurs grâce à notre messagerie intégrée. Vos conversations sont privées et protégées.',
    color: 'bg-blue-100',
  },
  {
    icon: '📍',
    title: 'Géolocalisation',
    description: 'Trouvez des missions ou des helpers près de chez vous grâce à la géolocalisation. Filtrez par distance pour des échanges locaux.',
    color: 'bg-emerald-100',
  },
  {
    icon: '✅',
    title: 'Profils vérifiés',
    description: 'Tous les utilisateurs passent par un processus de vérification. Identité confirmée pour plus de confiance et de sécurité.',
    color: 'bg-cyan-100',
  },
  {
    icon: '💳',
    title: 'Paiements sécurisés',
    description: 'Réglez vos missions directement via l\'application. Transactions sécurisées et traçabilité complète des paiements.',
    color: 'bg-purple-100',
  },
  {
    icon: '⭐',
    title: 'Système de notation',
    description: 'Évaluez et consultez les avis après chaque mission. La notation mutuelle garantit la qualité des échanges.',
    color: 'bg-amber-100',
  },
  {
    icon: '📱',
    title: 'Application mobile',
    description: 'Disponible sur iOS et Android, gérez vos missions où que vous soyez. Notifications en temps réel pour ne rien manquer.',
    color: 'bg-pink-100',
  },
  {
    icon: '📅',
    title: 'Calendrier intégré',
    description: 'Planifiez vos missions avec le calendrier intégré. Visualisez vos disponibilités et celles des autres utilisateurs.',
    color: 'bg-orange-100',
  },
  {
    icon: '🔔',
    title: 'Notifications intelligentes',
    description: 'Recevez des alertes personnalisées pour les nouvelles missions correspondant à vos critères et préférences.',
    color: 'bg-indigo-100',
  },
];

const Fonctionnalites = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fonctionnalités</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Découvrez toutes les fonctionnalités qui rendent Act'Solidaires unique
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Une application complète
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Act'Solidaires regroupe tout ce dont vous avez besoin pour créer, trouver et gérer vos missions d'entraide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Détails des fonctionnalités */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Créez et gérez vos missions facilement
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Création en quelques clics</h4>
                    <p className="text-gray-600">Décrivez votre besoin, choisissez une date et un tarif, c'est tout !</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Suivi en temps réel</h4>
                    <p className="text-gray-600">Suivez l'avancement de vos missions et recevez des notifications.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Historique complet</h4>
                    <p className="text-gray-600">Retrouvez toutes vos missions passées et vos évaluations.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-3xl p-8"
            >
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📋</span>
                    <span className="font-semibold text-gray-800">Nouvelle mission créée</span>
                  </div>
                  <p className="text-sm text-gray-600">Aide aux courses - 15€</p>
                  <p className="text-xs text-gray-400 mt-1">Il y a 2 minutes</p>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">✅</span>
                    <span className="font-semibold text-gray-800">Mission acceptée</span>
                  </div>
                  <p className="text-sm text-gray-600">Marie a accepté votre mission</p>
                  <p className="text-xs text-gray-400 mt-1">Il y a 10 minutes</p>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">⭐</span>
                    <span className="font-semibold text-gray-800">Nouvel avis reçu</span>
                  </div>
                  <p className="text-sm text-gray-600">"Très serviable et ponctuel !"</p>
                  <p className="text-xs text-gray-400 mt-1">Il y a 1 heure</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à découvrir l'application ?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Testez toutes les fonctionnalités avec notre prototype interactif
            </p>
            <a
              href="https://www.figma.com/proto/9w0DEX0hp6CrjCmVBAC9XI/Untitled?node-id=0-1&t=h2Ze84q2UZyiKx5H-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Découvrir l'application
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Fonctionnalites;
