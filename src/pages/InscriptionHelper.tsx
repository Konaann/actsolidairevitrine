import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const InscriptionHelper = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const etapes = [
    { num: '1', icon: '📲', title: 'Télécharge l\'app', desc: 'Disponible sur Android. Installe Act\'Solidaires gratuitement sur ton téléphone.' },
    { num: '2', icon: '📝', title: 'Crée ton profil', desc: 'Renseigne tes informations, tes disponibilités et les types de missions qui t\'intéressent.' },
    { num: '3', icon: '✅', title: 'Vérifie ton identité', desc: 'Un rapide processus de vérification pour garantir la confiance de la communauté.' },
    { num: '4', icon: '🎯', title: 'Postule aux missions', desc: 'Parcours les annonces près de chez toi et propose ta candidature en un clic.' },
    { num: '5', icon: '💰', title: 'Perçois tes gains', desc: 'Après chaque mission validée, tes gains sont versés directement sur ton compte.' },
  ];

  const avantages = [
    { icon: '💸', title: 'Revenus complémentaires', desc: 'Gagne de l\'argent à ton rythme, entre tes cours ou ton travail.' },
    { icon: '⏰', title: '100% flexible', desc: 'Tu choisis tes horaires et les missions qui te conviennent. Aucun engagement.' },
    { icon: '❤️', title: 'Impact humain', desc: 'Aide des personnes âgées de ton quartier et crée des liens intergénérationnels uniques.' },
    { icon: '⭐', title: 'Réputation valorisée', desc: 'Les avis et notes te permettent de construire une vraie réputation et d\'accéder à plus de missions.' },
    { icon: '🛡️', title: 'Plateforme sécurisée', desc: 'Paiements sécurisés, profils vérifiés et support disponible en cas de besoin.' },
    { icon: '📈', title: 'Évolution possible', desc: 'Plus tu accumules de missions et d\'avis positifs, plus tu deviens visible et sollicité.' },
  ];

  const typesMissions = [
    { icon: '🛒', label: 'Courses' },
    { icon: '💻', label: 'Informatique' },
    { icon: '🚗', label: 'Accompagnement' },
    { icon: '📋', label: 'Administratif' },
    { icon: '🏠', label: 'Ménage' },
    { icon: '🌳', label: 'Jardinage' },
    { icon: '🎨', label: 'Peinture' },
    { icon: '📚', label: 'Aide aux devoirs' },
    { icon: '⚽', label: 'Activités & Sport' },
  ];

  const faqs = [
    { q: 'Quel âge faut-il avoir pour devenir helper ?', a: 'Il faut avoir au moins 16 ans pour s\'inscrire comme helper. Les mineurs doivent avoir l\'accord d\'un parent ou tuteur légal.' },
    { q: 'Est-ce que l\'inscription est gratuite ?', a: 'Oui, l\'inscription est totalement gratuite. Act\'Solidaires ne prend aucun frais à l\'inscription. Une commission est prélevée sur chaque mission réalisée.' },
    { q: 'Comment sont fixés les prix des missions ?', a: 'C\'est le demandeur qui fixe la rémunération lors de la création de la mission. Tu es libre d\'accepter ou de refuser selon le tarif proposé.' },
    { q: 'Quand est-ce que je reçois mes gains ?', a: 'Tes gains sont versés dans les 24-48h après validation de la mission par le demandeur. Tu peux suivre tes gains en temps réel dans l\'application.' },
    { q: 'Puis-je choisir mes missions ?', a: 'Absolument ! Tu parcours les annonces disponibles près de chez toi et tu postules uniquement aux missions qui t\'intéressent.' },
    { q: 'Que faire en cas de problème avec un demandeur ?', a: 'Notre équipe de support est disponible pour gérer tout litige. Tu peux nous contacter directement depuis l\'application ou via la page contact.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center text-white">
            <span className="text-7xl mb-6 block">🤝</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Devenir Helper</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Aide les personnes âgées de ton quartier, crée du lien et gagne de l'argent à ton rythme.
            </p>
            <Link to="/telecharger" className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-all">
              <span>📲</span> Télécharger l'application
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Types de missions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Quelles missions peux-tu réaliser ?</h2>
            <p className="text-gray-600 text-lg">Choisis les domaines qui correspondent à tes compétences et envies</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {typesMissions.map((type, i) => (
              <motion.div key={type.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-5 py-3 rounded-full text-emerald-800 font-medium">
                <span className="text-xl">{type.icon}</span>
                {type.label}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Comment ça marche ?</h2>
            <p className="text-gray-600 text-lg">En 5 étapes simples, tu peux commencer à aider</p>
          </motion.div>
          <div className="space-y-4">
            {etapes.map((etape, i) => (
              <motion.div key={etape.num} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {etape.num}
                </div>
                <span className="text-3xl">{etape.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{etape.title}</h3>
                  <p className="text-gray-600">{etape.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Pourquoi devenir helper ?</h2>
            <p className="text-gray-600 text-lg">Des avantages concrets pour toi</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {avantages.map((av, i) => (
              <motion.div key={av.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6">
                <span className="text-4xl mb-4 block">{av.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{av.title}</h3>
                <p className="text-gray-600 text-sm">{av.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Questions fréquentes</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <span className={`text-cyan-600 transition-transform duration-200 flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-teal-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="text-5xl mb-6 block">🚀</span>
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="text-white/90 text-lg mb-8">Télécharge l'application et rejoins des centaines de helpers actifs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/telecharger" className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-all">
              Télécharger l'app
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all">
              Une question ?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InscriptionHelper;
