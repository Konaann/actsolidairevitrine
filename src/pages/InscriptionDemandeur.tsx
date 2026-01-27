import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const InscriptionDemandeur = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Étape 1 - Informations personnelles
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    dateNaissance: '',
    // Étape 2 - Adresse
    adresse: '',
    codePostal: '',
    ville: '',
    // Étape 3 - Besoins
    typesAide: [] as string[],
    frequence: '',
    budget: '',
    // Étape 4 - Informations complémentaires
    situationFamiliale: '',
    mobilite: '',
    commentaire: '',
  });

  const totalSteps = 4;

  const typesAideOptions = [
    { id: 'courses', label: 'Aide aux courses', icon: '🛒' },
    { id: 'menage', label: 'Ménage et entretien', icon: '🧹' },
    { id: 'compagnie', label: 'Compagnie et écoute', icon: '💬' },
    { id: 'transport', label: 'Transport et accompagnement', icon: '🚗' },
    { id: 'administratif', label: 'Aide administrative', icon: '📝' },
    { id: 'informatique', label: 'Aide informatique', icon: '💻' },
    { id: 'jardinage', label: 'Jardinage', icon: '🌱' },
    { id: 'bricolage', label: 'Petits travaux', icon: '🔧' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeAideToggle = (typeId: string) => {
    setFormData((prev) => ({
      ...prev,
      typesAide: prev.typesAide.includes(typeId)
        ? prev.typesAide.filter((id) => id !== typeId)
        : [...prev.typesAide, typeId],
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inscription demandeur soumise:', formData);
    // Logique de soumission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l'accueil
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Inscription Demandeur</h1>
            <p className="text-xl text-white/90">Inscrivez-vous pour recevoir l'aide de nos Helpers</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    step <= currentStep
                      ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step < currentStep ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step
                  )}
                </div>
                {step < 4 && (
                  <div
                    className={`w-16 md:w-24 lg:w-32 h-1 mx-2 rounded transition-colors ${
                      step < currentStep ? 'bg-gradient-to-r from-cyan-500 to-teal-500' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Identité</span>
            <span>Adresse</span>
            <span>Besoins</span>
            <span>Compléments</span>
          </div>
        </div>

        {/* Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* Étape 1 - Informations personnelles */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Vos informations personnelles</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                        placeholder="Votre prénom"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                        placeholder="06 12 34 56 78"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date de naissance</label>
                      <input
                        type="date"
                        name="dateNaissance"
                        value={formData.dateNaissance}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Étape 2 - Adresse */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Votre adresse</h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Adresse complète</label>
                    <input
                      type="text"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                      placeholder="Numéro et nom de rue"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Code postal</label>
                      <input
                        type="text"
                        name="codePostal"
                        value={formData.codePostal}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                        placeholder="75000"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ville</label>
                      <input
                        type="text"
                        name="ville"
                        value={formData.ville}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                        placeholder="Paris"
                        required
                      />
                    </div>
                  </div>

                  <div className="bg-cyan-50 rounded-xl p-4 flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-medium text-cyan-800">Pourquoi avons-nous besoin de votre adresse ?</p>
                      <p className="text-sm text-cyan-700 mt-1">
                        Votre adresse nous permet de vous mettre en relation avec des Helpers proches de chez vous
                        pour faciliter les interventions.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Étape 3 - Besoins */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Vos besoins d'aide</h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Types d'aide recherchés (plusieurs choix possibles)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {typesAideOptions.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => handleTypeAideToggle(type.id)}
                          className={`p-4 rounded-xl border-2 transition-all text-center ${
                            formData.typesAide.includes(type.id)
                              ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <span className="text-2xl block mb-2">{type.icon}</span>
                          <span className="text-sm font-medium">{type.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Fréquence souhaitée</label>
                      <select
                        name="frequence"
                        value={formData.frequence}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                        required
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="ponctuel">Ponctuel (une fois)</option>
                        <option value="hebdo">Hebdomadaire</option>
                        <option value="bihebdo">Plusieurs fois par semaine</option>
                        <option value="quotidien">Quotidien</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Budget mensuel estimé</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                        required
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="50">Moins de 50€</option>
                        <option value="100">50€ - 100€</option>
                        <option value="200">100€ - 200€</option>
                        <option value="300">200€ - 300€</option>
                        <option value="plus">Plus de 300€</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Étape 4 - Informations complémentaires */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations complémentaires</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Situation familiale</label>
                      <select
                        name="situationFamiliale"
                        value={formData.situationFamiliale}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="seul">Vivant seul(e)</option>
                        <option value="couple">En couple</option>
                        <option value="famille">En famille</option>
                        <option value="residence">En résidence</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mobilité</label>
                      <select
                        name="mobilite"
                        value={formData.mobilite}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="autonome">Autonome</option>
                        <option value="canne">Aide à la marche (canne)</option>
                        <option value="deambulateur">Déambulateur</option>
                        <option value="fauteuil">Fauteuil roulant</option>
                        <option value="lit">Alité(e)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Informations complémentaires (optionnel)
                    </label>
                    <textarea
                      name="commentaire"
                      value={formData.commentaire}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all resize-none"
                      placeholder="Précisez vos besoins, contraintes particulières, ou toute information utile pour les Helpers..."
                    />
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                      <span className="text-xl">✅</span>
                      Récapitulatif de votre inscription
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Nom complet:</span>
                        <p className="font-medium text-gray-900">{formData.prenom} {formData.nom}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Email:</span>
                        <p className="font-medium text-gray-900">{formData.email}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Ville:</span>
                        <p className="font-medium text-gray-900">{formData.ville || '-'}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Types d'aide:</span>
                        <p className="font-medium text-gray-900">{formData.typesAide.length} sélectionné(s)</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="conditions"
                      className="mt-1 w-5 h-5 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      required
                    />
                    <label htmlFor="conditions" className="text-sm text-gray-600">
                      J'accepte les{' '}
                      <a href="#" className="text-cyan-600 hover:underline">conditions générales d'utilisation</a>
                      {' '}et la{' '}
                      <a href="#" className="text-cyan-600 hover:underline">politique de confidentialité</a>
                      {' '}d'Act'Solidaires.
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Précédent
                </button>
              ) : (
                <div />
              )}

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all"
                >
                  Suivant
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all"
                >
                  Finaliser mon inscription
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default InscriptionDemandeur;
