import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="intellicloud-theme">
        <BrowserRouter>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
            </Route>

            <Route element={<DashboardLayout />}>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/monitoring" element={<MonitoringPage />} />
              <Route path="/ml" element={<MLPage />} />
              <Route path="/alerts" element={<AlertsPage />} />
              <Route path="/recovery" element={<RecoveryPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/logs" element={<LogsPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
