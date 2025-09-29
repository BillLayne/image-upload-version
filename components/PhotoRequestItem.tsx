import React, { useRef, useState } from 'react';
import { PhotoRequest } from '../types';
import CameraIcon from './icons/CameraIcon';
import UploadIcon from './icons/UploadIcon';
import CheckCircleIcon from './icons/CheckCircleIcon';
import TrashIcon from './icons/TrashIcon';

interface PhotoRequestItemProps {
  request: PhotoRequest;
  onPhotoUpdate: (id: string, file: File | null) => void;
}

const PhotoRequestItem: React.FC<PhotoRequestItemProps> = ({ request, onPhotoUpdate }) => {
  const uploadInputRef = useRef<HTMLInputElement>(null);
  const takePhotoInputRef = useRef<HTMLInputElement>(null);
  const [isExampleVisible, setIsExampleVisible] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      onPhotoUpdate(request.id, event.target.files[0]);
    }
    event.target.value = '';
  };

  const handleRemove = () => {
    onPhotoUpdate(request.id, null);
  };

  const ExampleModal = () => (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={() => setIsExampleVisible(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${request.id}`}
    >
      <div className="relative bg-white p-6 rounded-lg max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
        <h3 id={`modal-title-${request.id}`} className="text-xl font-semibold mb-2 text-slate-900">{request.title} - Example</h3>
        <p className="text-slate-600 mb-4">{request.description}</p>
        <img src={request.exampleImageUrl} alt={`Example for ${request.title}`} className="w-full h-auto object-contain rounded-md max-h-[60vh] bg-slate-100" />
        <button
          onClick={() => setIsExampleVisible(false)}
          className="absolute top-4 right-4 p-1 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="border border-slate-200 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-300">
        <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32">
          {request.previewUrl ? (
            <div className="relative group h-full w-full">
              <img src={request.previewUrl} alt={request.title} className="w-full h-full object-cover rounded-md bg-slate-100" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center rounded-md transition-opacity">
                <button onClick={handleRemove} className="p-2 bg-white rounded-full text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Remove photo">
                  <TrashIcon />
                </button>
              </div>
            </div>
          ) : (
            <div className="relative group h-full w-full">
              {request.exampleImageUrl ? (
                <>
                  <img src={request.exampleImageUrl} alt={`Example for ${request.title}`} className="w-full h-full object-cover rounded-md bg-slate-100" />
                  <button
                    onClick={() => setIsExampleVisible(true)}
                    className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 flex flex-col items-center justify-center rounded-md transition-opacity text-white"
                    aria-label="View example photo"
                  >
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center">
                        <CameraIcon className="w-8 h-8 mx-auto mb-1" />
                        <span className="font-semibold text-sm">View Example</span>
                    </div>
                  </button>
                </>
              ) : (
                <div className="w-full h-full bg-slate-100 rounded-md flex items-center justify-center text-slate-400">
                  <CameraIcon className="w-12 h-12" />
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex-grow">
          <div className="flex items-center mb-1">
            {request.file && <CheckCircleIcon className="text-green-500 mr-2" />}
            <h4 className="font-semibold text-slate-800">{request.title}</h4>
          </div>
          <p className="text-sm text-slate-500 mb-4">{request.description}</p>
          <div className="flex items-center space-x-2">
            <input type="file" accept="image/*" ref={uploadInputRef} onChange={handleFileChange} className="hidden" />
            <input type="file" accept="image/*" capture="environment" ref={takePhotoInputRef} onChange={handleFileChange} className="hidden" />
            <button
              onClick={() => takePhotoInputRef.current?.click()}
              className="inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md shadow-sm text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <CameraIcon className="mr-2" />
              Take Photo
            </button>
            <button
              onClick={() => uploadInputRef.current?.click()}
              className="inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md shadow-sm text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <UploadIcon className="mr-2" />
              Upload
            </button>
          </div>
        </div>
      </div>
      {isExampleVisible && request.exampleImageUrl && <ExampleModal />}
    </>
  );
};

export default PhotoRequestItem;
