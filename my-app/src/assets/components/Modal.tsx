import { IoCloseCircle } from 'react-icons/io5';
import localFont from 'next/font/local';

const rainbowIt = localFont({ src: '../fonts/Rainbow2000-Italic.ttf' });
const rainbow = localFont({ src: '../fonts/Rainbow2000-Regular.ttf' });
const tagHandTrash = localFont({ src: '../fonts/TagHandTrash.otf' });
const theVintage = localFont({ src: '../fonts/TheVintage.otf' });
const vintageOne = localFont({ src: '../fonts/VintageOne.ttf' });
const zai = localFont({ src: '../fonts/zai_HongKongGraffiti.ttf' });

const Modal = (props: { handleClose: () => void }) => {
  return (
    <div className={`main-modal pixel_modal ${rainbowIt}`}>
      <div className='modal-close'>
        <IoCloseCircle onClick={() => props.handleClose()} />
      </div>
      <div className='modal-title-wrapper'>
        <h1>Recomendá una peli que te haya tocado el corazón</h1>
        <p>
          Jugatelá, no seas cagón, explicá por qué esa película te tocó el
          corazón, con quién la viste, por qué te emocionó o por qué es
          importante para vos. Esto no es una web para cinéfilos snobs, es una
          web para gente sensible.
        </p>
      </div>
      <div className='modal-form-wrapper'>
        <label htmlFor='film-name'>Nombre de la película</label>
        <input name='film-name' id='film_name' />
        <label htmlFor='film-exp'>Por qué recomendas esta película?</label>
        <textarea></textarea>
        <label htmlFor='film-src'>
          Optativo: dónde verla. Si sabés en qué plataforma encontrarla o tenés
          algún link gratuito que quieras compartir, dejalo acá
        </label>
        <input name='film-name' id='film_name' />
      </div>
    </div>
  );
};

export default Modal;
