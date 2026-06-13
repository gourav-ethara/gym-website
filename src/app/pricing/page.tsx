import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: 29,
    popular: false,
    features: [
      "Access to gym floor",
      "Locker room access",
      "2 group classes per week",
      "Basic fitness assessment",
    ],
  },
  {
    name: "Premium",
    price: 59,
    popular: true,
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "1 personal training session/month",
      "Sauna & steam room access",
      "Fitness tracking app",
    ],
  },
  {
    name: "Elite",
    price: 99,
    popular: false,
    features: [
      "Everything in Premium",
      "Unlimited personal training",
      "Nutrition consultation",
      "VIP lounge access",
      "Priority class booking",
      "Guest passes (2/month)",
    ],
  },
];

const faqs = [
  {
    q: "Can I cancel my membership anytime?",
    a: "Yes, you can cancel your membership at any time with no cancellation fees. We believe in earning your loyalty, not locking you in.",
  },
  {
    q: "Is there a joining fee?",
    a: "No, we don't charge any joining fees. Your first month starts from the day you sign up.",
  },
  {
    q: "Can I freeze my membership?",
    a: "Absolutely. You can freeze your membership for up to 3 months per year at no additional cost.",
  },
  {
    q: "Do you offer student discounts?",
    a: "Yes, we offer a 20% discount for students with a valid student ID. Contact us for details.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Membership <span className="text-red-600">Plans</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your goals and lifestyle
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-zinc-900 border rounded-2xl p-8 ${
                  plan.popular
                    ? "border-red-600 shadow-lg shadow-red-600/10 md:scale-105 relative"
                    : "border-zinc-800"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-black text-white">${plan.price}</span>
                    <span className="text-zinc-400">/month</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-red-600 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-zinc-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full py-3 text-center rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-zinc-800 text-white hover:bg-zinc-700"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-zinc-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
