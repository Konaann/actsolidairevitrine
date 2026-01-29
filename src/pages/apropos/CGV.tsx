import { motion } from 'framer-motion';

const CGV = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Conditions Générales de Vente (CGV)
            </h1>
            <p className="text-lg text-white/90">Prestations de services</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 1. Objet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">1. Objet</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir les modalités de fourniture et d'utilisation des services proposés par <strong>Act'Solidaires</strong>, plateforme de mise en relation entre particuliers (jeunes, seniors, familles) pour la réalisation de missions volontaires ou rémunérées.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Toute inscription ou utilisation de la plateforme implique l'adhésion pleine et entière du client (utilisateur, bénéficiaire ou volontaire) aux présentes CGV.
            </p>
          </motion.div>

          {/* 2. Services proposés */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">2. Services proposés</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Act'Solidaires</strong> met en relation des particuliers pour des missions telles que :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
              <li>Aide aux courses et déplacements,</li>
              <li>Assistance administrative ou numérique,</li>
              <li>Accompagnement à domicile ou en extérieur,</li>
              <li>Services ponctuels de proximité (ménage léger, jardinage simple, etc.).</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Les services peuvent être bénévoles ou rémunérés, selon l'accord entre les parties. <strong>Act'Solidaires</strong> intervient uniquement en tant qu'intermédiaire et ne réalise pas elle-même les prestations.
            </p>
          </motion.div>

          {/* 3. Inscription et accès */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">3. Inscription et accès à la plateforme</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              L'accès aux services nécessite la création d'un compte utilisateur.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Chaque utilisateur s'engage à fournir des informations exactes et à jour.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Act'Solidaires</strong> se réserve le droit de suspendre ou supprimer un compte en cas de non-respect des présentes CGV.
            </p>
          </motion.div>

          {/* 4. Tarifs et conditions de paiement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">4. Tarifs et conditions de paiement</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3 ml-4">
              <li>L'inscription à la plateforme est [gratuite / soumise à un abonnement, selon modèle économique retenu].</li>
              <li>En cas de missions rémunérées, le tarif est fixé d'un commun accord entre l'aidant et le bénéficiaire.</li>
              <li><strong>Act'Solidaires</strong> peut percevoir une commission de mise en relation ou de gestion des paiements.</li>
              <li>Les paiements s'effectuent de manière sécurisée via les moyens proposés sur la plateforme.</li>
            </ul>
          </motion.div>

          {/* 5. Obligations des parties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">5. Obligations des parties</h2>

            <h3 className="font-semibold text-gray-700 mb-3">Act'Solidaires s'engage à :</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
              <li>Assurer un service de mise en relation fiable et sécurisé.</li>
              <li>Protéger les données personnelles des utilisateurs.</li>
              <li>Fournir une assistance technique en cas de problème d'accès ou d'utilisation.</li>
            </ul>

            <h3 className="font-semibold text-gray-700 mb-3">L'utilisateur s'engage à :</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Respecter les règles de bonne conduite et de sécurité lors des missions.</li>
              <li>Fournir des informations véridiques et respecter ses engagements (horaires, conditions convenues).</li>
              <li>Ne pas utiliser la plateforme à des fins frauduleuses ou illicites.</li>
            </ul>
          </motion.div>

          {/* 6. Responsabilité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">6. Responsabilité</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Act'Solidaires</strong> agit comme intermédiaire et ne peut être tenue responsable :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
              <li>De la qualité de l'exécution des missions,</li>
              <li>D'un désistement, retard ou annulation de dernière minute,</li>
              <li>D'un litige financier entre les parties,</li>
              <li>D'éventuels dommages matériels ou corporels survenus lors des missions.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Toutefois, <strong>Act'Solidaires</strong> peut proposer un système de vérification des profils (identité, avis, notation) afin de renforcer la confiance entre utilisateurs.
            </p>
          </motion.div>

          {/* 7. Annulation et rétractation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">7. Annulation et rétractation</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Conformément à l'article L221-18 du Code de la consommation, l'utilisateur consommateur dispose d'un délai de 14 jours pour exercer son droit de rétractation après inscription, sauf s'il a déjà bénéficié des services de mise en relation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              En cas d'annulation d'une mission rémunérée, les modalités de remboursement ou d'indemnisation doivent être convenues directement entre l'aidant et le bénéficiaire.
            </p>
          </motion.div>

          {/* 8. Protection des données personnelles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">8. Protection des données personnelles</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Act'Solidaires</strong> collecte et traite les données des utilisateurs conformément au RGPD.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Les données sont utilisées uniquement pour la mise en relation et ne sont jamais revendues à des tiers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Chaque utilisateur dispose d'un droit d'accès, de rectification et de suppression de ses données en contactant [adresse email].
            </p>
          </motion.div>

          {/* 9. Propriété intellectuelle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">9. Propriété intellectuelle</h2>
            <p className="text-gray-600 leading-relaxed">
              Tous les éléments de la plateforme (logo, charte graphique, textes, fonctionnalités) sont la propriété exclusive d'<strong>Act'Solidaires</strong> et ne peuvent être reproduits sans autorisation.
            </p>
          </motion.div>

          {/* 10. Loi applicable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">10. Loi applicable et règlement des litiges</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Les présentes CGV sont régies par le droit français.
            </p>
            <p className="text-gray-600 leading-relaxed">
              En cas de litige, une solution amiable sera recherchée. À défaut, les tribunaux compétents seront ceux du ressort du siège social d'<strong>Act'Solidaires</strong>.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CGV;
