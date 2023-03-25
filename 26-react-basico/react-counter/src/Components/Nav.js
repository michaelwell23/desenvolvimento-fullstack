const Nav = ({ pages, onChangePage }) => {
  const pageNames = Object.keys(pages);

  return (
    <>
      <header id='header'>
        <div className='holder'>
          <div className='button-wrapper'>
            {pageNames.map((page) => (
              <button onClick={() => onChangePage(page)}>
                {pages[page].text}
              </button>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
