import { IoCloseCircle } from 'react-icons/io5';

const Modal = (props: { handleClose: () => void }) => {
  return (
    <div className='main-modal pixel_modal'>
      <div className='modal-close'>
        <IoCloseCircle onClick={() => props.handleClose()} />
      </div>
      <div className='modal-title-wrapper'>
        <h3>Recomendá una peli que te haya tocado el corazón</h3>
        <p>
          Jugatelá, no seas cagón, explicá por qué esa película te tocó el
          corazón, con quién la viste, por qué te emocionó o por qué es
          importante para vos. Esto no es una web para cinéfilos snobs, es una
          página para gente sensible
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
