import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-evenly p-24'>
      <h2>Te recomiendo esta peli porque</h2>
      <div className='container'>
        <div className='pixel2'>
          <p>recibir recomendación</p>
        </div>
        <div className='pixel2'>
          recomendar
          <br />
          una peli
        </div>
      </div>
    </main>
  );
}
