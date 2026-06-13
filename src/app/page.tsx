import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-red-950/20" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/50 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-4">
            TRANSFORM
            <br />
            <span className="text-red-600">YOUR BODY</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-zinc-400 font-light mb-8">
            Elevate Your Mind
          </p>
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg mb-10">
            Join FitZone and unlock your full potential with world-class equipment and expert trainers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-600/25"
            >
              Start Your Journey
            </Link>
            <Link
              href="/classes"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-zinc-700 hover:border-red-600 rounded-xl transition-all hover:scale-105"
            >
              Explore Classes
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5000+", label: "Active Members" },
              { value: "50+", label: "Weekly Classes" },
              { value: "20+", label: "Expert Trainers" },
              { value: "10+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-red-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-zinc-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-red-600">FitZone</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We provide everything you need to achieve your fitness goals in a motivating environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "State-of-the-Art Equipment",
                description:
                  "From cardio machines to free weights, our facility is equipped with the latest fitness technology to maximize your workout.",
                icon: "🏋️",
              },
              {
                title: "Expert Personal Trainers",
                description:
                  "Our certified trainers create customized workout plans tailored to your goals, ensuring you get the results you deserve.",
                icon: "💪",
              },
              {
                title: "Supportive Community",
                description:
                  "Join a welcoming community of fitness enthusiasts who motivate and support each other on their journey to better health.",
                icon: "🤝",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-red-600/50 transition-colors group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-red-600/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-red-600">Transformation</span>?
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards a healthier, stronger you. Join thousands of members who have already transformed their lives.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-600/25"
          >
            Join Now
          </Link>
        </div>
      </section>
    </>
  );
}
