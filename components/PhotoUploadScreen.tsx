
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PhotoRequest } from '../types';
import { REQUIRED_PHOTOS } from '../constants';
import PhotoRequestItem from './PhotoRequestItem';

const PhotoUploadScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [photoRequests, setPhotoRequests] = useState<PhotoRequest[]>(REQUIRED_PHOTOS.map(p => ({ ...p })));

  useEffect(() => {
    if (!location.state?.name) {
      navigate('/');
    }
  }, [location.state, navigate]);
  
  const handlePhotoUpdate = (id: string, file: File | null) => {
    setPhotoRequests(prevRequests =>
      prevRequests.map(req => {
        if (req.id === id) {
          if (req.previewUrl) {
            URL.revokeObjectURL(req.previewUrl);
          }
          if (file) {
            return { ...req, file, previewUrl: URL.createObjectURL(file) };
          }
          return { ...req, file: undefined, previewUrl: undefined };
        }
        return req;
      })
    );
  };

  const completedCount = photoRequests.filter(req => req.file).length;
  const totalCount = photoRequests.length;
  const allPhotosUploaded = completedCount === totalCount;

  const handleSubmit = () => {
    // In a real app, this would trigger an upload to a secure backend.
    console.log("Submitting photos for:", location.state);
    console.log(photoRequests);
    navigate('/confirmation', { state: { name: location.state.name } });
  };

  if (!location.state?.name) {
    return null; // or a loading spinner
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Upload Your Photos</h2>
        <p className="text-slate-600 mt-2">
          Hi <span className="font-semibold">{location.state.name}</span>, please provide the following photos. You can upload from your device or take a new photo.
        </p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-slate-800">Photo Checklist</h3>
          <span className="text-sm font-medium text-slate-500">{completedCount} of {totalCount} completed</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5 mb-6">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(completedCount / totalCount) * 100}%` }}></div>
        </div>

        <div className="space-y-6">
          {photoRequests.map(request => (
            <PhotoRequestItem
              key={request.id}
              request={request}
              onPhotoUpdate={handlePhotoUpdate}
            />
          ))}
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={!allPhotosUploaded}
          className="w-full sm:w-auto flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
        >
          Submit All Photos
        </button>
      </div>
    </div>
  );
};

export default PhotoUploadScreen;
