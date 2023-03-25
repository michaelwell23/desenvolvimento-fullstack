import './Cards.css';

const Cards = ({ children, title }) => {
  return (
    <>
      <div class='title'>{title}</div>
      <div className='cards'>{children}</div>
    </>
  );
};

export default Cards;
