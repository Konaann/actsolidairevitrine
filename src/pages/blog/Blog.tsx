import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'Comment l\'entraide intergénérationnelle change nos quartiers',
    excerpt: 'Découvrez comment les liens entre jeunes et seniors transforment la vie de nos communautés locales.',
    category: 'Témoignages',
    date: '15 janvier 2025',
    image: '🏘️',
    readTime: '5 min',
  },
  {
    id: 2,
    title: 'Guide : Réussir sa première mission comme helper',
    excerpt: 'Tous nos conseils pour bien démarrer et créer une relation de confiance avec les personnes aidées.',
    category: 'Guides',
    date: '12 janvier 2025',
    image: '📖',
    readTime: '8 min',
  },
  {
    id: 3,
    title: 'Act\'Solidaires partenaire du Forum des Associations 2025',
    excerpt: 'Retrouvez-nous au Forum des Associations pour découvrir notre projet et rencontrer notre équipe.',
    category: 'Événements',
    date: '10 janvier 2025',
    image: '🎪',
    readTime: '3 min',
  },
  {
    id: 4,
    title: 'Marie, 78 ans : "Les jeunes m\'ont redonné le sourire"',
    excerpt: 'Le témoignage émouvant de Marie qui a retrouvé goût à la vie grâce aux visites régulières de ses helpers.',
    category: 'Témoignages',
    date: '8 janvier 2025',
    image: '💬',
    readTime: '6 min',
  },
  {
    id: 5,
    title: 'Les 10 missions les plus demandées sur Act\'Solidaires',
    excerpt: 'Courses, informatique, compagnie... Découvrez les services les plus plébiscités par nos utilisateurs.',
    category: 'Guides',
    date: '5 janvier 2025',
    image: '📊',
    readTime: '4 min',
  },
  {
    id: 6,
    title: 'Partenariat avec la Mairie : un pas de plus vers la solidarité',
    excerpt: 'La ville s\'engage à nos côtés pour promouvoir l\'entraide intergénérationnelle dans tous les quartiers.',
    category: 'Partenariats',
    date: '2 janvier 2025',
    image: '🤝',
    readTime: '4 min',
  },
];

const categories = [
  { name: 'Tous', count: 6 },
  { name: 'Guides', count: 2 },
  { name: 'Témoignages', count: 2 },
  { name: 'Événements', count: 1 },
  { name: 'Partenariats', count: 1 },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-500 to-emerald-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Actualités, témoignages et conseils autour de l'entraide intergénérationnelle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-28">
                <h3 className="font-bold text-gray-800 mb-4">Catégories</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <button className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                        <span className="text-gray-600">{cat.name}</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">{cat.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="border-t mt-6 pt-6">
                  <h3 className="font-bold text-gray-800 mb-4">Liens rapides</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/blog/guides" className="text-cyan-600 hover:underline text-sm">Tous les guides</Link>
                    </li>
                    <li>
                      <Link to="/blog/temoignages" className="text-cyan-600 hover:underline text-sm">Témoignages</Link>
                    </li>
                    <li>
                      <Link to="/blog/evenements" className="text-cyan-600 hover:underline text-sm">Événements</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-6xl">{article.image}</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full">{article.category}</span>
                        <span className="text-xs text-gray-400">{article.readTime} de lecture</span>
                      </div>
                      <h2 className="font-bold text-gray-800 mb-2 line-clamp-2">{article.title}</h2>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{article.date}</span>
                        <button className="text-cyan-600 text-sm font-medium hover:underline">Lire →</button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 rounded-lg bg-cyan-500 text-white font-medium">1</button>
                  <button className="w-10 h-10 rounded-lg bg-white text-gray-600 hover:bg-gray-50">2</button>
                  <button className="w-10 h-10 rounded-lg bg-white text-gray-600 hover:bg-gray-50">3</button>
                  <span className="px-2 text-gray-400">...</span>
                  <button className="w-10 h-10 rounded-lg bg-white text-gray-600 hover:bg-gray-50">10</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
