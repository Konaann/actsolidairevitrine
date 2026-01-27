import { motion } from 'framer-motion';
import { useState } from 'react';

const MesMissions = () => {
  const [activeTab, setActiveTab] = useState<'en-cours' | 'terminees'>('en-cours');

  const missionsEnCours = [
    {
      id: 1,
      titre: 'Aide aux courses',
      helper: 'Marie D.',
      date: '15 Jan 2025',
      heure: '10:00',
      statut: 'confirmée',
      montant: 25,
    },
    {
      id: 2,
      titre: 'Accompagnement médecin',
      helper: 'Lucas M.',
      date: '18 Jan 2025',
      heure: '14:30',
      statut: 'en attente',
      montant: 35,
    },
  ];

  const missionsTerminees = [
    {
      id: 3,
      titre: 'Aide informatique',
      helper: 'Sophie L.',
      date: '10 Jan 2025',
      note: 5,
      montant: 20,
    },
    {
      id: 4,
      titre: 'Courses hebdomadaires',
      helper: 'Pierre R.',
      date: '5 Jan 2025',
      note: 4,
      montant: 25,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Mes missions
          </h1>

          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('en-cours')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'en-cours'
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              En cours ({missionsEnCours.length})
            </button>
            <button
              onClick={() => setActiveTab('terminees')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'terminees'
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Terminées ({missionsTerminees.length})
            </button>
          </div>

          {/* Missions en cours */}
          {activeTab === 'en-cours' && (
            <div className="space-y-4">
              {missionsEnCours.map((mission) => (
                <motion.div
                  key={mission.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{mission.titre}</h3>
                      <p className="text-gray-500">avec {mission.helper}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        mission.statut === 'confirmée'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {mission.statut}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>{mission.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🕐</span>
                      <span>{mission.heure}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>💰</span>
                      <span>{mission.montant}€</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition">
                      Contacter
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
                      Détails
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Missions terminées */}
          {activeTab === 'terminees' && (
            <div className="space-y-4">
              {missionsTerminees.map((mission) => (
                <motion.div
                  key={mission.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{mission.titre}</h3>
                      <p className="text-gray-500">avec {mission.helper}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < mission.note ? 'text-amber-400' : 'text-gray-300'}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>{mission.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>💰</span>
                      <span>{mission.montant}€</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <a
              href="/creer-mission"
              className="inline-block bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Créer une nouvelle mission
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MesMissions;
