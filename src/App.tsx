import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Item from './components/Item';
import TotalBox from './components/TotalBox';
import abaixo10 from './data/abaixo-10-reais';
import acima10 from './data/acima-10-reais';
import { Container, List } from './styles';

function App() {
  const handleButtonClick = () => {
    console.log('finalizar compra');
  };
  const items = abaixo10;

  return (
    <div className="App">
      <Header />
      <Container>
        <List>
          {items ? (
            items.items.map((item) => {
              return (
                <Item
                  id={item.id}
                  key={item.id}
                  detailUrl={item.detailUrl}
                  imageUrl={item.imageUrl}
                  listPrice={item.listPrice}
                  sellingPrice={item.sellingPrice}
                  name={item.name}
                />
              );
            })
          ) : (
            <></>
          )}
        </List>
      </Container>
      <TotalBox value={acima10.value} />
      <Footer onClick={handleButtonClick} />
    </div>
  );
}

export default App;
