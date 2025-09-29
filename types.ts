export interface PhotoRequest {
  id: string;
  title: string;
  description: string;
  file?: File;
  previewUrl?: string;
  exampleImageUrl?: string;
}
