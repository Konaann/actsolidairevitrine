import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FaqDemandeur = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Comment créer une mission ?',
      answer: 'Pour créer une mission, rendez-vous sur la page "Créer une mission", remplissez le formulaire avec les détails de votre besoin (titre, catégorie, description, date, lieu, rémunération) et publiez votre annonce. Les helpers à proximité recevront une notification.',
    },
    {
      question: 'Comment choisir un helper ?',
      answer: 'Lorsqu\'un helper postule pour votre mission, vous pouvez consulter son profil, ses avis et son expérience. Vous êtes libre de choisir le helper qui vous convient le mieux en fonction de ces critères.',
    },
    {
      question: 'Comment fonctionne le paiement ?',
      answer: 'Le paiement est sécurisé via notre plateforme. Vous payez lors de la création de la mission, le montant est bloqué et versé au helper uniquement une fois la mission validée par vous.',
    },
    {
      question: 'Que faire si je dois annuler une mission ?',
      answer: 'Vous pouvez annuler une mission depuis votre espace "Mes missions". Si l\'annulation est faite plus de 24h avant la mission, vous êtes intégralement remboursé. En cas d\'annulation tardive, des frais peuvent s\'appliquer.',
    },
    {
      question: 'Comment noter un helper ?',
      answer: 'Après chaque mission terminée, vous recevez une notification pour évaluer le helper. Vous pouvez donner une note de 1 à 5 étoiles et laisser un commentaire. Cela aide les autres utilisateurs et encourage les bons helpers.',
    },
    {
      question: 'Puis-je demander un helper spécifique ?',
      answer: 'Oui ! Si vous avez déjà travaillé avec un helper et que vous souhaitez le solliciter à nouveau, vous pouvez lui envoyer une demande directe depuis votre historique de missions.',
    },
    {
      question: 'Quels types de missions puis-je créer ?',
      answer: 'Vous pouvez créer des missions dans plusieurs catégories : courses, accompagnement (rendez-vous médicaux, sorties), aide administrative, informatique, ménage, jardinage, bricolage, et bien d\'autres.',
    },
    {
      question: 'Comment contacter le support ?',
      answer: 'Vous pouvez nous contacter via le formulaire de contact sur le site, par email à support@actsolidaires.fr, ou via le chat intégré à l\'application. Notre équipe répond généralement sous 24h.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-500 to-indigo-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <span className="text-6xl mb-4 block">❓</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">FAQ Demandeur</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-cyan-500"
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-3xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Vous n'avez pas trouvé votre réponse ?</h3>
            <p className="mb-6 text-white/90">Notre équipe est là pour vous aider</p>
            <a
              href="#contact"
              className="inline-block bg-white text-cyan-600 font-bold px-8 py-3 rounded-full hover:shadow-lg transition-all"
            >
              Contactez-nous
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FaqDemandeur;
