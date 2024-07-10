'use client';

import PixelModal from '@/assets/components/PixelModal';
import PixelButton from '@/assets/components/PixelButton';
import PixelLoading from '@/assets/components/PixelLoading';
import { useEffect, useState } from 'react';
import { data } from '../data/mockedData';
import Recommendation from '@/assets/components/Recommendation';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRecommendationModalOpen, setIsRecommendationModalOpen] =
    useState<boolean>(false);
  const [showRecommendation, setShowRecommendation] = useState<boolean>(false);
  const [recommendation, setRecommendation] = useState({
    name: '',
    description: '',
    src: '',
  });

  function getRandomItem(array: string | any[]) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  const openRecommendationModal = () => {
    setIsRecommendationModalOpen(true);
    console.log('Opening the recommendation modal');
  };

  const getFilmRecommendation = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowRecommendation(true);
    }, 2000);
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
        <PixelModal
          handleClose={() => setIsRecommendationModalOpen(false)}
          setRecommendation={setRecommendation}
          recommendation={recommendation}
          sendForm={sendForm}
        ></PixelModal>
      ) : null}
      {isLoading ? (
        <PixelLoading />
      ) : (
        <div className='main-container'>
          {showRecommendation ? (
            <Recommendation
              recommendation={getRandomItem(data)}
            ></Recommendation>
          ) : null}
          <PixelButton onClick={() => getFilmRecommendation()}>
            <p>recibir recomendacion</p>
          </PixelButton>
          <PixelButton onClick={() => openRecommendationModal()}>
            recomendar una peli
          </PixelButton>
        </div>
      )}
    </main>
  );
}
