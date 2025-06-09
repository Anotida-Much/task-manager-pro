
export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

export interface Task {
  id: number;
  userId: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

export interface WeatherData {
  temperature: number;
  description: string;
  location: string;
  humidity: number;
  windSpeed: number;
}
