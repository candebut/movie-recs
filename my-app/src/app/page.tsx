'use client';

import Modal from '@/assets/components/Modal';
import PixelButton from '@/assets/components/PixelButton';
import PixelLoading from '@/assets/components/PixelLoading';
import { useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRecommendationModalOpen, setIsRecommendationModalOpen] =
    useState<boolean>(false);
  const [recommendation, setRecommendation] = useState({
    name: '',
    description: '',
    src: '',
  });
  const openRecommendationModal = () => {
    setIsRecommendationModalOpen(true);
    console.log('Opening the recommendation modal');
  };

  const getFilmRecommendation = () => {
    setIsLoading(true);
    console.log('getting film recommendation');
  };

  const sendForm = () => {
    console.log('sending form!');
    setIsRecommendationModalOpen(false);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-evenly p-24'>
      <h2>Te recomiendo esta peli porque</h2>
      {isRecommendationModalOpen ? (
        <Modal
          handleClose={() => setIsRecommendationModalOpen(false)}
          setRecommendation={setRecommendation}
          recommendation={recommendation}
          sendForm={sendForm}
        ></Modal>
      ) : null}
      {isLoading ? (
        <PixelLoading />
      ) : (
        <div className='main-container'>
          <PixelButton onClick={() => getFilmRecommendation()}>
            <p>recibir recomendacion</p>
          </PixelButton>
          <PixelButton onClick={() => openRecommendationModal()}>
            recomendar
            <br />
            una peli
          </PixelButton>
        </div>
      )}
    </main>
  );
}
