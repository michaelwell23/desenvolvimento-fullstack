import Header from './Header';
import Content from './Content';

import Cards from './Cards';
import Card from './Card';

const App = () => {
  return (
    <>
      <div class='wrapper'>
        <Header logo='Hello World' />
        <main className='main'>
          <Content titulo='Titulo da Página'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              mauris erat, pellentesque eget tellus vitae, tempus porta mi. Ut
              non arcu vel felis rhoncus malesuada sed sit amet nisi. Vestibulum
              condimentum eros tortor, sit amet consequat ligula fermentum nec.
              Phasellus consequat scelerisque pretium. Phasellus bibendum dui
              sed lacinia tincidunt. Aliquam ultricies lobortis dolor vitae
              pulvinar. Duis viverra non mauris quis molestie. In condimentum
              interdum lorem vel gravida. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Fusce a magna
              molestie, finibus neque nec, auctor felis. Donec ullamcorper, arcu
              et congue scelerisque, ex libero lacinia est, eget molestie quam
              massa ac quam. Ut mollis lacinia dictum. Nunc consectetur euismod
              leo porttitor eleifend. Etiam varius sed odio eget gravida. Ut
              pellentesque posuere purus non vulputate.
            </p>
            <p>
              Pellentesque in sodales augue. Mauris eu molestie lacus. Nam urna
              dolor, consequat in aliquam mollis, molestie sit amet erat.
              Quisque luctus rhoncus interdum. Ut at massa maximus felis euismod
              tincidunt egestas sit amet purus. Donec malesuada finibus libero,
              tempor sodales tellus congue id. Phasellus eu faucibus nibh, at
              sollicitudin nisi. Mauris ut nulla risus. Vivamus facilisis mi id
              lectus feugiat posuere id ut lectus. Donec ut arcu leo.
              Suspendisse vel nisl convallis est maximus porttitor. Nam rhoncus
              pellentesque dui a tempor. Nulla suscipit ex id nunc imperdiet
              egestas. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
            <p>
              Vestibulum porttitor gravida sodales. Pellentesque sed suscipit
              massa. Praesent et tellus facilisis, aliquet diam consectetur,
              molestie diam. Curabitur semper nisl nec orci gravida, ac feugiat
              diam condimentum. Proin hendrerit odio in diam maximus, ac tempus
              neque feugiat. Maecenas vel lacinia ligula. In hac habitasse
              platea dictumst. Duis sollicitudin, neque sit amet mattis
              ultricies, sapien quam viverra turpis, a suscipit purus ante ac
              massa. Donec blandit ultrices urna, ut consectetur nisl porta at.
              Pellentesque iaculis ex justo, ut porttitor neque commodo sed.
              Curabitur at lorem id magna mollis convallis ac hendrerit leo.
              Morbi arcu tellus, tempus at sem quis, blandit luctus eros.
            </p>
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Duis vehicula consequat odio, eu
              posuere tellus interdum a. In hac habitasse platea dictumst.
              Pellentesque cursus finibus tortor vel maximus. Donec varius
              vehicula elit at dictum. Pellentesque vitae luctus mauris. Donec
              dictum pellentesque vehicula. Suspendisse ultricies lectus neque,
              nec bibendum quam euismod a. Fusce cursus pretium elit, nec
              faucibus erat ullamcorper lobortis. Phasellus sed tempus ipsum.
              Vivamus fermentum varius mauris, nec aliquam nunc scelerisque et.
              Sed at lacus tincidunt, sodales dui quis, placerat tellus.
            </p>
          </Content>

          <Cards title='Cards'>
            <Card
              imagem='https://i0.wp.com/top10mais.org/wp-content/uploads/2014/01/Torre-Eiffel.jpg'
              titulo='Card1'
              texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              mauris erat, pellentesque eget tellus vitae, tempus porta mi. Ut
              non arcu vel felis rhoncus malesuada sed sit amet nisi. Vestibulum
              condimentum eros tortor'
            />
            <Card
              imagem='https://x4k6j7s8.stackpathcdn.com/wp-content/uploads/2022/03/lagun-beach-jericoacoara.jpg'
              titulo='Card2'
              texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec tempor augue. Sed dignissim egestas tristique.'
            />
            <Card
              imagem='https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='
              titulo='Card3'
              texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu felis imperdiet, mollis est ac, vulputate augue. '
            />
          </Cards>
        </main>
      </div>
    </>
  );
};

export default App;
