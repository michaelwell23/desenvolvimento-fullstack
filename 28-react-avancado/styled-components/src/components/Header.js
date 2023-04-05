import styled from 'styled-components';

const Caixa = styled.div`
  width: 100px;
  height: 100px;
  background-color: #000;
`;

const Retangulo = styled.section`
  width: 500px;
  height: 300px;
  background-color: red;
`;

const Header = () => {
  return (
    <>
      <Retangulo>
        <Caixa />
      </Retangulo>
    </>
  );
};

export default Header;
