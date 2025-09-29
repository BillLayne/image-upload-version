
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && policyNumber.trim()) {
      navigate('/upload', { state: { name, policyNumber } });
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in">
      <h2 className="text-3xl font-bold mb-2 text-slate-900">Photo Submission Portal</h2>
      <p className="text-slate-600 mb-6">
        Help us assess your home for insurance by providing a few key photos. Please enter your details below to begin.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="policyNumber" className="block text-sm font-medium text-slate-700">Policy / Application Number</label>
          <input
            type="text"
            id="policyNumber"
            value={policyNumber}
            onChange={(e) => setPolicyNumber(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="APP-123456"
            required
          />
        </div>
        <button
          type="submit"
          disabled={!name.trim() || !policyNumber.trim()}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
        >
          Start Uploading Photos
        </button>
      </form>
    </div>
  );
};

export default WelcomeScreen;
