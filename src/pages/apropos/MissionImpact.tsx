import { motion } from 'framer-motion';

const MissionImpact = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-500 to-emerald-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mission et impact</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Découvrez notre vision et nos engagements pour un futur plus solidaire
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12"
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <strong className="text-gray-800">Act'Solidaires</strong> offre une opportunité unique aux jeunes de s'engager activement dans leur communauté, d'acquérir de nouvelles compétences, de gagner un peu d'argent de poche ou de renforcer leur sens de l'entraide.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              L'application est un tremplin pour développer des valeurs fortes comme la responsabilité, l'autonomie et la solidarité.
            </p>
          </motion.div>

          {/* Agir pour demain */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Agir pour demain :</h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                L'objectif d'<strong className="text-gray-800">Act'Solidaires</strong> est de bâtir un futur plus humain et durable.
              </p>
              <p>
                En favorisant les échanges locaux, l'application réduit les besoins de déplacements excessifs et contribue à limiter l'impact environnemental.
              </p>
              <p>
                Par ailleurs, en encourageant l'entraide intergénérationnelle, elle permet de créer du lien social, de valoriser les compétences de chacun et de lutter contre l'isolement.
              </p>
              <p>
                Tout a commencé avec une observation simple : autour de nous, il y a des personnes qui cherchent à rendre service ou à arrondir leurs fins de mois, et d'autres qui ont besoin d'un coup de main pour des tâches simples mais essentielles. Pourtant, ces mondes ne se croisent pas toujours, faute d'un outil efficace pour les connecter.
              </p>
              <p>
                <strong className="text-gray-800">Act'Solidaires</strong> est née de cette envie d'agir. Nous avons imaginé une plateforme qui serait bien plus qu'une application : un véritable trait d'union entre les générations, les compétences et les envies d'aider.
              </p>
            </div>
          </motion.div>

          {/* L'étincelle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-3xl p-8 md:p-12 mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">L'étincelle d'un engagement social et environnemental</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Dès le départ, nous voulions que <strong className="text-gray-800">Act'Solidaires</strong> soit une solution qui dépasse la simple mise en relation. Notre ambition ?
            </p>
            <p className="text-gray-700 text-lg font-medium">
              Répondre aux besoins d'aujourd'hui tout en agissant pour demain.
            </p>
          </motion.div>

          {/* Cela signifie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Cela signifie :</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Encourager les jeunes à s'investir</h4>
                  <p className="text-gray-600">
                    Encourager les jeunes à s'investir dans leur communauté, à acquérir des expériences enrichissantes et à renforcer leur autonomie.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Créer du lien social</h4>
                  <p className="text-gray-600">
                    Créer du lien social entre générations et milieux différents, parce que chaque rencontre a le pouvoir de changer les choses.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌍</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Agir pour la planète</h4>
                  <p className="text-gray-600">
                    Agir pour la planète, en favorisant des échanges locaux et responsables, limitant ainsi l'empreinte écologique des services rendus.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💪</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Contribuer à sa manière</h4>
                  <p className="text-gray-600">
                    À travers <strong>Act'Solidaires</strong>, nous croyons en une société où chacun peut contribuer à sa manière, qu'il s'agisse de donner un peu de son temps, de partager ses compétences ou d'accepter de l'aide dans un moment de besoin.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-lg p-8 md:p-12"
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Chaque mission accomplie est un pas de plus vers un monde où l'entraide et la durabilité sont au cœur de nos vies.
            </p>
            <p className="text-gray-700 text-xl font-medium leading-relaxed">
              <strong className="text-gray-800">Act'Solidaires</strong>, c'est plus qu'une entreprise. C'est un mouvement, une vision partagée : celle d'un avenir où chaque action, aussi petite soit-elle, contribue à un changement positif.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MissionImpact;
