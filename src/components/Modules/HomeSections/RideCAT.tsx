import  { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { MapPin, Clock, Truck } from "lucide-react";
import { Link } from "react-router";

export default function RideCTA() {
  const [open, setOpen] = useState(false);
  const [estimating, setEstimating] = useState(false);

  return (
    <MotionConfig>
      <section className="bg-gradient-to-r from-sky-50 to-green-400 py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="space-y-5"
            >
              <p className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
                <Truck className="w-4 h-4" />
                Ride Management
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900">
                Fast, reliable rides — managed in one place
              </h2>

              <p className="text-slate-600 max-w-prose">
                Create, estimate, and dispatch rides with ease. Real-time updates, clear pricing, and easy driver assignment — built for teams that move fast.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                 <Link to="/requestForm">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setOpen(true)}
                  className="cursor-pointer inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl shadow-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
                >
                 
                    Request Ride
                  
                  <MapPin className="w-4 h-4" />
                </motion.button>
                </Link>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  onClick={() => { setEstimating(true); setOpen(true); }}
                  className="inline-flex items-center gap-2 border border-slate-200 bg-white px-5 py-3 rounded-xl text-sm font-medium shadow-md text-slate-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-300"
                >
                  Estimate Fare
                  <Clock className="w-4 h-4" />
                </motion.button>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-emerald-100 p-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Pickup-to-Drop Tracking</div>
                    <div className="text-slate-500">See live locations for every ride.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-emerald-100 p-3">
                    <Clock className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Quick Estimates</div>
                    <div className="text-slate-500">Get a predicted fare before you dispatch.</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white p-8 shadow-xl border border-slate-100 flex flex-col justify-between h-full"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-slate-500">Next available driver</div>
                    <div className="font-medium text-slate-900">Rider ID: #A34F</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400">ETA</div>
                    <div className="font-semibold">5 min</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <div className="text-xs text-slate-400">From</div>
                    <div className="font-medium text-slate-800">House 21, Green Road</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4">
                    <div className="text-xs text-slate-400">To</div>
                    <div className="font-medium text-slate-800">Central Station</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={() => setOpen(true)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-600 text-white font-semibold shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
                >
                  Dispatch Ride
                </button>

                <button
                  onClick={() => { setEstimating(true); setOpen(true); }}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-700 shadow-sm hover:shadow-md"
                >
                  Quick Fare
                </button>
              </div>
            </motion.div>
          </div>

          {/* Modal */}
          {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/40" onClick={() => { setOpen(false); setEstimating(false); }} />

              <motion.dialog
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
                aria-modal="true"
              >
                <div className="flex items-center justify-between border-b pb-3">
                  <h3 className="text-lg font-semibold text-slate-900">{estimating ? 'Estimate Fare' : 'Request a Ride'}</h3>
                  <button
                    onClick={() => { setOpen(false); setEstimating(false); }}
                    className="text-slate-400 hover:text-slate-600 focus:outline-none"
                    aria-label="Close dialog"
                  >
                    ✕
                  </button>
                </div>

                <form className="mt-4 grid grid-cols-1 gap-4">
                  <label className="flex flex-col">
                    <span className="text-xs text-slate-500">Pickup</span>
                    <input className="mt-1 rounded-md border border-slate-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Enter pickup address" />
                  </label>

                  <label className="flex flex-col">
                    <span className="text-xs text-slate-500">Destination</span>
                    <input className="mt-1 rounded-md border border-slate-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Enter destination" />
                  </label>

                  {!estimating && (
                    <label className="flex flex-col">
                      <span className="text-xs text-slate-500">Preferred time (optional)</span>
                      <input type="datetime-local" className="mt-1 rounded-md border border-slate-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200" />
                    </label>
                  )}

                  <div className="flex items-center justify-end gap-4 mt-6">
                    <button type="button" onClick={() => { setOpen(false); setEstimating(false); }} className="px-4 py-2 rounded-md text-sm font-medium text-slate-600 bg-white border border-slate-200">Cancel</button>
                    <button type="submit" className="px-5 py-2 rounded-md bg-sky-600 text-white text-sm font-semibold shadow-md hover:shadow-lg">{estimating ? 'Get Estimate' : 'Confirm Ride'}</button>
                  </div>
                </form>
              </motion.dialog>
            </div>
          )}
        </div>
      </section>
    </MotionConfig>
  );
}
