import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const links = [
  {
    icon: '🎯',
    title: 'Présentation',
    desc: "Découvrez Act'Solidaires, notre mission et nos valeurs.",
    path: '/presentation',
    color: 'from-violet-500 to-purple-500',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    text: 'text-violet-700',
  },
  {
    icon: '🙋',
    title: "Demander de l'aide",
    desc: 'Comment publier une mission et trouver un helper près de chez vous.',
    path: '/faq-demandeur',
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
    text: 'text-cyan-700',
  },
  {
    icon: '🤝',
    title: 'Devenir Helper',
    desc: 'Aidez votre quartier et gagnez de l'argent à votre rythme.',
    path: '/inscription-helper',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    text: 'text-emerald-700',
  },
  {
    icon: '👤',
    title: 'Devenir Demandeur',
    desc: 'Inscrivez-vous et accédez à des helpers vérifiés près de chez vous.',
    path: '/inscription-demandeur',
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    text: 'text-orange-700',
  },
  {
    icon: '📖',
    title: 'Guides pratiques',
    desc: 'Conseils et tutoriels pour bien démarrer avec Act'Solidaires.',
    path: '/blog/guides',
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50',
    border: 'border-pink-100',
    text: 'text-pink-700',
  },
];

const QuickLinks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Tout ce qu'il vous faut</h2>
          <p className="text-gray-500 text-lg">Accédez rapidement aux informations essentielles</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {links.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <Link
                to={link.path}
                className={`flex flex-col h-full ${link.bg} border ${link.border} rounded-2xl p-6 group transition-all duration-300 hover:shadow-lg`}
              >
                <span className="text-4xl mb-4">{link.icon}</span>
                <h3 className={`font-bold text-gray-900 mb-2 text-base group-hover:${link.text} transition-colors`}>
                  {link.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{link.desc}</p>
                <div className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${link.text}`}>
                  En savoir plus
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
