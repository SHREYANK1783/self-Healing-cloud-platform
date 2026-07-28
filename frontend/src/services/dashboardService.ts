export type SystemOverview = {
  cpuUsage: number
  memoryUsage: number
  diskUsage: number
  networkUsage: number
  healthySystems: number
  failedSystems: number
  activeAlerts: number
  runningServices: number
}

export type TrendData = {
  time: string
  cpu: number
  memory: number
  disk: number
}

export const getDashboardOverview = async (): Promise<SystemOverview> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800))
  
  return {
    cpuUsage: 45.2,
    memoryUsage: 68.7,
    diskUsage: 32.1,
    networkUsage: 89.4,
    healthySystems: 142,
    failedSystems: 3,
    activeAlerts: 12,
    runningServices: 458,
  }
}

export const getDashboardTrends = async (): Promise<TrendData[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  
  const data: TrendData[] = []
  const now = new Date()
  
  for (let i = 24; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60 * 60 * 1000)
    data.push({
      time: `${time.getHours()}:00`,
      cpu: Math.floor(Math.random() * 40) + 30, // 30-70%
      memory: Math.floor(Math.random() * 30) + 50, // 50-80%
      disk: Math.floor(Math.random() * 10) + 30, // 30-40%
    })
  }
  
  return data
}
