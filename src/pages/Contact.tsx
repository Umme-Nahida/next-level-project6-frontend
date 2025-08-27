
import { useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {Mail, Phone, MapPin, Send} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Contact() {
  const dispatch = useDispatch?.();

  function onSubmit(e:any) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    dispatch && dispatch({ type: "contact/submit", payload });
    alert("Thanks! We'll get back to you soon.");
    e.currentTarget.reset();
  }

  const offices = [
    { city: "Dhaka", lines: ["Banani, Road 11", "Dhaka 1213"], phone: "+880 1XXX-XXXXXX" },
    { city: "Chattogram", lines: ["Agrabad Commercial Area"], phone: "+880 1XXX-XXXXXX" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-slate-50">
      <section className="container mx-auto px-4 py-10 lg:py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Us</CardTitle>
                <p className="text-slate-600 text-sm">For inquiries, demos or quotes — fill the form below.</p>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4" onSubmit={onSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="name@email.com" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" placeholder="01XXXXXXXXX" required />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" placeholder="e.g. Corporate fleet demo" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Write your requirements/questions…" rows={5} required />
                  </div>
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="flex items-center gap-1"><Mail className="h-4 w-4" /> support@ride.example</div>
                      <div className="flex items-center gap-1"><Phone className="h-4 w-4" /> +880 1XXX-XXXXXX</div>
                    </div>
                    <Button type="submit" className="gap-2"><Send className="h-4 w-4" /> Submit</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2"><MapPin className="h-5 w-5" /> Office Locations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {offices.map((o) => (
                  <div key={o.city} className="border rounded-lg p-3">
                    <div className="font-semibold">{o.city}</div>
                    <div className="text-sm text-slate-600">{o.lines.join(", ")}</div>
                    <div className="text-sm mt-2">{o.phone}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">Business hours: Mon–Fri, 9:00–18:00</p>
                <p className="text-sm text-slate-600 mt-2">For urgent issues, call +880 1XXX-XXXXXX or email support@ride.example</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}