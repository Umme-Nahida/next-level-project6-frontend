import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, HelpCircle, Phone, Mail, ShieldCheck, Car, CreditCard, Smartphone, AlertTriangle, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// --- Types ---
interface FAQItem {
  id: string;
  q: string;
  a: React.ReactNode;
  tags: string[];
}

const ALL_FAQS: FAQItem[] = [
  // Riders
  {
    id: "r-booking-101",
    q: "How do I book a ride?",
    a: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Enter your destination from the home screen.</li>
        <li>Select ride type (Economy / XL / Bike).</li>
        <li>Confirm the fare and estimated time, then tap <b>Confirm</b>.</li>
      </ul>
    ),
    tags: ["rider", "booking", "ride", "start", "how to"],
  },
  {
    id: "r-cancel-fee",
    q: "Will I be charged for canceling a ride?",
    a: (
      <p>
        A small cancellation fee may apply if you cancel after the driver has accepted the ride or after <b>2 minutes</b> of acceptance, or when the driver has already arrived at the pickup location.
      </p>
    ),
    tags: ["rider", "cancel", "fee", "policy"],
  },
  {
    id: "r-safety",
    q: "What safety features are available?",
    a: (
      <ul className="list-disc pl-5 space-y-1">
        <li>In-app SOS button with 24/7 support team.</li>
        <li>Live trip sharing link.</li>
        <li>Driver verification and ratings.</li>
      </ul>
    ),
    tags: ["rider", "safety", "sos", "share", "help"],
  },
  // Drivers
  {
    id: "d-onboarding",
    q: "How do I sign up as a driver?",
    a: (
      <p>
        Go to <b>Become a Driver</b> in the app, upload your ID, driving license, and vehicle documents. After verification, onboarding and training will be scheduled.
      </p>
    ),
    tags: ["driver", "onboarding", "signup", "documents"],
  },
  {
    id: "d-earnings",
    q: "How do I withdraw my earnings?",
    a: (
      <p>
        Payouts can be transferred from your in-app wallet to your mobile banking or bank account. Weekly auto-withdraw options are also available.
      </p>
    ),
    tags: ["driver", "earnings", "payout", "wallet"],
  },
  // Payments
  {
    id: "p-methods",
    q: "What payment methods are supported?",
    a: (
      <p>
        Cash, card, and mobile wallets are supported. Set your default method under Profile &gt; Payments.
      </p>
    ),
    tags: ["payment", "card", "wallet", "cash"],
  },
  {
    id: "p-receipt",
    q: "How do I get a receipt by email?",
    a: (
      <p>
        An automatic receipt is sent to your email after the ride ends. You can also download receipts from Ride History.
      </p>
    ),
    tags: ["payment", "receipt", "email"],
  },
  // App & Account
  {
    id: "a-reset-pass",
    q: "What if I forget my password?",
    a: (
      <p>
        Tap <b>Forgot Password</b> on the login screen, verify with OTP, and set a new password.
      </p>
    ),
    tags: ["account", "password", "login", "otp"],
  },
  {
    id: "a-update",
    q: "Why is updating the app required?",
    a: (
      <p>
        Minimum version requirements may be enforced to deliver security updates, bug fixes, and performance improvements.
      </p>
    ),
    tags: ["app", "update", "version"],
  },
  // Troubleshooting
  {
    id: "t-no-driver",
    q: "What if no drivers are nearby?",
    a: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Adjust the pickup location slightly.</li>
        <li>Try a different ride type (for example, Bike → Car).</li>
        <li>Expect longer wait times during peak hours.</li>
      </ul>
    ),
    tags: ["troubleshoot", "driver", "search", "eta"],
  },
  {
    id: "t-app-crash",
    q: "What should I do if the app crashes?",
    a: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Update the app to the latest version.</li>
        <li>Clear app cache/storage.</li>
        <li>Check your network connection.</li>
      </ul>
    ),
    tags: ["troubleshoot", "crash", "bug", "update"],
  },
];

const categories = [
  { key: "rider", label: "Rider", icon: Car },
  { key: "driver", label: "Driver", icon: Car },
  { key: "payment", label: "Payments", icon: CreditCard },
  { key: "account", label: "Account", icon: Smartphone },
  { key: "app", label: "App", icon: Smartphone },
  { key: "troubleshoot", label: "Troubleshoot", icon: AlertTriangle },
  { key: "safety", label: "Safety", icon: ShieldCheck },
];

export default function FAQPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return ALL_FAQS.filter((item) => {
      const inTag = activeTag ? item.tags.includes(activeTag) : true;
      if (!q) return inTag;
      const hay = (item.q + " " + (typeof item.a === "string" ? item.a : "") + " " + item.tags.join(" ")).toLowerCase();
      return inTag && hay.includes(q);
    });
  }, [query, activeTag]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="size-10 rounded-2xl bg-slate-900 text-white grid place-items-center">
            <HelpCircle className="size-5" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-semibold">FAQs</h1>
            <p className="text-sm text-slate-600">Common questions and answers for the ride management platform</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Button variant="outline" size="sm" className="rounded-2xl" asChild>
              <a href="#contact-support" className="flex items-center gap-2">
                <Phone className="size-4" /> Live Support
              </a>
            </Button>
            <Button size="sm" className="rounded-2xl" asChild>
              <a href="mailto:support@example.com" className="flex items-center gap-2">
                <Mail className="size-4" /> Email
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 sm:py-10">
        {/* Search */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Search the help center</CardTitle>
            <CardDescription>Type a keyword or select a category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                <Input
                  placeholder="e.g.: payment, cancel, driver"
                  className="pl-9 rounded-2xl"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              {activeTag && (
                <Button variant="ghost" className="rounded-2xl" onClick={() => setActiveTag(null)}>
                  Clear Filter
                </Button>
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map(({ key, label, icon: Icon }) => (
                <Badge
                  key={key}
                  variant={activeTag === key ? "default" : "outline"}
                  className={`px-3 py-1.5 rounded-2xl cursor-pointer select-none flex items-center gap-1 ${
                    activeTag === key ? "" : "hover:bg-slate-100"
                  }`}
                  onClick={() => setActiveTag((t) => (t === key ? null : key))}
                >
                  <Icon className="size-3.5" /> {label}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ list */}
        <section className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.length === 0 ? (
                <Card className="rounded-2xl">
                  <CardContent className="py-10 text-center text-slate-500">
                    No results found. Try different keywords.
                  </CardContent>
                </Card>
              ) : (
                <Accordion type="single" collapsible className="w-full">
                  {filtered.map((item) => (
                    <AccordionItem key={item.id} value={item.id} className="border-b">
                      <AccordionTrigger className="text-left text-base md:text-lg py-4">
                        <div className="flex items-center gap-2">
                          <ChevronRight className="size-4 opacity-60" />
                          <span>{item.q}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-slate-700 leading-relaxed">
                        {item.a}
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {item.tags.map((t) => (
                            <Badge key={t} variant="outline" className="rounded-full">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </motion.div>
          </div>

          {/* Side help panel */}
          <aside className="lg:col-span-1">
            <Card className="rounded-2xl h-full">
              <CardHeader>
                <CardTitle>Need more help?</CardTitle>
                <CardDescription>Our support team is available 24/7</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button id="contact-support" className="w-full rounded-2xl" asChild>
                  <a href="tel:+8801000000000" className="flex items-center gap-2">
                    <Phone className="size-4" /> Call Support
                  </a>
                </Button>
                <Button variant="outline" className="w-full rounded-2xl" asChild>
                  <a href="mailto:support@example.com" className="flex items-center gap-2">
                    <Mail className="size-4" /> Email Support
                  </a>
                </Button>
                <Card className="rounded-2xl border-dashed">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <ShieldCheck className="size-4" /> Safety Tips
                    </CardTitle>
                    <CardDescription>Small tips to stay safe during trips</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Verify the vehicle details before starting the ride.</li>
                      <li>Share your trip link with family or friends.</li>
                      <li>Know where the SOS button is located.</li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </aside>
        </section>

        {/* Quick Links */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="rounded-2xl p-4">
              <CardTitle className="text-base">Contact Support</CardTitle>
              <CardDescription>Call or email our support team for urgent help.</CardDescription>
            </Card>
            <Card className="rounded-2xl p-4">
              <CardTitle className="text-base">Safety Center</CardTitle>
              <CardDescription>Read detailed safety guidelines and policies.</CardDescription>
            </Card>
            <Card className="rounded-2xl p-4">
              <CardTitle className="text-base">Driver Onboarding</CardTitle>
              <CardDescription>Information for becoming a verified driver.</CardDescription>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}