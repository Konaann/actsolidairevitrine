import { motion } from 'framer-motion';
import { useState } from 'react';

const MissionsListe = () => {
  const [viewMode, setViewMode] = useState<'liste' | 'carte'>('liste');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Toutes', icon: '📋' },
    { id: 'courses', label: 'Courses', icon: '🛒' },
    { id: 'accompagnement', label: 'Accompagnement', icon: '🚗' },
    { id: 'administratif', label: 'Administratif', icon: '📋' },
    { id: 'informatique', label: 'Informatique', icon: '💻' },
    { id: 'menage', label: 'Ménage', icon: '🏠' },
  ];

  const missions = [
    {
      id: 1,
      titre: 'Aide aux courses',
      demandeur: 'Mme Dupont',
      categorie: 'courses',
      adresse: '15 rue des Lilas, Paris 75011',
      date: '20 Jan 2025',
      heure: '10:00',
      duree: '1h30',
      montant: 25,
      distance: '1.2 km',
    },
    {
      id: 2,
      titre: 'Accompagnement médecin',
      demandeur: 'M. Martin',
      categorie: 'accompagnement',
      adresse: '8 avenue Victor Hugo, Paris 75016',
      date: '22 Jan 2025',
      heure: '14:30',
      duree: '2h',
      montant: 40,
      distance: '2.5 km',
    },
    {
      id: 3,
      titre: 'Installation ordinateur',
      demandeur: 'Mme Bernard',
      categorie: 'informatique',
      adresse: '42 boulevard Haussman, Paris 75009',
      date: '23 Jan 2025',
      heure: '15:00',
      duree: '1h',
      montant: 30,
      distance: '0.8 km',
    },
    {
      id: 4,
      titre: 'Ménage appartement',
      demandeur: 'M. Petit',
      categorie: 'menage',
      adresse: '3 rue de Rivoli, Paris 75004',
      date: '25 Jan 2025',
      heure: '09:00',
      duree: '3h',
      montant: 50,
      distance: '3.1 km',
    },
  ];

  const filteredMissions = selectedCategory && selectedCategory !== 'all'
    ? missions.filter((m) => m.categorie === selectedCategory)
    : missions;

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                Missions disponibles
              </h1>
              <p className="text-gray-600 mt-2">{filteredMissions.length} missions près de chez vous</p>
            </div>

            {/* View Toggle */}
            <div className="flex bg-white rounded-xl p-1 shadow-sm">
              <button
                onClick={() => setViewMode('liste')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  viewMode === 'liste' ? 'bg-cyan-500 text-white' : 'text-gray-600'
                }`}
              >
                📋 Liste
              </button>
              <button
                onClick={() => setViewMode('carte')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  viewMode === 'carte' ? 'bg-cyan-500 text-white' : 'text-gray-600'
                }`}
              >
                🗺️ Carte
              </button>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id === 'all' ? null : cat.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition ${
                  (cat.id === 'all' && !selectedCategory) || selectedCategory === cat.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          {viewMode === 'liste' ? (
            /* Liste View */
            <div className="grid md:grid-cols-2 gap-6">
              {filteredMissions.map((mission, index) => (
                <motion.div
                  key={mission.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{mission.titre}</h3>
                      <p className="text-gray-500">{mission.demandeur}</p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      {mission.montant}€
                    </span>
                  </div>

                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <span>📍</span>
                      <span className="text-sm">{mission.adresse}</span>
                      <span className="text-xs text-cyan-600 font-medium">({mission.distance})</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span>📅</span>
                        <span className="text-sm">{mission.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>🕐</span>
                        <span className="text-sm">{mission.heure}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>⏱️</span>
                        <span className="text-sm">{mission.duree}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-medium py-3 rounded-xl"
                    >
                      Postuler
                    </motion.button>
                    <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition">
                      Détails
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Carte View */
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[600px] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <span className="text-6xl mb-4 block">🗺️</span>
                <p className="text-xl font-medium">Carte interactive</p>
                <p className="text-sm mt-2">La carte sera disponible prochainement</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MissionsListe;
