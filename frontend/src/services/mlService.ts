export type ModelStats = {
  activeModel: string
  accuracy: number
  precision: number
  recall: number
  f1Score: number
  lastTrainingTime: string
  modelStatus: "Online" | "Training" | "Offline"
}

export type Prediction = {
  id: string
  timestamp: string
  prediction: "Anomaly" | "Normal"
  confidenceScore: number
  severity: "Critical" | "High" | "Medium" | "Low" | "None"
  status: "Resolved" | "Investigating" | "Unresolved" | "N/A"
}

export const getModelStats = async (): Promise<ModelStats> => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return {
    activeModel: "IsolationForest-v3.2",
    accuracy: 98.4,
    precision: 96.7,
    recall: 95.8,
    f1Score: 96.2,
    lastTrainingTime: "2 hours ago",
    modelStatus: "Online",
  }
}

export const getPredictions = async (): Promise<Prediction[]> => {
  await new Promise((resolve) => setTimeout(resolve, 700))
  return [
    { id: "PRD-9982", timestamp: "2026-07-29 04:30:12", prediction: "Anomaly", confidenceScore: 0.94, severity: "High", status: "Investigating" },
    { id: "PRD-9981", timestamp: "2026-07-29 04:25:01", prediction: "Normal", confidenceScore: 0.99, severity: "None", status: "N/A" },
    { id: "PRD-9980", timestamp: "2026-07-29 04:15:22", prediction: "Anomaly", confidenceScore: 0.88, severity: "Medium", status: "Resolved" },
    { id: "PRD-9979", timestamp: "2026-07-29 03:55:10", prediction: "Normal", confidenceScore: 0.98, severity: "None", status: "N/A" },
    { id: "PRD-9978", timestamp: "2026-07-29 03:22:05", prediction: "Anomaly", confidenceScore: 0.99, severity: "Critical", status: "Unresolved" },
    { id: "PRD-9977", timestamp: "2026-07-29 02:10:44", prediction: "Normal", confidenceScore: 0.96, severity: "None", status: "N/A" },
  ]
}
