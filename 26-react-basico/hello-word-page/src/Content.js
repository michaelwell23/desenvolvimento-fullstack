import './Content.css';

const Content = ({ titulo, children }) => {
  return (
    <>
      <section class='section'>
        <div class='holder'>
          <div class='title'>{titulo}</div>
          {children}
        </div>
      </section>
    </>
  );
};

export default Content;
