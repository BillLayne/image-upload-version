import { PhotoRequest } from './types';

export const REQUIRED_PHOTOS: Omit<PhotoRequest, 'file' | 'previewUrl'>[] = [
  {
    id: 'front-exterior',
    title: 'Front Exterior of Home',
    description: 'A clear view of the entire front of the house, including the roof and any landscaping.',
    exampleImageUrl: 'https://placehold.co/600x400/a3bffa/ffffff?text=Front+of+House',
  },
  {
    id: 'rear-exterior',
    title: 'Rear Exterior of Home',
    description: 'A clear view of the entire back of the house, including any decks or patios.',
    exampleImageUrl: 'https://placehold.co/600x400/a3bffa/ffffff?text=Rear+of+House',
  },
  {
    id: 'kitchen',
    title: 'Kitchen',
    description: 'A wide-angle shot showing all major appliances (stove, refrigerator, etc.).',
    exampleImageUrl: 'https://placehold.co/600x400/a3bffa/ffffff?text=Kitchen',
  },
  {
    id: 'electrical-panel',
    title: 'Electrical Panel (Door Open)',
    description: 'A clear, well-lit photo of the electrical panel with the cover door open.',
    exampleImageUrl: 'https://placehold.co/600x400/a3bffa/ffffff?text=Electrical+Panel',
  },
  {
    id: 'water-heater',
    title: 'Water Heater',
    description: 'Show the entire unit, including pipes and connections. Ensure the label is visible if possible.',
    exampleImageUrl: 'https://placehold.co/600x400/a3bffa/ffffff?text=Water+Heater',
  },
  {
    id: 'hvac-system',
    title: 'HVAC System',
    description: 'A photo of your primary heating and cooling unit.',
    exampleImageUrl: 'https://placehold.co/600x400/a3bffa/ffffff?text=HVAC+System',
  },
];
