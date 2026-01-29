import { motion } from 'framer-motion';
import { useState } from 'react';

const CreerMission = () => {
  const [formData, setFormData] = useState({
    titre: '',
    categorie: '',
    description: '',
    adresse: '',
    date: '',
    heure: '',
    duree: '',
    remuneration: '',
  });

  const categories = [
    { id: 'courses', label: 'Courses', icon: '🛒' },
    { id: 'accompagnement', label: 'Accompagnement', icon: '🚗' },
    { id: 'administratif', label: 'Administratif', icon: '📋' },
    { id: 'informatique', label: 'Informatique', icon: '💻' },
    { id: 'menage', label: 'Ménage', icon: '🏠' },
    { id: 'jardinage', label: 'Jardinage', icon: '🌳' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Créer une mission
          </h1>
          <p className="text-gray-600 mb-8">
            Décrivez votre besoin et trouvez un helper près de chez vous
          </p>

          <form className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
            {/* Titre */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Titre de la mission
              </label>
              <input
                type="text"
                placeholder="Ex: Aide pour les courses hebdomadaires"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                value={formData.titre}
                onChange={(e) => setFormData({ ...formData, titre: e.target.value })}
              />
            </div>

            {/* Catégorie */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Catégorie
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, categorie: cat.id })}
                    className={`p-4 rounded-xl border-2 text-center transition-all ${
                      formData.categorie === cat.id
                        ? 'border-cyan-500 bg-cyan-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="text-2xl block mb-1">{cat.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                rows={4}
                placeholder="Décrivez en détail ce dont vous avez besoin..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            {/* Adresse */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse
              </label>
              <input
                type="text"
                placeholder="Votre adresse"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                value={formData.adresse}
                onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
              />
            </div>

            {/* Date et Heure */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Heure
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  value={formData.heure}
                  onChange={(e) => setFormData({ ...formData, heure: e.target.value })}
                />
              </div>
            </div>

            {/* Durée et Rémunération */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Durée estimée
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  value={formData.duree}
                  onChange={(e) => setFormData({ ...formData, duree: e.target.value })}
                >
                  <option value="">Sélectionner</option>
                  <option value="30min">30 minutes</option>
                  <option value="1h">1 heure</option>
                  <option value="2h">2 heures</option>
                  <option value="3h">3 heures</option>
                  <option value="4h+">4 heures ou plus</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rémunération proposée (€)
                </label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  value={formData.remuneration}
                  onChange={(e) => setFormData({ ...formData, remuneration: e.target.value })}
                />
              </div>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Publier ma mission
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default CreerMission;
