'use client';

import PixelButton from '@/assets/components/PixelButton';
import PixelLoading from '@/assets/components/PixelLoading';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const openRecommendationModal = () => {
    setIsLoading(true);
    console.log('Opening the recommendation modal');
  };

  const getFilmRecommendation = () => {
    setIsLoading(true);
    console.log('getting film recommendation');
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-evenly p-24'>
      <h2>Te recomiendo esta peli porque</h2>
      {isLoading ? (
        <PixelLoading />
      ) : (
        <div className='main-container'>
          <PixelButton onClick={() => getFilmRecommendation()}>
            <p>recibir recomendación</p>
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
