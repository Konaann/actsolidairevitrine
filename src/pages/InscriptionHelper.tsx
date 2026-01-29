import { motion } from 'framer-motion';
import { useState } from 'react';

const InscriptionHelper = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    dateNaissance: '',
    adresse: '',
    codePostal: '',
    ville: '',
    bio: '',
    categories: [] as string[],
    disponibilites: [] as string[],
  });

  const categories = [
    { id: 'courses', label: 'Courses', icon: '🛒' },
    { id: 'accompagnement', label: 'Accompagnement', icon: '🚗' },
    { id: 'administratif', label: 'Administratif', icon: '📋' },
    { id: 'informatique', label: 'Informatique', icon: '💻' },
    { id: 'menage', label: 'Ménage', icon: '🏠' },
    { id: 'jardinage', label: 'Jardinage', icon: '🌳' },
  ];

  const disponibilites = [
    'Lundi matin', 'Lundi après-midi',
    'Mardi matin', 'Mardi après-midi',
    'Mercredi matin', 'Mercredi après-midi',
    'Jeudi matin', 'Jeudi après-midi',
    'Vendredi matin', 'Vendredi après-midi',
    'Samedi matin', 'Samedi après-midi',
    'Dimanche matin', 'Dimanche après-midi',
  ];

  const toggleCategory = (id: string) => {
    setFormData({
      ...formData,
      categories: formData.categories.includes(id)
        ? formData.categories.filter((c) => c !== id)
        : [...formData.categories, id],
    });
  };

  const toggleDispo = (dispo: string) => {
    setFormData({
      ...formData,
      disponibilites: formData.disponibilites.includes(dispo)
        ? formData.disponibilites.filter((d) => d !== dispo)
        : [...formData.disponibilites, dispo],
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Devenir Helper
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Rejoignez la communauté et aidez ceux qui en ont besoin
          </p>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= s ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div className={`w-16 h-1 ${step > s ? 'bg-cyan-500' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>

          <form className="bg-white rounded-3xl shadow-xl p-8">
            {/* Step 1: Informations personnelles */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-4">Informations personnelles</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      value={formData.prenom}
                      onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date de naissance</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      value={formData.dateNaissance}
                      onChange={(e) => setFormData({ ...formData, dateNaissance: e.target.value })}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Compétences */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-4">Vos compétences</h2>
                <p className="text-gray-600 mb-4">Sélectionnez les types de missions que vous souhaitez effectuer</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => toggleCategory(cat.id)}
                      className={`p-4 rounded-xl border-2 text-center transition-all ${
                        formData.categories.includes(cat.id)
                          ? 'border-cyan-500 bg-cyan-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-2xl block mb-1">{cat.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{cat.label}</span>
                    </button>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Présentez-vous en quelques mots</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Parlez de vous, de votre expérience..."
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: Disponibilités */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-4">Vos disponibilités</h2>
                <p className="text-gray-600 mb-4">Indiquez quand vous êtes généralement disponible</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {disponibilites.map((dispo) => (
                    <button
                      key={dispo}
                      type="button"
                      onClick={() => toggleDispo(dispo)}
                      className={`p-3 rounded-lg border text-sm transition-all ${
                        formData.disponibilites.includes(dispo)
                          ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {dispo}
                    </button>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adresse</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    value={formData.adresse}
                    onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Code postal</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      value={formData.codePostal}
                      onChange={(e) => setFormData({ ...formData, codePostal: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ville</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      value={formData.ville}
                      onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition"
                >
                  Retour
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="ml-auto px-6 py-3 bg-cyan-500 text-white rounded-xl font-medium hover:bg-cyan-600 transition"
                >
                  Continuer
                </button>
              ) : (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="ml-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-xl font-bold shadow-lg"
                >
                  Finaliser mon inscription
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default InscriptionHelper;
