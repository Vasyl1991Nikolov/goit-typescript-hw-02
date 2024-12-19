import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';
import { Toaster } from 'react-hot-toast';

const ACCESS_KEY = 'TSPYXE9lC1w6AVUHuEDi2N3pFqp99tyG9ouVhNJm6dY';

export interface ImageType {
  id: string;
  urls: { small: string; full: string };
  alt_description: string | null;
  user: { name: string };
}

interface AppState {
  images: ImageType[];
  query: string;
  page: number;
  loading: boolean;
  error: string | null;
  modalImage: ImageType | null;
}

const App: React.FC = () => {
  const [images, setImages] = useState<AppState['images']>([]);
  const [query, setQuery] = useState<AppState['query']>('');
  const [page, setPage] = useState<AppState['page']>(1);
  const [loading, setLoading] = useState<AppState['loading']>(false);
  const [error, setError] = useState<AppState['error']>(null);
  const [modalImage, setModalImage] = useState<AppState['modalImage']>(null);

  const fetchImages = async (searchQuery: string, pageNumber: number = 1): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: searchQuery, page: pageNumber, per_page: 12 },
        headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
      });
      const fetchedImages: ImageType[] = response.data.results;

      setImages((prev) => (pageNumber === 1 ? fetchedImages : [...prev, ...fetchedImages]));
    } catch (err) {
      setError('Failed to load images. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (newQuery: string): void => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    fetchImages(newQuery, 1);
  };

  const loadMoreImages = (): void => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  };

  const openModal = (image: ImageType): void => {
    setModalImage(image);
  };

  const closeModal = (): void => {
    setModalImage(null);
  };

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMoreImages} />}
      {modalImage && <ImageModal image={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
