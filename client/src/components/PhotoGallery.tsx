import React, { useState } from 'react';
import { Upload, X, Heart, MessageCircle } from 'lucide-react';

interface Photo {
  id: number;
  url: string;
  caption?: string;
  userId: number;
  userName: string;
  likes: number;
  comments: number;
  uploadedAt: Date;
}

interface PhotoGalleryProps {
  photos: Photo[];
  onPhotoUpload: (file: File, caption: string) => void;
  onPhotoDelete: (photoId: number) => void;
  onPhotoLike: (photoId: number) => void;
  isLoading?: boolean;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos,
  onPhotoUpload,
  onPhotoDelete,
  onPhotoLike,
  isLoading = false
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [uploadCaption, setUploadCaption] = useState('');
  const [showUploadForm, setShowUploadForm] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onPhotoUpload(file, uploadCaption);
      setUploadCaption('');
      setShowUploadForm(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Event Photos</h3>
        <button
          onClick={() => setShowUploadForm(!showUploadForm)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <Upload size={20} />
          Upload Photo
        </button>
      </div>

      {showUploadForm && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photo Caption
              </label>
              <input
                type="text"
                value={uploadCaption}
                onChange={(e) => setUploadCaption(e.target.value)}
                placeholder="Add a caption to your photo..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Photo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                disabled={isLoading}
                className="w-full"
              />
            </div>
            <button
              onClick={() => setShowUploadForm(false)}
              className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {photos.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No photos yet. Be the first to upload!</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map(photo => (
            <div
              key={photo.id}
              className="relative group cursor-pointer rounded-lg overflow-hidden bg-gray-200"
            >
              <img
                src={photo.url}
                alt={photo.caption}
                onClick={() => setSelectedPhoto(photo)}
                className="w-full h-40 object-cover group-hover:opacity-75 transition"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPhotoLike(photo.id);
                  }}
                  className="p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition"
                >
                  <Heart size={20} className="text-red-500" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-xs font-medium">{photo.userName}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-800">Photo Details</h3>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                className="w-full h-96 object-cover rounded-lg mb-4"
              />

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Uploaded by</p>
                  <p className="font-semibold text-gray-800">{selectedPhoto.userName}</p>
                </div>

                {selectedPhoto.caption && (
                  <div>
                    <p className="text-sm text-gray-600">Caption</p>
                    <p className="text-gray-800">{selectedPhoto.caption}</p>
                  </div>
                )}

                <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition">
                    <Heart size={20} />
                    <span className="text-sm">{selectedPhoto.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition">
                    <MessageCircle size={20} />
                    <span className="text-sm">{selectedPhoto.comments}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
