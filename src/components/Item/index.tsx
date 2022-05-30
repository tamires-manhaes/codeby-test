import { FunctionComponent } from 'react';
import { Card } from './styles';

interface ICard {
  id: string;
  imageUrl: string;
  listPrice: number;
  sellingPrice: number;
  name: string;
  detailUrl: string;
}

const Item: FunctionComponent<ICard> = ({
  id,
  imageUrl,
  listPrice,
  sellingPrice,
  name,
  detailUrl,
}) => {
  return (
    <Card key={id}>
      <a href={detailUrl}>
        <div className="imgBox">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="dataBox">
          <h3>{name}</h3>
          <span className="listPrice">R$ {listPrice}</span>
          <span className="sellingPrice">R$ {sellingPrice}</span>
        </div>
      </a>
    </Card>
  );
};

export default Item;
