import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rahim Uddin",
    role: "Frequent Rider",
    feedback:
      "The app is super easy to use! Booking rides has never been this smooth. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Anika Chowdhury",
    role: "Daily Commuter",
    feedback:
      "I love how accurate the live tracking is. It saves me a lot of time while waiting for my ride.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
  },
  {
    name: "Mehedi Hasan",
    role: "Corporate User",
    feedback:
      "The payment system is hassle-free and secure. Makes my daily office rides so convenient!",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 mb-10">
          Hear from riders who are already enjoying a smooth and reliable ride experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500"
                />
                <div className="text-left">
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>
              <div className="flex gap-1 justify-center">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
