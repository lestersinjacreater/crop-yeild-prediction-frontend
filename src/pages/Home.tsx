import React from 'react';
import { Link } from 'react-router-dom';
import { Plane as Plant, BarChart3, Cloud, Users } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Plant,
      title: 'Crop Predictions',
      description: 'Get accurate yield predictions for common Kenyan crops using advanced machine learning.',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'View detailed analytics and insights about your farming predictions and history.',
    },
    {
      icon: Cloud,
      title: 'Weather Integration',
      description: 'Access real-time weather data and forecasts for informed decision-making.',
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other farmers, share experiences, and get expert advice.',
    },
  ];

  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Kenyan Agriculture Crop Yield Prediction
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Make data-driven farming decisions with our advanced prediction system tailored for Kenyan agriculture.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/predictions"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Start Prediction
          </Link>
          <Link
            to="/learn"
            className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <feature.icon className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-green-50 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Data-Driven</h3>
            <p className="text-gray-600">Make informed decisions based on advanced ML predictions</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
            <p className="text-gray-600">Tailored specifically for Kenyan agricultural conditions</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-600">Connect with experts and fellow farmers</p>
          </div>
        </div>
      </section>
    </div>
  );
}