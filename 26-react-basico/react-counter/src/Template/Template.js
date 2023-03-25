import Nav from '../Components/Nav';

const Template = ({ children, pages, onChangePage }) => {
  return (
    <>
      <Nav pages={pages} onChangePage={onChangePage} />
      {children}
    </>
  );
};

export default Template;
