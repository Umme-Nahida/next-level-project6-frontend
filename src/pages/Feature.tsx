
import { Car, MapPinned, ShieldCheck, Clock, Smartphone, Receipt,Star, Users, Globe2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Link } from "react-router";


export function FeaturesPage() {
  const features = [
    {
      icon: <Car className="h-6 w-6" />, title: "Real-time Fleet", desc: "Live location, status and vehicle health monitoring—all in one place.",
      points: ["Live location tracking", "Engine/Battery health", "Driver status"]
    },
    {
      icon: <MapPinned className="h-6 w-6" />, title: "Smart Routing", desc: "Avoid traffic, optimize ETA and multi-stop routes.",
      points: ["Avoid traffic", "Time-saving routes", "Cost optimization"]
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />, title: "Safety & Compliance", desc: "SOS, geo-fence alerts, and driver behavior analytics.",
      points: ["Geo-fence alerts", "SOS/Panic button", "Driving score"]
    },
    {
      icon: <Clock className="h-6 w-6" />, title: "Scheduling", desc: "Shifts, booking slots and auto-dispatch.",
      points: ["Ride scheduling", "Auto-dispatch", "No-show handling"]
    },
    {
      icon: <Smartphone className="h-6 w-6" />, title: "App Experience", desc: "Driver and passenger dashboards with push notifications.",
      points: ["Dual app", "Push alerts", "Localization"]
    },
    {
      icon: <Receipt className="h-6 w-6" />, title: "Payments & Billing", desc: "Online payments, invoicing and reconciliation.",
      points: ["Multi-mode payments", "Auto-invoice", "Reporting"]
    },
  ];

  const stats = [
    { label: "Uptime", value: "99.9%" },
    { label: "Monthly Trips", value: "250K+" },
    { label: "Clients", value: "120+" },
    { label: "Countries", value: "6" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-slate-50">
      <section className="container mx-auto px-4 py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-3">Ride Management</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Make your fleet smarter, safer, and faster
            </h1>
            <p className="mt-4 text-slate-600 max-w-2xl">
              Real-time tracking, smart routing, auto-dispatch and detailed reporting — everything on one platform. Scale your business while reducing costs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 ">
              <Link to={"/requestForm"}>
               <Button size="lg" className="cursor-pointer">Ride Request</Button>
              </Link>
              <Link to={"/about"}>
                <Button className="cursor-pointer" size="lg" variant="outline">Learn More</Button>
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((s) => (
                <Card key={s.label} className="shadow-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold">{s.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            {/* Phone mockup */}
            <div className="relative mx-auto aspect-[9/19] max-w-sm rounded-[2rem] border bg-white p-3 shadow-xl">
              <div className="h-full w-full rounded-2xl bg-slate-900 p-4 text-slate-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    <span className="text-sm font-semibold">Rider</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">LIVE</Badge>
                </div>
                <div className="mt-4 h-72 rounded-lg bg-gradient-to-b from-slate-800 to-slate-900 p-2">
                  {/* Simple map grid */}
                  <div className="grid grid-cols-6 gap-1">
                    {Array.from({ length: 60 }).map((_, i) => (
                      <div key={i} className="aspect-square rounded-sm bg-slate-700/60" />
                    ))}
                  </div>
                  <div className="absolute bottom-8 right-8">
                    <Badge className="shadow">ETA 7m</Badge>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-lg bg-slate-800 p-2">Pickup • 2.1km</div>
                  <div className="rounded-lg bg-slate-800 p-2">Route • Fast</div>
                  <div className="rounded-lg bg-slate-800 p-2">Fare • ৳220</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <Card key={f.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                    {f.icon}
                  </div>
                  <CardTitle className="text-lg">{f.title}</CardTitle>
                </div>
                <p className="text-sm text-slate-600 mt-2">{f.desc}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm space-y-1 text-slate-600">
                  {f.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" /> Why our solution?</CardTitle>
          </CardHeader>
          <CardContent className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border p-6">
              <Star className="h-5 w-5" />
              <h3 className="mt-3 font-semibold">Scalable Architecture</h3>
              <p className="text-sm text-slate-600 mt-1">Modular microservices and event-driven workflows—smooth performance as load increases.</p>
            </div>
            <div className="rounded-2xl border p-6">
              <Globe2 className="h-5 w-5" />
              <h3 className="mt-3 font-semibold">Local + Global</h3>
              <p className="text-sm text-slate-600 mt-1">Localized payment gateways and mapping for Bangladesh, with global readiness.</p>
            </div>
            <div className="rounded-2xl border p-6">
              <ShieldCheck className="h-5 w-5" />
              <h3 className="mt-3 font-semibold">Data Security</h3>
              <p className="text-sm text-slate-600 mt-1">Role-based access, audit logs and encryption—your data is always protected.</p>
            </div>
          </CardContent>
        </Card>

      </section>
    </div>
  );
}

