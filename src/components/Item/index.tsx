import { FunctionComponent } from 'react';
import { Card } from './styles';

interface ICard {
  id: string;
  imageUrl: string;
  listPrice: number;
  sellingPrice: number;
  name: string;
  detailUrl: string;
  value: number;
}

const Item: FunctionComponent<ICard> = ({
  id,
  imageUrl,
  listPrice,
  sellingPrice,
  name,
  detailUrl,
  value,
}) => {
  let formatedListPrice = `${listPrice.toString().slice(0, 1)},${listPrice
    .toString()
    .slice(-2)}`;

  let formatedSellingPrice = `${sellingPrice
    .toString()
    .slice(0, 1)},${sellingPrice.toString().slice(-2)}`;
  return (
    <Card key={id}>
      <a href={detailUrl}>
        <div className="imgBox">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="dataBox">
          <h3>{name}</h3>
          <span className="listPrice">R$ {formatedListPrice}</span>
          <span className="sellingPrice">R$ {formatedSellingPrice}</span>
        </div>
      </a>
    </Card>
  );
};

export default Item;
