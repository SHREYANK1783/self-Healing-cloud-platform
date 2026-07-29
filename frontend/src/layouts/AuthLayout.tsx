import { Outlet } from "react-router-dom"
import { motion } from "framer-motion"
import { Activity, BrainCircuit, ShieldCheck, Sparkles, Zap } from "lucide-react"

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.18),_transparent_30%),linear-gradient(135deg,_#f8fbff,_#eef4ff)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col md:flex-row">
        <div className="flex flex-1 flex-col items-center justify-center p-6 lg:p-12">
          <Outlet />
        </div>

        <div className="relative hidden flex-1 overflow-hidden bg-primary/95 p-10 md:flex md:flex-col md:justify-center">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-sky-500 opacity-95"
          />
          <motion.div
            animate={{ y: [0, -16, 0], x: [0, 12, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[-40px] top-16 h-44 w-44 rounded-full bg-white/20 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 18, 0], x: [0, -10, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
          />

          <div className="relative z-10 max-w-lg text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Trusted by resilient cloud teams
            </div>

            <div className="rounded-[28px] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-white/15 p-3">
                  <BrainCircuit className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold">Self-Healing Cloud</h2>
                  <p className="text-sm text-white/80">Intelligent automation for modern infrastructure</p>
                </div>
              </div>

              <p className="text-lg leading-8 text-white/85">
                Monitor services, detect anomalies early, and trigger remediation workflows without lifting a finger.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                  <div className="mb-2 flex items-center gap-2 text-emerald-200">
                    <ShieldCheck className="h-4 w-4" />
                    <span className="text-sm font-medium">Secure by design</span>
                  </div>
                  <p className="text-sm text-white/80">Protected access and policy-aware automation.</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                  <div className="mb-2 flex items-center gap-2 text-cyan-200">
                    <Zap className="h-4 w-4" />
                    <span className="text-sm font-medium">Real-time recovery</span>
                  </div>
                  <p className="text-sm text-white/80">Instant remediation guidance for critical incidents.</p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
                <Activity className="h-4 w-4" />
                24/7 visibility across services, clusters, and workloads
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
