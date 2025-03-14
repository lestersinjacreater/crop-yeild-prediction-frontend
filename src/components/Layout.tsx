import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Plane as Plant, BarChart3, Users, MessageSquare, Sun, User } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { icon: Plant, label: 'Predictions', path: '/predictions' },
    { icon: BarChart3, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'Community', path: '/community' },
    { icon: MessageSquare, label: 'Resources', path: '/resources' },
    { icon: Sun, label: 'Weather', path: '/weather' },
  ];

  return (
    <nav className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Plant className="h-8 w-8" />
            <span className="font-bold text-xl">KenyaCrop</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-1 hover:text-green-200 transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <Link to="/profile" className="flex items-center space-x-1">
            <User className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <footer className="bg-green-900 text-white mt-auto py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">© 2024 KenyaCrop Yield Prediction System</p>
        </div>
      </footer>
    </div>
  );
}