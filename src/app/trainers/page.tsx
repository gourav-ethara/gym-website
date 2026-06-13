export default function TrainersPage() {
  const trainers = [
    {
      name: "Mike Johnson",
      specialty: "Strength & Conditioning",
      bio: "With 15 years of experience as a former competitive athlete, Mike brings unmatched expertise in building strength and power.",
      initials: "MJ",
      gradient: "from-red-600 to-orange-600",
    },
    {
      name: "Sarah Williams",
      specialty: "Yoga & Pilates",
      bio: "A certified yoga instructor and wellness expert, Sarah helps members find balance through mindful movement and breath work.",
      initials: "SW",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      name: "David Chen",
      specialty: "HIIT & Boxing",
      bio: "Professional boxing coach and fitness enthusiast, David brings energy and intensity to every session while keeping it fun.",
      initials: "DC",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      name: "Emma Rodriguez",
      specialty: "Nutrition & Personal Training",
      bio: "Certified nutritionist and transformation specialist, Emma takes a holistic approach to fitness and overall well-being.",
      initials: "ER",
      gradient: "from-green-600 to-emerald-600",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-red-600">Trainers</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Expert coaches dedicated to helping you reach your full potential
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer) => (
              <div
                key={trainer.name}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:border-red-600/50 transition-all group"
              >
                {/* Avatar */}
                <div
                  className={`w-28 h-28 mx-auto rounded-full bg-gradient-to-br ${trainer.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <span className="text-3xl font-bold text-white">{trainer.initials}</span>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
                <p className="text-red-600 text-sm font-medium mb-4">{trainer.specialty}</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{trainer.bio}</p>

                {/* Social Links Placeholder */}
                <div className="flex justify-center gap-3">
                  {["𝕏", "in", "📷"].map((icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-colors text-xs font-bold"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
