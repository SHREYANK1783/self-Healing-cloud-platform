export type ProcessInfo = {
  id: string
  name: string
  cpu: number
  memory: number
  status: "running" | "sleeping" | "stopped"
  uptime: string
}

export type MonitoringStats = {
  cpuUsage: number
  memoryUsage: number
  diskUsage: number
  networkUsage: number
  systemUptime: string
  responseTime: number
}

export const getMonitoringStats = async (): Promise<MonitoringStats> => {
  await new Promise((resolve) => setTimeout(resolve, 600))
  
  return {
    cpuUsage: 45.2,
    memoryUsage: 68.7,
    diskUsage: 32.1,
    networkUsage: 12.4, // MB/s
    systemUptime: "45d 12h 34m",
    responseTime: 45 // ms
  }
}

export const getRunningProcesses = async (): Promise<ProcessInfo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 800))
  
  return [
    { id: "PID-9821", name: "ml-inference-engine", cpu: 45.2, memory: 2048, status: "running", uptime: "12d 4h" },
    { id: "PID-2341", name: "postgres-db", cpu: 12.4, memory: 4096, status: "running", uptime: "45d 12h" },
    { id: "PID-5122", name: "redis-cache", cpu: 2.1, memory: 1024, status: "running", uptime: "45d 12h" },
    { id: "PID-8912", name: "api-gateway", cpu: 18.7, memory: 512, status: "running", uptime: "5d 8h" },
    { id: "PID-1102", name: "anomaly-detector", cpu: 65.4, memory: 8192, status: "running", uptime: "2d 1h" },
    { id: "PID-3392", name: "log-aggregator", cpu: 5.2, memory: 256, status: "sleeping", uptime: "12d 4h" },
    { id: "PID-4421", name: "auth-service", cpu: 1.1, memory: 128, status: "running", uptime: "15d 2h" },
    { id: "PID-9923", name: "backup-job", cpu: 0.0, memory: 0, status: "stopped", uptime: "0" },
  ]
}
