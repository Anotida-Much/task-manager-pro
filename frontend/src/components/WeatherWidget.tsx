import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { WeatherData } from '@/types';
import { Cloud, Sun, CloudRain, RefreshCw } from 'lucide-react';

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockWeatherData: WeatherData = {
        temperature: Math.round(Math.random() * 25 + 10), // 10-35°C
        description: ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain'][Math.floor(Math.random() * 4)],
        location: 'Durban',
        humidity: Math.round(Math.random() * 40 + 30), // 30-70%
        windSpeed: Math.round(Math.random() * 15 + 5), // 5-20 km/h
      };
      
      setWeather(mockWeatherData);
      console.log('Weather data fetched:', mockWeatherData);
    } catch (err) {
      setError('Failed to fetch weather data');
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const getWeatherIcon = (description: string) => {
    if (description.includes('Sunny')) return <Sun className="w-6 h-6 text-yellow-400" />;
    if (description.includes('Rain')) return <CloudRain className="w-6 h-6 text-blue-400" />;
    if (description.includes('Cloudy')) return <Cloud className="w-6 h-6 text-gray-400" />;
    return <Cloud className="w-6 h-6 text-gray-400" />;
  };

  if (loading) {
    return (
      <div className="bg-gray-800 text-white rounded-lg px-4 py-3 flex items-center space-x-3 w-fit">
        <RefreshCw className="w-5 h-5 animate-spin text-gray-400" />
        <span className="text-sm">Loading...</span>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="bg-gray-800 text-white rounded-lg px-4 py-3 flex items-center space-x-3 w-fit">
        <Button
          variant="ghost"
          size="sm"
          onClick={fetchWeather}
          className="text-white hover:bg-gray-700 p-1"
        >
          <RefreshCw className="w-4 h-4" />
        </Button>
        <span className="text-sm">Weather unavailable</span>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 text-white rounded-lg px-4 py-3 flex items-center space-x-3 w-fit font-poppins">
      {getWeatherIcon(weather.description)}
      <div className="flex items-center space-x-2">
        <span className="text-lg font-medium">{weather.temperature}°C</span>
        <span className="text-sm text-gray-300">{weather.location}</span>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={fetchWeather}
        className="text-white hover:bg-gray-700 p-1 ml-2"
      >
        <RefreshCw className="w-4 h-4" />
      </Button>
    </div>
  );
}
