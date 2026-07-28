import { Outlet } from "react-router-dom"
import { Sidebar } from "@/components/Sidebar/Sidebar"
import { TopNavigation } from "@/components/TopNavigation/TopNavigation"

export function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNavigation />
        <main className="flex-1 overflow-y-auto p-6 scroll-smooth bg-secondary/20">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
