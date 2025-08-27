import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tag, Gift, Percent } from "lucide-react"
import { motion } from "framer-motion"

export default function SpecialOffers() {
  const offers = [
    {
      title: "🎉 First Ride Free",
      description: "Enjoy your very first ride completely free. Limited-time offer!",
      icon: <Gift className="w-10 h-10 text-pink-500" />,
      button: "Claim Now",
    },
    {
      title: "💰 50% Off Rides",
      description: "Get 50% off on your next 3 rides using promo code SAVE50.",
      icon: <Percent className="w-10 h-10 text-green-500" />,
      button: "Use Promo",
    },
    {
      title: "🚖 Refer & Earn",
      description: "Refer a friend and get ride credits worth $10 instantly.",
      icon: <Tag className="w-10 h-10 text-blue-500" />,
      button: "Refer Now",
    },
  ]

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Special Offers Just for You!
        </motion.h2>
        <p className="text-gray-600 mb-12">
          Save more while enjoying your comfortable and safe rides. Don’t miss out on these deals!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6 shadow-lg rounded-2xl hover:shadow-xl transition bg-white">
                <CardContent className="flex flex-col items-center text-center">
                  <div className="mb-4">{offer.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                  <p className="text-gray-500 mb-4">{offer.description}</p>
                  <Button className="bg-gradient-to-r from-green-500 to-gray-500 text-white cursor-pointer font-medium rounded-full px-6">
                    {offer.button}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
