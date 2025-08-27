import { Button } from "@/components/ui/button";
import { MapPin, CreditCard, Car, ShieldCheck, Clock } from "lucide-react";
import { Link } from "react-router";

export default function Banner() {
    return (
        <div style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1737541332978-2e8e6b15a3cc?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                backgroundSize: "cover",
            }} className="bg-bottom-left">
            <section  className="relative flex flex-col items-center justify-center bg-black/70 text-white h-[600px] py-16 px-6 md:px-20 shadow-lg overflow-hidden">
                {/* Overlay Pattern */}
                <div className="absolute inset-0 bg-black/20 z-0"></div>

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Book Your Ride Anytime, Anywhere
                    </h1>

                    {/* Sub Heading */}
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        Seamless ride booking with real-time tracking, instant fare estimation,
                        and flexible payment options.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
                        <div className="flex flex-col items-center space-y-2">
                            <MapPin className="w-8 h-8" />
                            <span>Easy Pickup</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <CreditCard className="w-8 h-8" />
                            <span>Secure Payment</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <Car className="w-8 h-8" />
                            <span>Live Tracking</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <ShieldCheck className="w-8 h-8" />
                            <span>Safe Rides</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <Clock className="w-8 h-8" />
                            <span>Ride History</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10">
                        <Link to={'/requestForm'}>
                            <Button size="lg" className="bg-ring text-white font-semibold hover:bg-primary cursor-pointer">
                                Request a Ride Now
                            </Button>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
}
