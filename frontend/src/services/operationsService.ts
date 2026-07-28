export type Alert = {
  id: string
  type: string
  severity: "Critical" | "High" | "Medium" | "Low"
  time: string
  status: "Active" | "Acknowledged" | "Resolved"
}

export type RecoveryAction = {
  id: string
  name: string
  icon: string
  status: "Ready" | "In Progress" | "Completed" | "Failed"
  executionTime?: string
}

export type RecoveryHistory = {
  id: string
  action: string
  trigger: "Automated (ML)" | "Manual"
  time: string
  status: "Success" | "Failed"
}

export const getAlerts = async (): Promise<Alert[]> => {
  await new Promise(r => setTimeout(r, 600))
  return [
    { id: "ALT-1092", type: "High CPU Usage", severity: "Critical", time: "2026-07-29 04:45:10", status: "Active" },
    { id: "ALT-1091", type: "DB Connection Timeout", severity: "High", time: "2026-07-29 04:40:22", status: "Acknowledged" },
    { id: "ALT-1090", type: "Memory Leak Detected", severity: "Medium", time: "2026-07-29 04:30:15", status: "Active" },
    { id: "ALT-1089", type: "High Network Latency", severity: "Low", time: "2026-07-29 04:15:00", status: "Resolved" },
    { id: "ALT-1088", type: "Unusual Login Activity", severity: "High", time: "2026-07-29 03:22:11", status: "Resolved" },
  ]
}

export const getRecoveryActions = async (): Promise<RecoveryAction[]> => {
  await new Promise(r => setTimeout(r, 400))
  return [
    { id: "ACT-1", name: "Restart Service", icon: "RefreshCw", status: "Ready" },
    { id: "ACT-2", name: "Restart Container", icon: "Box", status: "In Progress", executionTime: "45s" },
    { id: "ACT-3", name: "Auto Scaling", icon: "Scaling", status: "Ready" },
    { id: "ACT-4", name: "Failover Switch", icon: "ShieldAlert", status: "Ready" },
    { id: "ACT-5", name: "Resource Allocation", icon: "Database", status: "Completed", executionTime: "1m 12s" },
  ]
}

export const getRecoveryHistory = async (): Promise<RecoveryHistory[]> => {
  await new Promise(r => setTimeout(r, 800))
  return [
    { id: "HST-592", action: "Scaled up API cluster", trigger: "Automated (ML)", time: "2026-07-29 04:35:10", status: "Success" },
    { id: "HST-591", action: "Restarted auth-service", trigger: "Manual", time: "2026-07-29 03:10:05", status: "Success" },
    { id: "HST-590", action: "Database Failover", trigger: "Automated (ML)", time: "2026-07-28 22:14:30", status: "Failed" },
  ]
}
