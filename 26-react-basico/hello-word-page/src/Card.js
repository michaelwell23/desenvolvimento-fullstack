/* eslint-disable jsx-a11y/alt-text */
import './Card.css';

const Card = ({ imagem, titulo, texto }) => {
  return (
    <div className='card'>
      <img src={imagem} />
      <h3 className='title'>{titulo}</h3>
      <p className='subtitle'>{texto}</p>
    </div>
  );
};

export default Card;
