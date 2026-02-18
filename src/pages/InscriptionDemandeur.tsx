import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const InscriptionDemandeur = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const etapes = [
    { num: '1', icon: '📲', title: "Télécharge l'app", desc: "Installe Act'Solidaires gratuitement sur ton téléphone Android." },
    { num: '2', icon: '👤', title: 'Crée ton compte', desc: 'Renseigne tes informations personnelles et tes besoins habituels en quelques minutes.' },
    { num: '3', icon: '📢', title: 'Publie une mission', desc: 'Décris le service dont tu as besoin, la date, le lieu et le budget que tu proposes.' },
    { num: '4', icon: '🤝', title: 'Choisis ton helper', desc: 'Consulte les profils et avis des helpers qui postulent et sélectionne celui qui te convient.' },
    { num: '5', icon: '✅', title: 'Mission réalisée !', desc: 'Valide la mission une fois effectuée et laisse un avis pour aider la communauté.' },
  ];

  const typesAide = [
    { icon: '🛒', label: 'Courses & livraisons' },
    { icon: '💻', label: 'Aide informatique' },
    { icon: '🚗', label: 'Accompagnement & sorties' },
    { icon: '📋', label: 'Démarches administratives' },
    { icon: '🏠', label: 'Ménage & entretien' },
    { icon: '🌳', label: 'Jardinage' },
    { icon: '🎨', label: 'Peinture & bricolage' },
    { icon: '📚', label: 'Aide aux devoirs' },
    { icon: '⚽', label: 'Activités & Sport' },
  ];

  const avantages = [
    { icon: '🛡️', title: 'Helpers vérifiés', desc: "Chaque helper passe par une vérification d'identité. Tu peux aussi consulter leurs avis avant de choisir." },
    { icon: '💳', title: 'Paiement sécurisé', desc: 'Le montant est bloqué à la création de la mission et versé au helper uniquement après validation.' },
    { icon: '🌍', title: 'Partout en France', desc: 'Des helpers disponibles dans toute la France métropolitaine, près de chez toi.' },
    { icon: '⏰', title: 'Flexible', desc: 'Tu publies une mission quand tu en as besoin, sans abonnement ni engagement à long terme.' },
    { icon: '💬', title: 'Messagerie intégrée', desc: "Communique directement avec les helpers via la messagerie sécurisée de l'application." },
    { icon: '🆘', title: 'Support réactif', desc: 'Notre équipe est disponible pour t\'aider en cas de question ou de problème.' },
  ];

  const faqs = [
    { q: "Qui peut utiliser Act'Solidaires comme demandeur ?", a: "Act'Solidaires s'adresse principalement aux personnes âgées ou à mobilité réduite qui ont besoin d'aide au quotidien. Les proches aidants peuvent aussi créer un compte pour leur proche." },
    { q: "Est-ce payant de s'inscrire ?", a: "L'inscription est totalement gratuite. Tu ne paies que lorsque tu publies une mission avec une rémunération pour le helper." },
    { q: 'Comment choisir le bon helper ?', a: "Quand tu publies une mission, les helpers disponibles près de chez toi peuvent postuler. Tu consultes leurs profils, leurs avis et leur expérience, puis tu choisis celui qui te convient le mieux." },
    { q: 'Est-ce que je peux annuler une mission ?', a: "Oui. Tu peux annuler depuis l'application. Une annulation plus de 24h avant la mission est remboursée intégralement. Des frais peuvent s'appliquer en cas d'annulation tardive." },
    { q: 'Mes données personnelles sont-elles protégées ?', a: 'Oui, toutes tes données sont traitées conformément au RGPD. Consulte notre politique de confidentialité pour en savoir plus.' },
    { q: 'Puis-je demander le même helper à chaque fois ?', a: "Absolument ! Si tu es satisfait d'un helper, tu peux le solliciter directement pour tes prochaines missions via ton historique." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center text-white">
            <span className="text-7xl mb-6 block">🙋</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Devenir Demandeur</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Trouve facilement de l'aide pour tes besoins du quotidien grâce à des jeunes de confiance près de chez toi.
            </p>
            <Link to="/telecharger" className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-all">
              <span>📲</span> Télécharger l'application
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Types d'aide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">De quoi as-tu besoin ?</h2>
            <p className="text-gray-600 text-lg">Nous couvrons un large éventail de services du quotidien</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {typesAide.map((type, i) => (
              <motion.div key={type.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 bg-cyan-50 border border-cyan-100 px-5 py-3 rounded-full text-cyan-800 font-medium">
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
            <p className="text-gray-600 text-lg">Trouver de l'aide n'a jamais été aussi simple</p>
          </motion.div>
          <div className="space-y-4">
            {etapes.map((etape, i) => (
              <motion.div key={etape.num} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Pourquoi choisir Act'Solidaires ?</h2>
            <p className="text-gray-600 text-lg">Une plateforme pensée pour ta tranquillité d'esprit</p>
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
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="text-5xl mb-6 block">💙</span>
          <h2 className="text-3xl font-bold mb-4">Prêt à trouver de l'aide ?</h2>
          <p className="text-white/90 text-lg mb-8">Télécharge l'application et publie ta première mission en quelques minutes.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/telecharger" className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-all">
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

export default InscriptionDemandeur;
