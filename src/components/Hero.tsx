import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden pt-20 flex flex-col"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-teal-500" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 flex-1 flex items-center py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 items-center w-full">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white z-10"
          >
            {/* White card background */}
            <motion.div
              variants={itemVariants}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 2xl:p-16 shadow-2xl"
            >
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6 2xl:mb-8"
              >
                Act'Solidaires,
                <br />
                <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                  votre appli
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gray-600 text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-6 2xl:mb-8 leading-relaxed"
              >
                Une application qui permet aux jeunes d'aider les personnes âgées
                à travers des missions simples, renforçant la solidarité et les
                liens entre générations.
              </motion.p>

              {/* App Store Badges */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3 sm:gap-4 mb-6"
              >
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 bg-black text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] sm:text-xs opacity-80">Télécharger sur</div>
                    <div className="text-xs sm:text-sm font-semibold">App Store</div>
                  </div>
                </motion.a>

                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 bg-black text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] sm:text-xs opacity-80">Disponible sur</div>
                    <div className="text-xs sm:text-sm font-semibold">Google Play</div>
                  </div>
                </motion.a>
              </motion.div>

              {/* Rating */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2"
              >
                <span className="text-xl sm:text-2xl font-bold text-gray-900">4.5</span>
                <div className="flex text-amber-400 text-lg sm:text-xl">
                  {'★'.repeat(5)}
                </div>
                <span className="text-gray-500 text-sm sm:text-base">(5 avis)</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Phone Mockups */}
          <div className="relative flex items-center justify-center">
            {/* Container pour les téléphones */}
            <div className="relative w-full flex flex-col items-center justify-center max-w-md lg:max-w-none mx-auto">

              {/* Badge Trouver de l'aide - en haut */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mb-4"
              >
                <motion.div
                  className="bg-white text-gray-800 px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-800">Trouver de l'aide <span className="text-teal-500 font-semibold">simplement</span></span>
                </motion.div>
              </motion.div>

              {/* Phones + Badge Proposer une mission */}
              <div className="relative">
                {/* Badge Proposer une mission - positionné à droite des téléphones */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute top-0 right-0 lg:top-4 lg:-right-4 z-30"
                >
                  <motion.div
                    className="bg-white text-gray-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl text-[10px] sm:text-xs lg:text-sm font-medium shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="text-sm sm:text-base lg:text-lg">📢</span>
                      <span className="text-gray-800">Proposer une <span className="text-emerald-500 font-semibold">mission</span></span>
                    </div>
                    <div className="text-[8px] sm:text-[10px] lg:text-xs mt-0.5 sm:mt-1 text-gray-500">Discuter en toute sécurité</div>
                  </motion.div>
                </motion.div>

                {/* Phones Container - 2 téléphones côte à côte */}
                <div className="flex items-end justify-center scale-[0.65] sm:scale-[0.8] lg:scale-100 origin-center">

                {/* Phone 1 - Calendar (gauche, devant) */}
                <motion.div
                  style={{ y: y1 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative z-20 -mr-6 sm:-mr-8"
                >
                  <div className="phone-frame w-[200px] sm:w-[240px] lg:w-[280px] xl:w-[300px] 2xl:w-[360px] transform -rotate-6 hover:-rotate-3 transition-transform duration-500">
                    <div className="phone-screen p-3 sm:p-4">
                      {/* Phone Header */}
                      <div className="flex justify-between items-center mb-3 sm:mb-4">
                        <span className="text-[10px] sm:text-xs text-gray-400">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-1.5 sm:w-4 sm:h-2 bg-gray-800 rounded-sm" />
                        </div>
                      </div>

                      {/* Calendar Header */}
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <button className="text-gray-400 text-sm">&lt;</button>
                        <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Calendrier</h3>
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center">
                          <span className="text-white text-[10px] sm:text-xs">👤</span>
                        </div>
                      </div>

                      <div className="text-center mb-2 sm:mb-3">
                        <span className="font-medium text-gray-800 text-xs sm:text-sm">Janvier 2025</span>
                        <button className="ml-2 text-gray-400 text-sm">&gt;</button>
                      </div>

                      {/* Calendar Grid */}
                      <div className="grid grid-cols-7 gap-0.5 sm:gap-1 text-[10px] sm:text-xs mb-3 sm:mb-4">
                        {['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'].map((day) => (
                          <div key={day} className="text-center text-gray-400 py-0.5 sm:py-1">{day}</div>
                        ))}
                        {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                          <div
                            key={day}
                            className={`text-center py-0.5 sm:py-1 rounded-full ${
                              day === 11
                                ? 'bg-emerald-500 text-white font-bold'
                                : 'text-gray-600'
                            }`}
                          >
                            {day}
                          </div>
                        ))}
                      </div>

                      {/* Mission List */}
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="bg-gray-50 rounded-lg p-1.5 sm:p-2 border-l-4 border-amber-400">
                          <div className="text-[10px] sm:text-xs text-gray-500">11 Janvier, 2025</div>
                          <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-[10px] sm:text-xs">🎨</span>
                            </div>
                            <div>
                              <div className="text-[10px] sm:text-xs font-medium text-gray-800">Peinture avec Elise</div>
                              <div className="text-[8px] sm:text-[10px] text-gray-400">de 9h à 10h30</div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-1.5 sm:p-2 border-l-4 border-blue-400">
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-[10px] sm:text-xs">💻</span>
                            </div>
                            <div>
                              <div className="text-[10px] sm:text-xs font-medium text-gray-800">Aide informatique</div>
                              <div className="text-[8px] sm:text-[10px] text-gray-400">de 13h à 14h</div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-1.5 sm:p-2 border-l-4 border-amber-500">
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-100 rounded-full flex items-center justify-center">
                              <span className="text-[10px] sm:text-xs">📁</span>
                            </div>
                            <div>
                              <div className="text-[10px] sm:text-xs font-medium text-gray-800">Triage d'archives</div>
                              <div className="text-[8px] sm:text-[10px] text-gray-400">de 14h30 à 15h30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Phone 2 - Connexion (droite, derrière) */}
                <motion.div
                  style={{ y: y2 }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative z-10 -ml-6 sm:-ml-8"
                >
                  <div className="phone-frame w-[180px] sm:w-[220px] lg:w-[260px] xl:w-[280px] 2xl:w-[340px] transform rotate-6 hover:rotate-3 transition-transform duration-500">
                    <div className="phone-screen p-3 sm:p-4">
                      {/* Phone Header */}
                      <div className="flex justify-between items-center mb-4 sm:mb-6">
                        <span className="text-[10px] sm:text-xs text-gray-400">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-1.5 sm:w-4 sm:h-2 bg-gray-800 rounded-sm" />
                        </div>
                      </div>

                      {/* Logo */}
                      <div className="flex justify-center mb-4 sm:mb-6">
                        <img src={import.meta.env.BASE_URL + "logo.png"} alt="Act'Solidaires" className="w-14 h-14 sm:w-20 sm:h-20 object-contain" />
                      </div>

                      <h3 className="text-center font-bold text-gray-800 text-lg sm:text-xl mb-4 sm:mb-6">Connexion</h3>

                      <div className="space-y-3 sm:space-y-4">
                        <div className="bg-gray-100 rounded-xl p-2 sm:p-3">
                          <div className="text-[8px] sm:text-[10px] text-gray-400 mb-0.5 sm:mb-1">Email</div>
                          <div className="text-xs sm:text-sm text-gray-600">user@email.com</div>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-2 sm:p-3">
                          <div className="text-[8px] sm:text-[10px] text-gray-400 mb-0.5 sm:mb-1">Mot de passe</div>
                          <div className="text-xs sm:text-sm text-gray-600">••••••••</div>
                        </div>
                        <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-center py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold shadow-md">
                          Se connecter
                        </div>
                        <p className="text-center text-[10px] sm:text-xs text-gray-400">
                          Pas encore de compte ? <span className="text-cyan-500">S'inscrire</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                </div>
              </div>

              {/* Bulle en dessous des téléphones */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-4 lg:mt-6"
              >
                <div className="bg-white rounded-2xl px-4 py-3 sm:px-6 sm:py-4 shadow-lg flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium text-xs sm:text-sm">
                      Aidez quand vous voulez.
                    </p>
                    <p className="text-emerald-500 font-bold text-xs sm:text-sm">
                      0 contrainte, 100% liberté
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
