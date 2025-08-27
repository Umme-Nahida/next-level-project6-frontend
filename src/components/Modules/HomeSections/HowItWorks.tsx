import * as React from "react"
import { motion } from "framer-motion"
import {
  MapPin,
  Navigation,
  Car,
  CreditCard,
  Star,
  Smartphone,
  Clock,
  ShieldCheck,
  UserCog,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs,TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router"


const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

const StepCard: React.FC<{
  index: number
  title: string
  description: string
  icon: React.ReactNode
  ctaText?: string
  onClick?: () => void
}> = ({ index, title, description, icon, ctaText, onClick }) => {
  return (
    <motion.div variants={item}>
      <Card className="relative h-full overflow-hidden border-muted/50 bg-background/80 backdrop-blur-sm">
        <CardHeader className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-2xl border bg-muted/40">
              {icon}
            </div>
            <Badge variant="secondary" className="rounded-xl text-xs">
              Step {index}
            </Badge>
          </div>
          <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground md:text-base">{description}</p>
          {ctaText ? (
            <Button onClick={onClick} className="rounded-2xl">
              {ctaText}
            </Button>
          ) : null}
        </CardContent>
      </Card>
    </motion.div>
  )
}

const RIDER_STEPS = [
  {
    title: "Set pickup & destination",
    description:
      "Search places or tap current location. We’ll show ETA, distance and estimated fare instantly.",
    icon: <MapPin className="size-5" aria-hidden />,
  },
  {
    title: "Get matched with a driver",
    description:
      "We ping nearby drivers. See driver name, vehicle info and arrival time in real‑time.",
    icon: <Car className="size-5" aria-hidden />,
  },
  {
    title: "Live ride tracking",
    description:
      "Watch your driver moving on the map with updates every few seconds. Share trip link for safety.",
    icon: <Navigation className="size-5" aria-hidden />,
  },
  {
    title: "Pay & rate",
    description:
      "Pay with cash or card, get a receipt, and rate your experience to help keep quality high.",
    icon: <CreditCard className="size-5" aria-hidden />,
  },
]

const DRIVER_STEPS = [
  {
    title: "Go online & receive requests",
    description:
      "Tap Go Online to start receiving rides based on your location and preferences.",
    icon: <Smartphone className="size-5" aria-hidden />,
  },
  {
    title: "Accept & navigate",
    description:
      "Review pickup and fare estimate, then accept and follow turn‑by‑turn navigation.",
    icon: <Navigation className="size-5" aria-hidden />,
  },
  {
    title: "Complete trip",
    description:
      "Start trip at pickup, end at drop‑off. Distance and time auto‑calculated for payouts.",
    icon: <Clock className="size-5" aria-hidden />,
  },
  {
    title: "Earnings & ratings",
    description:
      "View daily earnings, bonuses and rider ratings to track performance.",
    icon: <Star className="size-5" aria-hidden />,
  },
]

const ADMIN_STEPS = [
  {
    title: "Approve drivers",
    description:
      "Verify documents and mark drivers approved so they can start accepting rides.",
    icon: <ShieldCheck className="size-5" aria-hidden />,
  },
  {
    title: "Manage marketplace",
    description:
      "Set fare rules, service areas, peak pricing and monitor live demand/supply.",
    icon: <UserCog className="size-5" aria-hidden />,
  },
  {
    title: "Monitor trips",
    description:
      "Track ongoing trips, resolve disputes and ensure safety compliance.",
    icon: <Navigation className="size-5" aria-hidden />,
  },
  {
    title: "Analytics & reports",
    description:
      "Review revenue, retention, cancellations and export monthly reports.",
    icon: <Star className="size-5" aria-hidden />,
  },
]

export default function HowItWorks() {
  const [role, setRole] = React.useState<"rider" | "driver" | "admin">("rider")

  const data = {
    rider: RIDER_STEPS,
    driver: DRIVER_STEPS,
    admin: ADMIN_STEPS,
  } as const

  const onPrimaryCTA = () => {
    if (role === "rider") alert("Open Request Ride modal…")
    if (role === "driver") alert("Go Online toggled…")
    if (role === "admin") alert("Navigating to Admin Dashboard…")
  }

  const roleCtaText = {
    rider: "Request a ride",
    driver: "Go online",
    admin: "Open dashboard",
  } as const

  return (
    <section className="relative w-full bg-green-300 overflow-hidden">
      {/* Subtle gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background to-background/10 [mask-image:radial-gradient(50%_30%_at_50%_0%,#000_30%,transparent_40%)]" />

      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto mb-8 flex max-w-3xl flex-col items-center text-center md:mb-12"
        >
          {/* Title  */}
          <h2 className="text-3xl font-semibold text-black md:text-4xl">
            How It Works
          </h2>

          {/* Paragraph */}
          <p className="mt-3 max-w-2xl text-pretty text-sm text-gray-800 md:text-base">
            From requesting a ride to realtime tracking and secure payments — everything is designed
            to be fast, reliable and safe.
          </p>

          <motion.div variants={item} className="mt-6 w-full">
            <Tabs value={role} onValueChange={(v) => setRole(v as any)} className="w-full">
              <TabsList className="mx-auto grid w-full max-w-md grid-cols-3 rounded-2xl">
                <TabsTrigger value="rider">Rider</TabsTrigger>
                <TabsTrigger value="driver">Driver</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {data[role].map((s, i) => (
            <StepCard
              key={s.title}
              index={i + 1}
              title={s.title}
              description={s.description}
              icon={s.icon}
              ctaText={i === 0 ? roleCtaText[role] : undefined}
              onClick={i === 0 ? onPrimaryCTA : undefined}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-3 text-center md:mt-12">
          <p className="text-sm text-muted-foreground md:text-base">
            Ready to get started?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button size="lg" className="rounded-2xl" onClick={onPrimaryCTA}>
              {roleCtaText[role]}
            </Button>
            <Link to={"/about"}>
              <Button size="lg" variant="outline" className="rounded-2xl">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
