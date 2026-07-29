import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Activity,
  BrainCircuit,
  BellRing,
  ShieldAlert,
  FileBarChart,
  ScrollText,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { useState } from "react"

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "System Monitoring", href: "/monitoring", icon: Activity },
  { name: "Machine Learning", href: "/ml", icon: BrainCircuit },
  { name: "Alerts", href: "/alerts", icon: BellRing },
  { name: "Recovery Center", href: "/recovery", icon: ShieldAlert },
  { name: "Reports", href: "/reports", icon: FileBarChart },
  { name: "Logs", href: "/logs", icon: ScrollText },
  { name: "User Management", href: "/users", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        "relative flex flex-col h-screen bg-card border-r transition-all duration-300",
        collapsed ? "w-[80px]" : "w-[260px]"
      )}
    >
      <div className="flex items-center justify-between p-4 h-16 border-b">
        {!collapsed && (
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400 truncate transition-opacity duration-300">
            Self_Healing_Cloud
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "p-1.5 rounded-md hover:bg-secondary transition-colors",
            collapsed && "mx-auto"
          )}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                isActive
                  ? "bg-primary text-primary-foreground font-medium shadow-md shadow-primary/20"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )
            }
          >
            <item.icon
              size={22}
              className={cn("flex-shrink-0 transition-transform duration-200 group-hover:scale-110")}
            />
            {!collapsed && (
              <span className="truncate whitespace-nowrap transition-opacity duration-300">
                {item.name}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t flex flex-col gap-2">
        {!collapsed && (
          <div className="bg-gradient-to-tr from-indigo-500/10 to-primary/10 rounded-xl p-4 border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
            <h4 className="text-sm font-semibold mb-1 relative z-10">System Status</h4>
            <div className="flex items-center gap-2 text-xs text-emerald-500 relative z-10">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All systems operational
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
