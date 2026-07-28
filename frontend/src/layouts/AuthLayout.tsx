import { Outlet } from "react-router-dom"
import { BrainCircuit } from "lucide-react"

export function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-12">
        <Outlet />
      </div>
      <div className="hidden md:flex flex-1 bg-primary items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-primary opacity-90 z-0" />
        
        <div className="z-10 text-white flex flex-col items-center max-w-lg text-center p-8">
          <BrainCircuit size={80} className="mb-8 opacity-90 animate-pulse" />
          <h2 className="text-4xl font-bold mb-4">Self-Healing Cloud</h2>
          <p className="text-lg opacity-80 mb-8">
            Intelligent ML-driven anomaly detection and automated remediation platform. 
            Monitor, predict, and recover with enterprise-grade reliability.
          </p>
          <div className="grid grid-cols-2 gap-4 w-full mt-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div className="text-3xl font-bold mb-1">99.99%</div>
              <div className="text-sm opacity-80">Uptime SLA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div className="text-3xl font-bold mb-1">&lt; 100ms</div>
              <div className="text-sm opacity-80">Detection Latency</div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl z-0" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl z-0" />
      </div>
    </div>
  )
}
