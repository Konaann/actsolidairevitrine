const testimonials = [
  {
    name: 'Marie',
    age: 78,
    role: 'Demandeur',
    avatar: '👵',
    quote: 'Depuis que Lucas vient me voir chaque semaine, je me sens moins seule. Il m\'aide avec mon téléphone et on prend le thé ensemble.',
    rating: 5,
  },
  {
    name: 'Lucas',
    age: 22,
    role: 'Helper',
    avatar: '👨‍🎓',
    quote: 'J\'ai commencé pour arrondir mes fins de mois, mais j\'ai découvert tellement plus. C\'est un échange vraiment précieux.',
    rating: 5,
  },
  {
    name: 'Jeanne',
    age: 82,
    role: 'Demandeur',
    avatar: '👩‍🦳',
    quote: 'Je n\'osais plus sortir faire mes courses seule. Maintenant, Sarah m\'accompagne tous les mardis. Je me sens en sécurité.',
    rating: 5,
  },
  {
    name: 'Thomas',
    age: 19,
    role: 'Helper',
    avatar: '👦',
    quote: 'Entre mes cours, j\'aide M. Bernard avec son jardin. Il me donne plein de conseils et on parle de tout et de rien.',
    rating: 5,
  },
  {
    name: 'Henriette',
    age: 75,
    role: 'Demandeur',
    avatar: '👵',
    quote: 'L\'application est simple à utiliser même pour moi. J\'ai trouvé une jeune fille adorable qui m\'aide avec mes papiers.',
    rating: 5,
  },
  {
    name: 'Sarah',
    age: 21,
    role: 'Helper',
    avatar: '👩‍🎓',
    quote: 'Aider Jeanne chaque semaine, c\'est une expérience humaine incroyable. Je repars toujours avec le sourire.',
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  // Duplicate for seamless infinite loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Ils nous font confiance</h2>
        <p className="text-gray-500 text-lg">Des centaines d'échanges humains chaque jour</p>
      </div>

      <div
        className="flex gap-6 w-max"
        style={{
          animation: 'scroll-left 30s linear infinite',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = 'running';
        }}
      >
        {doubled.map((t, i) => (
          <div
            key={i}
            className="w-72 flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{t.avatar}</span>
              <div>
                <p className="font-bold text-gray-900 text-sm">{t.name}, {t.age} ans</p>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${t.role === 'Helper' ? 'bg-teal-100 text-teal-700' : 'bg-cyan-100 text-cyan-700'}`}>
                  {t.role}
                </span>
              </div>
              <div className="ml-auto flex">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <span key={s} className="text-amber-400 text-sm">★</span>
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed italic">"{t.quote}"</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsCarousel;
