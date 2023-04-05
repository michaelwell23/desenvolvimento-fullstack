import style from './Content.module.css';

const Content = () => {
  return (
    <div className={style.content}>
      <h2>Titulo</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,
        veritatis dolorem id corrupti nesciunt ipsum, incidunt distinctio at,
        excepturi ea non nam voluptas earum tempore quo rem deserunt laborum
        praesentium.
      </p>
      <button className={style.btn}>Outro Botão Teste</button>
    </div>
  );
};

export default Content;
