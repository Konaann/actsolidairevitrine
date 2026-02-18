import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInfosOpen, setIsInfosOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAproposOpen, setIsAproposOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const blogMenu = [
    { icon: '📰', title: 'Blog', path: '/blog' },
    { icon: '📖', title: 'Guides', path: '/blog/guides' },
    { icon: '💬', title: 'Témoignages', path: '/blog/temoignages' },
    { icon: '🎉', title: 'Événements & Partenariats', path: '/blog/evenements' },
  ];

  const aproposMenu = [
    { icon: '🎯', title: 'Mission et impact', path: '/apropos/mission' },
    { icon: '📜', title: 'CGV - Conditions Générales', path: '/apropos/cgv' },
    { icon: '⚖️', title: 'Mentions légales', path: '/apropos/mentions-legales' },
    { icon: '⚙️', title: 'Fonctionnalités', path: '/apropos/fonctionnalites' },
  ];

  const servicesMenu = [
    { icon: '🤝', title: 'Aide à domicile', path: '/services/aide' },
    { icon: '🛒', title: 'Courses', path: '/services/courses' },
    { icon: '🔧', title: 'Réparation', path: '/services/reparation' },
    { icon: '📚', title: 'Aide aux devoirs', path: '/services/devoirs' },
    { icon: '🎨', title: 'Peinture', path: '/services/peinture' },
    { icon: '🧹', title: 'Nettoyage', path: '/services/nettoyage' },
    { icon: '💻', title: 'Informatique', path: '/services/informatique' },
    { icon: '🏛️', title: 'Démarches administratives', path: '/services/mairie' },
    { icon: '⚽', title: 'Activités & Sport', path: '/services/activite' },
  ];

  const infosMenu = [
    { icon: '🎯', title: 'Présentation', desc: "Découvrez Act'Solidaires et notre mission", path: '/presentation' },
    { icon: '🙋', title: "Demander de l'aide", desc: 'Comment ça marche pour les demandeurs', path: '/faq-demandeur' },
    { icon: '🤝', title: 'Devenir Helper', desc: "Tout savoir pour aider et gagner de l'argent", path: '/inscription-helper' },
    { icon: '👤', title: 'Devenir Demandeur', desc: "Comment s'inscrire et trouver de l'aide", path: '/inscription-demandeur' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Logo image */}
              <img src={import.meta.env.BASE_URL + "logo.png"} alt="Act'Solidaires" className="w-12 h-12 object-contain" />
              <span className="text-base sm:text-xl font-bold text-gray-800">
                Act'Solidaires
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* INFOS Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsInfosOpen(true)}
              onMouseLeave={() => setIsInfosOpen(false)}
            >
              <motion.button
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                INFOS
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isInfosOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>

              <AnimatePresence>
                {isInfosOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {infosMenu.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-xl mt-0.5">{item.icon}</span>
                          <div>
                            <p className="text-sm font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors">{item.title}</p>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SERVICES Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <motion.button
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                SERVICES
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4"
                  >
                    {/* Voir tous les services */}
                    <Link
                      to="/services"
                      className="block bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-xl p-3 mb-3 hover:from-cyan-100 hover:to-emerald-100 transition-colors"
                    >
                      <span className="font-bold text-gray-800 text-sm">Tous nos services</span>
                      <p className="text-xs text-gray-600">Découvrez l'ensemble de nos prestations</p>
                    </Link>

                    <div className="grid grid-cols-1 gap-1">
                      {servicesMenu.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-lg">{service.icon}</span>
                          <span className="text-sm text-gray-700 hover:text-cyan-600">{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* À PROPOS Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsAproposOpen(true)}
              onMouseLeave={() => setIsAproposOpen(false)}
            >
              <motion.button
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                À PROPOS
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isAproposOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>

              <AnimatePresence>
                {isAproposOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {aproposMenu.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-lg">{item.icon}</span>
                          <span className="text-sm text-gray-700 hover:text-cyan-600">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* BLOG Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsBlogOpen(true)}
              onMouseLeave={() => setIsBlogOpen(false)}
            >
              <motion.button
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                BLOG
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isBlogOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>

              <AnimatePresence>
                {isBlogOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[260px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {blogMenu.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-lg">{item.icon}</span>
                          <span className="text-sm text-gray-700 hover:text-cyan-600">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Button */}
            <Link to="/contact">
              <motion.span
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                CONTACT
              </motion.span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-gray-600 rounded-full"
                animate={isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-gray-600 rounded-full"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-gray-600 rounded-full"
                animate={isMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {/* INFOS Section Mobile */}
                <motion.div
                  variants={itemVariants}
                  custom={0}
                  initial="closed"
                  animate="open"
                >
                  <button
                    onClick={() => setIsInfosOpen(!isInfosOpen)}
                    className="w-full flex items-center justify-between py-3 px-4 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    INFOS
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isInfosOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {isInfosOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        <div className="py-2 space-y-1">
                          {infosMenu.map((item) => (
                            <Link key={item.path} to={item.path} className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-600 py-1" onClick={() => setIsMenuOpen(false)}>
                              <span>{item.icon}</span>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* SERVICES Section Mobile */}
                <motion.div
                  variants={itemVariants}
                  custom={1}
                  initial="closed"
                  animate="open"
                >
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex items-center justify-between py-3 px-4 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    SERVICES
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        <div className="py-2 space-y-1">
                          <Link to="/services" className="block text-sm text-cyan-600 font-medium hover:text-cyan-700 py-1" onClick={() => setIsMenuOpen(false)}>
                            Tous les services
                          </Link>
                          {servicesMenu.map((service) => (
                            <Link key={service.path} to={service.path} className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-600 py-1" onClick={() => setIsMenuOpen(false)}>
                              <span>{service.icon}</span>
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* À PROPOS Section Mobile */}
                <motion.div
                  variants={itemVariants}
                  custom={2}
                  initial="closed"
                  animate="open"
                >
                  <button
                    onClick={() => setIsAproposOpen(!isAproposOpen)}
                    className="w-full flex items-center justify-between py-3 px-4 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    À PROPOS
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isAproposOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {isAproposOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        <div className="py-2 space-y-1">
                          {aproposMenu.map((item) => (
                            <Link key={item.path} to={item.path} className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-600 py-1" onClick={() => setIsMenuOpen(false)}>
                              <span>{item.icon}</span>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* BLOG Section Mobile */}
                <motion.div
                  variants={itemVariants}
                  custom={3}
                  initial="closed"
                  animate="open"
                >
                  <button
                    onClick={() => setIsBlogOpen(!isBlogOpen)}
                    className="w-full flex items-center justify-between py-3 px-4 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    BLOG
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isBlogOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {isBlogOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        <div className="py-2 space-y-1">
                          {blogMenu.map((item) => (
                            <Link key={item.path} to={item.path} className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-600 py-1" onClick={() => setIsMenuOpen(false)}>
                              <span>{item.icon}</span>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Contact Button Mobile */}
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <motion.span
                    className="block py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 text-center mt-4"
                    variants={itemVariants}
                    custom={5}
                    initial="closed"
                    animate="open"
                  >
                    CONTACT
                  </motion.span>
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
