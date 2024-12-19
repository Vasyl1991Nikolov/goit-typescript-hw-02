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

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const fetchImages = async (searchQuery, pageNumber = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: searchQuery, page: pageNumber, per_page: 12 },
        headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
      });
      const fetchedImages = response.data.results;

      setImages((prev) => (pageNumber === 1 ? fetchedImages : [...prev, ...fetchedImages]));
    } catch (err) {
      setError('Failed to load images. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    fetchImages(newQuery, 1);
  };

  const loadMoreImages = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
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
