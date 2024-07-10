import { IoCloseCircle } from 'react-icons/io5';
import PixelButton from './PixelButton';

const PixelModal = (props: {
  handleClose: () => void;
  setRecommendation: any;
  recommendation: any;
  sendForm: any;
}) => {
  return (
    <div className={`main-modal pixel_modal`}>
      <div className='modal-content'>
        <div className='modal-close'>
          <IoCloseCircle onClick={() => props.handleClose()} />
        </div>
        <div className='modal-title-wrapper'>
          <h1>Recomendá una peli que te haya tocado el corazón</h1>
          <p>
            Jugatelá, no seas cagón, explicá por qué esa película te tocó el
            corazón, con quién la viste, por qué te emocionó o por qué es
            importante para vos. Lo que sea que haga que hoy en día te sientas
            conectado con esa película. Podés ser concreto o explayarte como si
            fueses uno de esos cinéfilos pretensiosos que escriben 10 párrafos
            en una review de letterbox. Lo que sí, evitá los spoilers!!
          </p>
        </div>
        <div className='modal-form-wrapper'>
          <label htmlFor='film-name'>Nombre de la película</label>
          <input
            name='film-name'
            id='film_name'
            value={props.recommendation.name}
            onChange={(e) =>
              props.setRecommendation({
                ...props.recommendation,
                name: e.target.value,
              })
            }
          />
          <label htmlFor='film-exp'>Por qué recomendas esta película?</label>
          <textarea
            rows={4}
            name='film-exp'
            value={props.recommendation.description}
            onChange={(e) =>
              props.setRecommendation({
                ...props.recommendation,
                description: e.target.value,
              })
            }
          ></textarea>
          <label htmlFor='film-src'>
            Optativo: dónde verla. Si sabés en qué plataforma encontrarla o
            tenés algún link gratuito que quieras compartir, dejalo acá
          </label>
          <input
            name='film-src'
            id='film_src'
            value={props.recommendation.src}
            onChange={(e) =>
              props.setRecommendation({
                ...props.recommendation,
                src: e.target.value,
              })
            }
          />
        </div>
        <div className='modal-button'>
          <PixelButton onClick={() => props.sendForm()}>Enviar</PixelButton>
        </div>
      </div>
    </div>
  );
};

export default PixelModal;
