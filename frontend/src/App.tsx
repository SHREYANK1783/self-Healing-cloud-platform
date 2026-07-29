import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "@/context/ThemeContext"

// Layouts
import { DashboardLayout } from "@/layouts/DashboardLayout"
import { AuthLayout } from "@/layouts/AuthLayout"

// Pages
import { DashboardPage } from "@/pages/Dashboard/DashboardPage"
import { MonitoringPage } from "@/pages/Monitoring/MonitoringPage"
import { MLPage } from "@/pages/MachineLearning/MLPage"
import { AlertsPage } from "@/pages/Alerts/AlertsPage"
import { RecoveryPage } from "@/pages/Recovery/RecoveryPage"
import { ReportsPage } from "@/pages/Reports/ReportsPage"
import { LogsPage } from "@/pages/Logs/LogsPage"
import { UsersPage } from "@/pages/Users/UsersPage"
import { SettingsPage } from "@/pages/Settings/SettingsPage"

// Auth Pages
import { LoginPage } from "@/pages/Auth/LoginPage"
import { RegisterPage } from "@/pages/Auth/RegisterPage"
import { ForgotPasswordPage } from "@/pages/Auth/ForgotPasswordPage"
import { ResetPasswordPage } from "@/pages/Auth/ResetPasswordPage"

const queryClient = new QueryClient()

function ProtectedRoute() {
  const isAuthenticated = typeof window !== "undefined" && window.localStorage.getItem("isAuthenticated") === "true"

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}

function PublicRoute() {
  const isAuthenticated = typeof window !== "undefined" && window.localStorage.getItem("isAuthenticated") === "true"

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="Self_Healing_Cloud-theme">
        <BrowserRouter>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route element={<AuthLayout />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
              </Route>
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/monitoring" element={<MonitoringPage />} />
                <Route path="/ml" element={<MLPage />} />
                <Route path="/alerts" element={<AlertsPage />} />
                <Route path="/recovery" element={<RecoveryPage />} />
                <Route path="/reports" element={<ReportsPage />} />
                <Route path="/logs" element={<LogsPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Route>
            </Route>

            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
