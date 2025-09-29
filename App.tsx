
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import PhotoUploadScreen from './components/PhotoUploadScreen';
import ConfirmationScreen from './components/ConfirmationScreen';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen font-sans text-slate-800">
        <header className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
            </svg>
            <h1 className="text-2xl font-bold text-slate-900">Secure Home Insurance</h1>
          </div>
        </header>
        <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/upload" element={<PhotoUploadScreen />} />
            <Route path="/confirmation" element={<ConfirmationScreen />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
