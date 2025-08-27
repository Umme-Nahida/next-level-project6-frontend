
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Car, MapPinned, ShieldCheck, Clock, TrendingUp, Users, PhoneCall, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// ✅ Fully responsive About page for a Ride Management project
// Tech: React + Tailwind + shadcn/ui + Redux + Framer Motion + lucide-react
// Drop this file into your routes/pages and import it normally.

const stats = [
  { label: "Active Drivers", value: "1.2k+", Icon: Users },
  { label: "Avg. Pickup Time", value: "~4.5 min", Icon: Clock },
  { label: "On‑time Rides", value: "98.7%", Icon: TrendingUp },
];

const features = [
  {
    title: "Real‑time Tracking",
    desc: "Live map updates, driver location, and ETA with smart rerouting.",
    Icon: MapPinned,
  },
  {
    title: "Fleet & Shift Control",
    desc: "Assign drivers, manage shifts, and monitor vehicle health.",
    Icon: Car,
  },
  {
    title: "Safety First",
    desc: "SOS, trip-share, and automated anomaly detection keep riders safe.",
    Icon: ShieldCheck,
  },
];

const timeline = [
  { year: "2023", title: "Idea & Research", text: "Spoke with dispatchers and riders to map real problems." },
  { year: "2024", title: "MVP Launch", text: "Core ride flow, live tracking, and payment integrations." },
  { year: "2025", title: "Scale & Insights", text: "Analytics, heatmaps, and performance dashboards." },
];

const team = [
  { name: "Arif Khan", role: "Product Lead", img: "", initials: "AK" },
  { name: "Maya Chowdhury", role: "Frontend (React)", img: "", initials: "MC" },
  { name: "Rafiul Islam", role: "Backend (Node)", img: "", initials: "RI" },
];

type RootState = {
  app?: {
    name?: string;
    version?: string;
  };
  support?: {
    phone?: string;
  };
};

export default function AboutPage() {
  // Pull app info from Redux (safe fallbacks so it won’t crash if keys differ)
  const appName = useSelector((s: RootState) => s?.app?.name) || "RideFlow";
  const version = useSelector((s: RootState) => s?.app?.version) || "v1.0";
  const supportPhone = useSelector((s: RootState) => s?.support?.phone) || "+880 1234-567890";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero */}
      <section className="container mx-auto px-4 pt-12 pb-10 md:pt-16 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Badge className="mb-3 text-sm">
            <Sparkles className="h-4 w-4 mr-1" /> About {appName}
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Smarter Ride Management for Cities & Fleets
          </h1>
          <p className="mt-4 text-slate-600 text-base md:text-lg">
            {appName} streamlines the entire trip lifecycle—request, match, navigate, pay, and analyze—
            so operators scale faster and riders arrive safer. Currently on {version}.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button size="lg" className="rounded-2xl">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl">
              Contact Sales
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {stats.map(({ label, value, Icon }, idx) => (
            <Card key={idx} className="rounded-2xl">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-100"><Icon className="h-6 w-6" /></div>
                <div>
                  <div className="text-2xl font-semibold leading-none">{value}</div>
                  <div className="text-sm text-slate-500">{label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-2" />

      {/* Mission & Features */}
      <section className="container mx-auto px-4 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 rounded-2xl">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>
              Make urban mobility reliable, affordable, and transparent for everyone involved.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-600">
            <p>
              We focus on real-time visibility, operator control, and rider safety. With a modular design, you can
              plug {appName} into your existing stack or run it end‑to‑end.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Dispatch intelligence that reduces idle time</li>
              <li>Role‑based dashboards for ops, finance, and support</li>
              <li>Privacy‑aware telemetry and robust audit logs</li>
            </ul>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ title, desc, Icon }, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  <CardTitle className="text-lg">{title}</CardTitle>
                </div>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 pb-10 md:pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">How We Got Here</h2>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-200" />
            <div className="space-y-6">
              {timeline.map((t, idx) => (
                <div key={idx} className="relative pl-10">
                  <div className="absolute left-1 top-1.5 h-4 w-4 rounded-full bg-slate-900/80" />
                  <Card className="rounded-2xl">
                    <CardContent className="p-5">
                      <div className="text-sm text-slate-500">{t.year}</div>
                      <div className="font-medium">{t.title}</div>
                      <p className="text-slate-600 text-sm mt-1">{t.text}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 pb-10 md:pb-16">
        <Card className="max-w-5xl mx-auto rounded-2xl">
          <CardHeader>
            <CardTitle>Tech We Love</CardTitle>
            <CardDescription>Modern, modular, and production‑ready.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {[
              "React",
              "Redux Toolkit",
              "TypeScript (optional)",
              "Tailwind CSS",
              "shadcn/ui",
              "Framer Motion",
              "Node & Express",
              "MongoDB/Postgres",
              "Stripe (payments)",
              "Map SDKs (Mapbox/Google)",
            ].map((t) => (
              <Badge key={t} variant="secondary" className="rounded-xl px-3 py-1 text-sm">
                {t}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 pb-10 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Built by a focused team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {team.map((m, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-6 flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  {m.img ? <AvatarImage src={m.img} alt={m.name} /> : <AvatarFallback>{m.initials}</AvatarFallback>}
                </Avatar>
                <div>
                  <div className="font-medium">{m.name}</div>
                  <div className="text-sm text-slate-500">{m.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 pb-10 md:pb-16">
        <Card className="max-w-4xl mx-auto rounded-2xl">
          <CardHeader>
            <CardTitle>FAQ</CardTitle>
            <CardDescription>Quick answers about {appName}.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Does it work on mobile and desktop?</AccordionTrigger>
                <AccordionContent>
                  Yes — the UI is fully responsive with Tailwind and accessible components from shadcn/ui.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I integrate with my current backend?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. Use our modular services and REST/GraphQL endpoints, or plug only the parts you need.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do you ensure rider safety?</AccordionTrigger>
                <AccordionContent>
                  In‑ride SOS, trip‑share links, background checks, and anomaly alerts reduce risk across the platform.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 pb-20">
        <Card className="max-w-5xl mx-auto rounded-2xl">
          <CardContent className="p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold">Ready to elevate your operations?</h3>
              <p className="text-slate-600 mt-2">
                Let our team help you pilot {appName} with your fleet and city. We’ll tailor dashboards, roles, and
                automations for your exact needs.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1"><PhoneCall className="h-4 w-4" /> {supportPhone}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button size="lg" className="rounded-2xl">Book a Demo</Button>
              <Button size="lg" variant="outline" className="rounded-2xl">Talk to Support</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}