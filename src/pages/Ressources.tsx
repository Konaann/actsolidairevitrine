import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Ressources = () => {
  const guides = [
    {
      icon: '📱',
      title: 'Premiers pas avec Act\'Solidaires',
      desc: 'Apprenez à créer votre compte, configurer votre profil et naviguer dans l\'application.',
      tag: 'Débutant',
      tagColor: 'bg-emerald-100 text-emerald-700',
    },
    {
      icon: '🙋',
      title: 'Comment demander de l\'aide',
      desc: 'Créez votre première mission en quelques étapes simples et trouvez un helper rapidement.',
      tag: 'Demandeur',
      tagColor: 'bg-cyan-100 text-cyan-700',
    },
    {
      icon: '🤝',
      title: 'Devenir helper : le guide complet',
      desc: 'Tout ce qu\'il faut savoir pour s\'inscrire, postuler à des missions et gagner de l\'argent.',
      tag: 'Helper',
      tagColor: 'bg-purple-100 text-purple-700',
    },
    {
      icon: '💳',
      title: 'Comprendre les paiements',
      desc: 'Fonctionnement des paiements sécurisés, retraits de gains et suivi des transactions.',
      tag: 'Finance',
      tagColor: 'bg-amber-100 text-amber-700',
    },
    {
      icon: '⭐',
      title: 'Système de notation et avis',
      desc: 'Comment fonctionnent les évaluations et pourquoi elles sont importantes pour la communauté.',
      tag: 'Communauté',
      tagColor: 'bg-rose-100 text-rose-700',
    },
    {
      icon: '🔒',
      title: 'Sécurité et confidentialité',
      desc: 'Nos mesures pour protéger vos données personnelles et garantir des échanges sûrs.',
      tag: 'Sécurité',
      tagColor: 'bg-blue-100 text-blue-700',
    },
  ];

  const documents = [
    { icon: '📜', title: 'Conditions Générales de Vente', path: '/apropos/cgv' },
    { icon: '⚖️', title: 'Mentions légales', path: '/apropos/mentions-legales' },
    { icon: '🔐', title: 'Politique de confidentialité', path: '/apropos/cgv' },
    { icon: '📋', title: 'Charte de la communauté', path: '/apropos/mission' },
  ];

  const faqPopulaires = [
    { q: 'Comment créer un compte ?', a: 'Téléchargez l\'application et suivez les étapes d\'inscription. C\'est rapide et gratuit.' },
    { q: 'Les missions sont-elles rémunérées ?', a: 'Oui, le demandeur fixe une rémunération lors de la création de la mission. Certaines missions peuvent aussi être bénévoles.' },
    { q: 'Comment sont vérifiés les helpers ?', a: 'Chaque helper passe par un processus de vérification d\'identité. Les avis et notes permettent aussi de garantir la qualité.' },
    { q: 'Que faire en cas de problème ?', a: 'Contactez notre support via l\'application ou la page contact. Nous intervenons rapidement pour résoudre tout litige.' },
    { q: 'L\'application est-elle disponible partout ?', a: 'Act\'Solidaires est disponible dans toute la France métropolitaine. Nous nous étendons progressivement.' },
  ];

  const liens = [
    {
      icon: '🎯',
      title: 'Mission et impact',
      desc: 'Découvrez notre vision et nos engagements',
      path: '/apropos/mission',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: '⚙️',
      title: 'Fonctionnalités',
      desc: 'Explorez toutes les fonctionnalités de l\'app',
      path: '/apropos/fonctionnalites',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: '📰',
      title: 'Blog',
      desc: 'Actualités, témoignages et événements',
      path: '/blog',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: '💬',
      title: 'Contactez-nous',
      desc: 'Une question ? Notre équipe est là pour vous',
      path: '/contact',
      color: 'from-emerald-500 to-green-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <span className="text-7xl mb-6 block">📚</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Ressources
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Guides, documents et tout ce dont vous avez besoin pour profiter au maximum d'Act'Solidaires
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Guides et tutoriels</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Tout savoir pour bien utiliser la plateforme</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{guide.icon}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${guide.tagColor}`}>
                    {guide.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{guide.desc}</p>
                <div className="mt-4 flex items-center text-cyan-600 text-sm font-medium">
                  Lire le guide
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Populaires */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Questions fréquentes</h2>
            <p className="text-gray-600 text-lg">Les réponses aux questions les plus posées</p>
          </motion.div>

          <div className="space-y-4">
            {faqPopulaires.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <h4 className="font-bold text-gray-900 mb-2 flex items-start gap-3">
                  <span className="w-7 h-7 bg-gradient-to-br from-cyan-500 to-emerald-500 text-white rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">?</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed ml-10">{faq.a}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <Link
              to="/faq-demandeur"
              className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:underline"
            >
              Voir toutes les FAQ
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Documents officiels</h2>
            <p className="text-gray-600 text-lg">Consultez nos documents légaux et réglementaires</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={doc.path}
                  className="block bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all group text-center"
                >
                  <span className="text-4xl mb-3 block">{doc.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-sm group-hover:text-cyan-600 transition-colors">
                    {doc.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens rapides */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Liens utiles</h2>
            <p className="text-gray-600 text-lg">Accédez rapidement aux pages importantes</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {liens.map((lien, index) => (
              <motion.div
                key={lien.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={lien.path}
                  className="block group"
                >
                  <div className={`bg-gradient-to-br ${lien.color} rounded-2xl p-6 text-white hover:scale-105 transition-transform`}>
                    <span className="text-4xl mb-4 block">{lien.icon}</span>
                    <h3 className="text-lg font-bold mb-1">{lien.title}</h3>
                    <p className="text-white/80 text-sm">{lien.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Téléchargement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-10 md:p-14 text-center text-white"
          >
            <span className="text-5xl mb-6 block">🚀</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à commencer ?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Téléchargez l'application et rejoignez la communauté d'entraide intergénérationnelle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/telecharger"
                className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Télécharger l'app
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Ressources;
