import { motion } from 'framer-motion';

const Telecharger = () => {
  const apkUrl = `${import.meta.env.BASE_URL}actsolidaires.apk`;

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
            <span className="text-7xl mb-6 block">📱</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Télécharger Act'Solidaires
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Rejoignez la communauté d'entraide intergénérationnelle
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Download Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center mb-12"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Android</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
              Téléchargez l'application directement sur votre appareil Android.
              Aucun compte Google Play n'est nécessaire.
            </p>

            <motion.a
              href={apkUrl}
              download
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-lg font-bold px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Télécharger l'APK
            </motion.a>

            <p className="text-sm text-gray-400 mt-4">Version 1.0 - Android 8.0+</p>
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Comment installer l'application ?
            </h3>

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  icon: '⬇️',
                  title: 'Téléchargez le fichier',
                  desc: 'Cliquez sur le bouton "Télécharger l\'APK" ci-dessus. Le fichier se télécharge automatiquement.',
                },
                {
                  step: 2,
                  icon: '⚙️',
                  title: 'Autorisez les sources inconnues',
                  desc: 'Allez dans Paramètres > Sécurité > Sources inconnues et activez l\'option pour autoriser l\'installation.',
                },
                {
                  step: 3,
                  icon: '📦',
                  title: 'Ouvrez le fichier APK',
                  desc: 'Retrouvez le fichier téléchargé dans vos notifications ou votre dossier "Téléchargements" et appuyez dessus.',
                },
                {
                  step: 4,
                  icon: '✅',
                  title: 'Installez et profitez !',
                  desc: 'Suivez les instructions d\'installation puis lancez Act\'Solidaires. C\'est prêt !',
                },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.step * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-100 to-emerald-100 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-2 py-1 rounded-full">
                        Étape {item.step}
                      </span>
                      <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-cyan-50 to-emerald-50 border border-cyan-200 rounded-2xl p-6 flex gap-4 items-start"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Application sécurisée</h4>
              <p className="text-gray-600 text-sm">
                Act'Solidaires est une application sûre développée par notre équipe.
                L'APK est fourni directement depuis notre site officiel. Vos données personnelles
                sont protégées conformément au RGPD.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Telecharger;
