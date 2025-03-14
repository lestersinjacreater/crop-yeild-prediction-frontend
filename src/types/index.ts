export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface CropPrediction {
  id: string;
  cropType: string;
  predictedYield: number;
  confidence: number;
  timestamp: string;
}

export interface WeatherData {
  temperature: number;
  rainfall: number;
  humidity: number;
  date: string;
}